const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const CopyWebpackPlugin = require('copy-webpack-plugin');

const path = require( 'path' );

module.exports = {
    context: __dirname,
    entry: './src/index.js',
    output: {
        path: path.resolve( __dirname, 'dist' ),
        filename: 'main.js',
        publicPath: '/',
    },
    devServer: {
        historyApiFallback: true,
        publicPath: '/'
     },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_module/,
                use: 'babel-loader'
            },
            {
                test: /\.css?$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/i,
                use: 'file-loader'
            }
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.resolve( __dirname, 'public/index.html' ),
            filename: 'index.html'
        }),
        // new CopyWebpackPlugin({
        //     patterns: [
        //         { from: 'public' }
        //     ]
        // })
    ]
};