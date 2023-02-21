const path = require('path');
const miniCss = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    target: 'web',
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [{
            test: /\.css$/i,
            use: [
                miniCss.loader,
                'css-loader',
            ]
        }],
    },
    plugins: [
        new miniCss({
            filename: 'styles.css',
        }),
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: 'src/images',
                    to: 'images'
                },
            ],
        }),
    ],
    watchOptions: {
        aggregateTimeout: 600,
    },
    devServer: {
        port: 9000,
        static: {
            directory: path.join(__dirname, 'dist'),
        },
    }
};