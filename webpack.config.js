const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/main.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        fallback: { "stream": false }
    },
    optimization: {
        usedExports: true,
    },
    output: {
        filename: 'add.min.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        libraryTarget: 'umd',
        // the name exported to window
        library: 'Add',
        libraryExport: 'default',
    },
};
