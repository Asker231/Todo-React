const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode:"development",
    entry:path.resolve(__dirname,'src','index.jsx'),
    output:{
        filename:"[name].[contenthash].js",
        path:path.resolve(__dirname,'dist'),
        clean:true
    },
    plugins:[new HtmlWebpackPlugin({template:path.resolve(__dirname,'public','index.html')})],
    module:{
        rules:[
            {
                test:/\.jsx?$/,
                exclude:/node_modules/,
                use:'babel-loader'
            }
        ]
    },
    resolve:{
        extensions:['.js','.jsx']
    },
    devServer:{
        port:3002,
        open:true,
        hot:true
    }
}