// Generated using webpack-cli http://github.com/webpack-cli
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {

    const { PORT } = env;

    return {
        mode: 'development',
        entry: path.resolve(__dirname, 'src'),
        output: {
            path: path.resolve(__dirname, 'build'),
        },
        devServer: {
            contentBase: path.resolve(__dirname, 'src'),
            open: true,
            host: 'localhost',
            port: PORT || 3005
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'dist/index.html')
            })
            
            // Add your plugins here
            // Learn more obout plugins from https://webpack.js.org/configuration/plugins/
        ],
        module: {
            rules: [
                {
                    test: /\.html$/i,
                    loader: 'html-loader',
                },
                {
                    test: /\\.(ts|tsx)$/,
                    loader: 'ts-loader',
                    exclude: ['/node_modules/'],
                },
                {
                    test: /\.css$/i,
                    use: ['style-loader','css-loader'],
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: ['style-loader', 'css-loader', 'sass-loader'],
                },
                {
                    test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/,
                    type: 'asset',
                },
    
                // Add your rules for custom modules here
                // Learn more about loaders from https://webpack.js.org/loaders/
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js', '.html'],
        },
    }
};
