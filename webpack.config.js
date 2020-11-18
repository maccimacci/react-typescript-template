const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

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
            test: /\.s(a|c)ss$/,
            use: [
              'style-loader',
              'css-loader',
              // {
              //   loader: 'css-loader',
              //   options: { modules: true }
              // },
              'postcss-loader',
              'sass-loader'
            ]
          }
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
            template: path.join(__dirname, 'src/public', 'template.html')
        })
    ]

}