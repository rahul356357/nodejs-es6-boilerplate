const webpack = require('webpack');
const path = require('path');
const webpackNodeExternals  = require('webpack-node-externals')
const config = {
    mode:'development',
    target:'node',
    entry:'./bin/www',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'build')
    },
    module:{
        rules:[
            {
                test:/\.js?$/,
                loader:'babel-loader',
                exclude:/node_modules/,
            }  
        ]
    },
    externals:[webpackNodeExternals()]
}

module.exports = config