// 这是 main.js 是我们项目js的入口文件

//1. 导入Jquery
//import ** from ** 是Es6中导入模块的方式
import $ from 'jquery'

$(function () {
    $('li:odd').css('backgroundColor','lightgreen')
    // $('li:even').css('backgroundColor',function (){
    //     return '#' + 'D00055'
    // })
    $('li:even').css('backgroundColor','yellow')
})

/*
    1. webpack 能够处理 js 文件的互相依赖关系;
    2. webpack 能处理 js 的兼容问题, 把高级的,浏览器不识别的语法,转为低级的能识别的语法
    运行命令格式:  webpack 要打包的文件路径  打包好的输出文件路径
*/

// 为了迅速 webpack-dev-server 帮我们打包生成的 bundle.js 文件，
// 并没有存放到实际物理磁盘上；而是，直接托管到了电脑的内存中，
// 所以，我们在项目的根目录中，根本找不到这个新打包好的 bundle.js 文件

// 可以认为，webpack-dev-server 帮我们打包的文件，以一种虚拟的形式，
// 托管到了项目的根目录中，虽然看不见，但可以认为，和 dist src node_modules 平级，
// 有一个看不见的文件，叫做 bundle.js