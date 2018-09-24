module.exports = {
    mode: 'development',
    entry: './hello.ts',
    devtool: 'inline-source-map',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [{
            test: /\.ts?$/,
            loader: 'ts-loader'
        }, {
            test: /\.txt$/,
            loader: 'raw-loader'
        }]
    }
}
