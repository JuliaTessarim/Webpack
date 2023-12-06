const  MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');

module.exports = {
    entry: './src/INDEX.js',
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    mode: 'development',
    devServer:{
        port: 9000,
        static: {
            directory:path.join(__dirname, './dist'),
        },
        hot: true,
        historyApiFallback: {index: 'INDEX.html'}
    },
    module: {
        rules:[
            {
            test: /\.css$/,
            use:[
                MiniCssExtractPlugin.loader, 'css-loader'
            ]
        }
    ]
},
 plugins:[
    new MiniCssExtractPlugin({
        filename: 'INDEX.css'

    }),
    new HtmlWebpackPlugin({
        filename: 'index.html'
    })
  ]
}
