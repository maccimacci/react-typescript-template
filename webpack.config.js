const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {

    mode : 'development',
    entry : './src/index.tsx',
    devServer: {
        historyApiFallback: true,
        contentBase: './dist',
        hot: true
    },
    module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
          {
            test: /\.(woff(2)?|ttf|eot|png|svg)(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'file-loader',
            options: {
              name: '[hash].[ext]',
              outputPath: 'assets/',

            }
          },
          {
            test: /\.(s*)css$/,
            use: [
              'style-loader',
              'css-loader',
              'sass-loader'
            ]
          },
        ],
    },

    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },

    plugins: [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new HtmlWebpackPlugin({
            title: "change me",
            favicon: "./src/assets/favicon.ico",
            template: path.join(__dirname, 'src/public', 'template.html')
        }),
        new Dotenv(),

    ]

}