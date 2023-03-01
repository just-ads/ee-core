const EventEmitter = require('events');
const path = require('path');
const fs = require('fs');
const ForkProcess = require('./forkProcess');
const Ps = require('../../utils/ps');
const Loader = require('../../loader');

class ChildJob extends EventEmitter {

  constructor() {
    super();
    this.jobList = new Map();
  }

  /**
   * 运行任务
   */  
  run(name, filepath, opt = {}) {

    const jobPath = this._getFullpath(filepath);
    let options = Object.assign({
      times: 1,
      params: {},
    }, opt);

    // 消息对象
    let msg = {
      jobPath: jobPath,
      params: options.params
    }
    let subProcess;
    for (let i = 1; i <= options.times; i++) {
      subProcess = new ForkProcess(this, options);
      this.jobList.set(name, i);

      // 发消息到子进程
      subProcess.child.send(msg);
    }
  
    return;
  }

  _getFullpath(filepath) {
    const isAbsolute = path.isAbsolute(filepath);
    if (!isAbsolute) {
      filepath = path.join(Ps.getBaseDir(), filepath);
    }

    const fullpath = Loader.resolveModule(filepath);
    if (!fs.existsSync(fullpath)) {
      throw new Error(`[ee-core] [jobs/child] file ${fullpath} not exists`);
    }

    return fullpath;
  }

}

module.exports = ChildJob;
