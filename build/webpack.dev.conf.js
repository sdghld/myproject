var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path');
// �����������
var config = require('./webpack.config');

config.output.publicPath = '/';

config.plugins = [
    new HtmlWebpackPlugin({
        filename: 'app/index/index.html',
        template: path.resolve(__dirname, '../app/index/index.html'),
        inject: true
    })
];

module.exports = config;