module.exports = {
    entry: './js/entry.jsx',
    output: {
        filename: './target/app.js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                include: /styles/,
                use: [  
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            },
            {
                test: /\.jsx?$/,
                include: /js/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'babel-preset-stage-2'],
                    plugins: [
                        'transform-runtime'
                    ]
                }
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },
    resolve: {
        alias: {
            'components': './components'
        }
    }
};
