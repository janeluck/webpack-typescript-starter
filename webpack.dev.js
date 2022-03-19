const HtmlWebpackPlugin = require('html-webpack-plugin');
const {merge} = require('lodash');
const base = require('./webpack.config');
module.exports = merge(base, {
    mode: 'development',
    devServer: {
        static: './dist',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'demo/index.html'
        }),
    ],
})
