const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

let htmlPageNames = ['404', 'blog-article', 'blog', 'cabinet-full', 'cabinet', 'catalog', 'contacts', 'job', 'offer', 'security', 'service', 'services', 'sort', "blog-blocks"];
let multipleHtmlPlugins = htmlPageNames.map(name => {
  return new HtmlWebpackPlugin({
    template: `./src/${name}.html`, // relative path to the HTML files
    filename: `${name}.html`, // output HTML files
    minify: false,
    // chunks: [`${name}`] // respective JS files
  })
});


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
        new MiniCssExtractPlugin({
            attributes: {
                id: "target",
                "data-target": "example",
            },
        })
    ]
        .concat(multipleHtmlPlugins)
    ,
    devServer: {
        port: 8080,
        open: true,
    }
};