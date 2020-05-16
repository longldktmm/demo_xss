let webpack = require('webpack');
module.exports = {
    entry: [
        'webpack/hot/only-dev-server',
        "./js/app.js"
    ],
    output: {
        path: __dirname + '/js',
        filename: "8004.js"
    },
    module: {
        loaders: [
            { test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel'},
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]

};