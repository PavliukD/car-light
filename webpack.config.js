const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

// let htmlPageNames = ['offer'];


module.exports = {
    entry: './src/index.js',
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, 'build'),
        // assetModuleFilename: 'images/[name][ext][query]',
    },
    module: {
        rules: [
            // {
            //     test: /\.js$/,
            //     exclude: /node_modules/,
            //     // use: ['babel-loader'],
            //     // type: 'javascript/auto',
            // },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: false
                        }
                    },
                    {
                        loader: 'posthtml-loader',
                        options: {
                            plugins: [
                                require('posthtml-include')({
                                    root: './src'
                                })
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.jpe?g$|\.gif$|\.png$|\.PNG$|\.svg$|\.woff(2)?$|\.ttf$|\.eot$/,
                type: 'asset/resource',
                generator: {
                   filename: 'images/[name][ext][query]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html',
            minify: false
        }),
        new HtmlWebpackPlugin({
            filename: 'offer.html',
            template: 'src/offer.html',
            minify: false
        }),
        new HtmlWebpackPlugin({
            filename: 'security.html',
            template: 'src/security.html',
            minify: false
        }),
        new HtmlWebpackPlugin({
            filename: '404.html',
            template: 'src/404.html',
            minify: false
        }),
        new HtmlWebpackPlugin({
            filename: 'contacts.html',
            template: 'src/contacts.html',
            minify: false
        }),
        new HtmlWebpackPlugin({
            filename: 'services.html',
            template: 'src/services.html',
            minify: false
        }),
        new HtmlWebpackPlugin({
            filename: 'sort.html',
            template: 'src/sort.html',
            minify: false
        }),
        new HtmlWebpackPlugin({
            filename: 'catalog.html',
            template: 'src/catalog.html',
            minify: false
        }),
        new HtmlWebpackPlugin({
            filename: 'blog.html',
            template: 'src/blog.html',
            minify: false
        }),
        new HtmlWebpackPlugin({
            filename: 'blog-article.html',
            template: 'src/blog-article.html',
            minify: false
        }),
        new HtmlWebpackPlugin({
            filename: 'service.html',
            template: 'src/service.html',
            minify: false
        }),
        new MiniCssExtractPlugin({
            attributes: {
                id: "target",
                "data-target": "example",
            },
        })
    ]
        // .concat(multipleHtmlPlugins)
    ,
    devServer: {
        port: 8080,
        open: true,
    }
};