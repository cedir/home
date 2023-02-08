const { merge } = require('webpack-merge');
const ESLintPlugin = require('eslint-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('@nuxt/friendly-errors-webpack-plugin');
const common = require('./webpack.common');

const PUERTO = 3000;

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        port: PUERTO,
        historyApiFallback: true,
        host: '0.0.0.0',
    },
    plugins: [
        new ESLintPlugin({
            extensions: ['js', 'ts', 'jsx', 'tsx'],
            emitWarning: false,
        }),
        new FriendlyErrorsWebpackPlugin(),
    ],
    stats: 'minimal',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
});
