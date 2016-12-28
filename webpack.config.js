module.exports = {
    entry: __dirname + '/src',
    output: {
        path: '/'
    },
    devtool: 'source-maps',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react', 'stage-0'],
                    plugins: ['transform-class-properties', 'transform-decorators-legacy']
                }
            }
        ]
    }
}
