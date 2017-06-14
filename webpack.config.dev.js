var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack/hot/dev-server',
        path.resolve(__dirname, 'src/js/lib/initializers/index')
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/dist/',
        filename: 'app.bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],

    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loaders: ['react-hot-loader/webpack']
        }, {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react', 'stage-2'],
                compact: false,
                plugins: [
                     ['import', [{ libraryName: "antd", style: 'css' }]],
                ]
            }
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader!sass"
        }, {
            test: /\.woff|\.woff2|\.svg|.eot|\.ttf/,
            loader: 'url?prefix=font/&limit=10000'
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }]
    },
    externals: {
        'jquery': 'jQuery',
        'react': 'React',
        'react-dom': 'ReactDOM',
        'redux': 'Redux',
        'redux-thunk': 'ReduxThunk',
        'react-redux': 'ReactRedux',
        'react-router': 'ReactRouter',
        'react-router-redux': 'ReactRouterRedux',
        'babel-polyfill': 'window',
        lodash : {
            commonjs: "lodash",
            amd: "lodash",
            root: "_" // indicates global variable
        },
        'bluebird': 'Promise',
        'whatwg-fetch': 'fetch',
    }
};
