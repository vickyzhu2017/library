var path = require('path');
var webpack = require('webpack');
var _mode = require('yargs').argv.mode;

//plugin
var uglifyPlugin = webpack.optimize.UglifyJsPlugin;

var _libraryName = "sparrow",
    _fileName = '',
    _plugins = [];

console.log("_mode:"+_mode);

//生产环境
if(_mode === 'production'){
    _fileName = _libraryName + '.min.js';

    _plugins.push(
        new uglifyPlugin({minimize: true})
    )
}
//开发环境
else{
    _fileName = _libraryName + '.js';
}


var config = {
    entry: path.resolve(__dirname,'./src/index.js'),
    output: {
        path: path.resolve(__dirname, './lib'),
        filename: _fileName,
        // 配置umd规范
        library: _libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    resolve: {
        extension: ['.js','.less','.css'],
        root: path.resolve('./src')
    },
    //开发工具配置
    "devtool": "cheap-source-map",
    module:{
        loaders:[
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: 'node_modules'
            },
            {
                test: /\.js$/,
                loader: 'eslint',
                exclude: 'node_modules'
            }
        ]
    },
    plugins: _plugins
}

module.exports = config;