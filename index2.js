'use strict';

/**
 * @namespace EeCore
 */

/**
 * @member {EeAppliaction} EeCore#EeAppliaction
 * @since 1.0.0
 */
exports.Appliaction = require('./lib/application');

/**
 * @member {ELogger} EeCore#ELogger
 * @since 1.0.0
 */
exports.Logger = require('./lib/eLogger');

/**
 * @member {Helper} EeCore#Helper
 * @since 1.0.0
 */
exports.Helper = require('./lib/helper');

/**
 * @member {Storage} EeCore#Storage
 */
exports.Storage = require('./lib/storage');

/**
 * @member {Controller} EeCore#Controller
 * @since 1.0.0
 */
exports.Controller = require('./core/lib/utils/base_context_class');

/**
 * @member {Service} EeCore#Service
 * @since 1.0.0
 */
exports.Service = require('./core/lib/utils/base_context_class');