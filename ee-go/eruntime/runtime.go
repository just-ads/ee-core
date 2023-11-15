package eruntime

import (
	"fmt"
	"os"
	"os/exec"
	"path/filepath"
)

var (
	Version = "0.1.0"
	ENV     = "dev" // 'dev' 'prod'
	// progressBar  float64 // 0 ~ 100
	// progressDesc string  // description

	HttpServer = false
	AppName    = ""
	Platform   = "pc" // pc | mobile | web
	IsExiting  = false
)

var (
	BaseDir, _      = os.Getwd()
	HomeDir         string // electron-egg home directory
	GoDir           string // electron-egg go directory
	PublicDir       string // electron-egg public directory
	UserHomeDir     string // OS user home directory
	UserHomeConfDir string // OS user home config directory
	WorkDir         string // App working directory
	DataDir         string // data directory
	TmpDir          string // tmp directory
)

var (
	HttpPort            = 7073
	HttpServerIsRunning = false
)

func InitDir() {
	HomeDir = filepath.Join(BaseDir, "..")
	if IsPord() {
		HomeDir = BaseDir
	}

	GoDir = filepath.Join(HomeDir, "go")
	if IsPord() {
		GoDir = BaseDir
	}
}

// Pwd gets the path of current working directory.
func IsPord() bool {
	return (ENV == "prod")
}

func IsDev() bool {
	return (ENV == "dev")
}

func Pwd() string {
	file, _ := exec.LookPath(os.Args[0])
	pwd, _ := filepath.Abs(file)

	return filepath.Dir(pwd)
}

func Debug() {
	fmt.Println("BaseDir:", BaseDir)
	fmt.Println("HomeDir:", HomeDir)
	fmt.Println("GoDir:", GoDir)
	fmt.Println("PublicDir:", PublicDir)

	fmt.Println("UserHomeDir:", UserHomeDir)
	fmt.Println("UserHomeConfDir:", UserHomeConfDir)
	fmt.Println("WorkDir:", WorkDir)
	fmt.Println("DataDir:", DataDir)
	fmt.Println("TmpDir:", TmpDir)
}