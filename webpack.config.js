const resolve = {
    extensions: [
        '.ts',
        '.tsx',
        '.js',
    ]
};

const module_settings = {
    rules: [{
        test: /\.tsx?$/,
        use: 'ts-loader'
    }, {
        test: /\.tsx?$/,
        enforce: 'pre',
        loader: 'tslint-loader',
        options: {
            configFile: './tslint.json',
            typeCheck: true,
        },
    }],
};

console.log(__dirname);
module.exports = [{
    target: 'electron-main',
    entry: './src/main/index.js',
    output: {
        filename: 'main.js'
    },
    mode: "development",
    resolve: resolve,
    module: module_settings,
    externals: {
        '../../zerochain': "require('./zerochain')"
    },
    }, {
    target: 'electron-renderer',
    entry: './src/renderer/index.tsx',
    output: {
        filename: 'app/index.js'
    },
    mode: "development",
    resolve: resolve,
    module: module_settings,
    externals: {
        '../../zerochain': "require('./../zerochain')"
    }
}]
