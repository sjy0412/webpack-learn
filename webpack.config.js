//js文件,目的是通过Node 中的模块操作,向外暴露了一个配置对象
const path = require('path')
module.exports = {
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, './dist'), //指定目录
        filename: 'bundle.js' //指定文件名称
    }
}
//当我们在 控制台直接输入 webpack 命令执行的时候, webpack 做了以下几步
//  1. 首先, webpack 没有通过命令的形式给它指定入口和出口
//  2. webpack 就会去项目的更目录中查找一个叫做 "webpack.config.js的配置文件"
//  3. 当找到配置文件后,webpack 会去解析执行这个配置文件,当解析执行完配置文件后,就得到了导出的配置对象
//  4. 当webpack 拿到配置对象后, 就拿到了配置对象中指定的入口和出口,然后进行打包构建