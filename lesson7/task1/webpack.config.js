const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlagin = require("html-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.s?css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpg|png|gif)$/i,
                use:{
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: '[name].[ext]',
                        outputPath: 'images',
                    },
                },
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlagin({
            template: "./src/index.html"
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
        
    ]
};