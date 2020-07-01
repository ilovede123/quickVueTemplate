#!/usr/bin/env node
const fs = require('fs');
const path = require('path')
let argv = process.argv;
var styles = {
    'bold': ['\x1B[1m%s\x1B[22m'],
    'italic': ['\x1B[3m%s\x1B[23m'],
    'underline': ['\x1B[4m%s\x1B[24m'],
    'inverse': ['\x1B[7m%s\x1B[27m'],
    'strikethrough': ['\x1B[9m%s\x1B[29m'],
    'white': ['\x1B[37m%s\x1B[39m'],
    'grey': ['\x1B[90m%s\x1B[39m'],
    'black': ['\x1B[30m%s\x1B[39m'],
    'blue': ['\x1B[34m%s\x1B[39m'],
    'cyan': ['\x1B[36m%s\x1B[39m'],
    'green': ['\x1B[32m%s\x1B[39m'],
    'magenta': ['\x1B[35m%s\x1B[39m'],
    'red': ['\x1B[31m%s\x1B[39m'],
    'yellow': ['\x1B[33m%s\x1B[39m'],
    'whiteBG': ['\x1B[47m%s\x1B[49m'],
    'greyBG': ['\x1B[49;5;8m%s\x1B[49m'],
    'blackBG': ['\x1B[40m%s\x1B[49m'],
    'blueBG': ['\x1B[44m%s\x1B[49m'],
    'cyanBG': ['\x1B[46m%s\x1B[49m'],
    'greenBG': ['\x1B[42m%s\x1B[49m'],
    'magentaBG': ['\x1B[45m%s\x1B[49m'],
    'redBG': ['\x1B[41m%s\x1B[49m'],
    'yellowBG': ['\x1B[43m%s\x1B[49m']
};
if(!argv[2]){
    throw new Error("缺少指定参数 请使用--html或者其它")
}
switch (argv[2]) {
    case '--html':
        let htmlTem = fs.readFileSync(path.resolve(__dirname,"../lib/tem.html"))
        let createFilePath = process.cwd() //获取当前命令行的路径
        let fileName = argv[3] + ".html" || "vue模板.html"//获取命令行的参数
        let filePath = path.resolve(createFilePath, fileName)
        //查询文件是否存在
        if (fs.existsSync(filePath)) {
            console.log(styles['red'][0], "当前文件已存在,不要重复创建")
            return
        }
        fs.writeFile(filePath, htmlTem, function (err) {
            if (err) throw err
            console.log(styles['green'][0], '创建成功--千锋edu')
        })
        break
}
