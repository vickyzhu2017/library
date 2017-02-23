# 如何开发一个属于自己的前端类库

-	基于webpack进行资源构建
-	使用es6语法进行开发
-	将包输出为umd规范的文件
-	使用mocha和chai进行测试
-	使用eslint来进行代码检查
-	基于npm scripts来集成开发命令
-	代码push到github
-	将包发布到npm

## 基于开发环境

-	全局环境 node & npm
-	命令行： terminal & shell
-	版本管理： git
-	编辑器： webstorm2016
-	浏览器：chrome
-	注册npm账号
-	注册github账号

## 创建项目的基本结构
```
src  开发源代码
lib  编译后的资源
test 测试用例
.gitignore
LICENSE
README.md
package.json
webpack.config.js
.babelrc
.selint.js
```

##结合webpack跑通es6语法编译过程
-	webpack.config.js
```
npm install webpack webpack-dev-server --save-dev
```
-	babel及其相关preset、plugin、loader
```
npm install babel-loader babel-core babel-preset-es2015 babel-plugin-add-module-exports --save-dev
```
babel-preset-es2015-loose babel-preset-stage-0 babel-preset-es2016
##umd
```
npm install babel-plugin-transform-es2015-modules-umd --save
```

##webpack几个小配置
-	resolve
		    extension 拓展名，方便
			root 添加默认搜索路径，但得是绝对路径，可以是数组和字符串
-	devtool开发工具配置
		cheap-source-map
##区分开发环境和生产环境
-	sparrow.js（开发环境，未压缩校验，一些开发环境的配置和代码）
-	sparrow.min.js（生产环境）
```
process.env.WEBPACK_ENV
yargs
	npm i yargs --save-dev
	var mode = require('yargs').argv.mode;
```
##将用于生产环境的代码压缩
```
webpack.optimize.UglifyJsPlugin
```
-	提供生产环境和开发环境的文件名需要区分
##eslint
```
npm i eslint eslint-loader --save-dev
eslint --init
```

##测试
-	mocha测试框架
-	chai断言库

##代码push到github
## 将包发布到npm
```
npm adduser
npm publish
```