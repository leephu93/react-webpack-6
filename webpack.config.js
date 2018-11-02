const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VENDOR_LIBS = [
    "bootstrap",
    "popper.js",
    "jquery",
    "react",
    "react-dom"
]

module.exports = {
    entry: {
        bundle: './src/index.js',
        vendor: VENDOR_LIBS
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].[chunkhash].js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        publicPath: 'http://localhost:9000/dist/',
        compress: true,
        port: 9000,
        open: true,
        disableHostCheck: true,
        historyApiFallback: true,
        overlay: true,
        stats: 'minimal',
        inline: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: '/node_modules/'
            },
            {
                // test: /\.css$/,
                // use: ['style-loader', 'css-loader'],
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '/dist'
                        }
                    }, "css-loader"
                ]
            },
            {
                test: /\.(svg|woff|woff2|eot|ttf|wav|mp3|mp4|ico)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/',       // Tạo thư mục fonts chứa đầu ra các file fonts của font-awesome
                        publicPath: '/dist/fonts'   // Ghi đè đường dẫn mặc định các url của font trong font-awesome.min.css
                    }
                }]
            }
            ,
            {
                test: /\.(jpeg|jpg|png|gif)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'assets/',
                        publicPath: '/dist/assets'
                    }
                }]
            }
        ]
    },
    optimization: {
        runtimeChunk: {
            name: 'vendor'
        },
        splitChunks: {
            // cacheGroups: {
            //     vendors: {
            //         test: /[\\/]node_modules[\\/]/,
            //         priority: -10,
            //         // reuseExistingChunk: true
            //     },
            //     default: {
            //         minChunks: 2,
            //         priority: -20,
            //         reuseExistingChunk: true
            //     }
            // },
            chunks: 'all'
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
        })
    ],
    mode: 'production'
}