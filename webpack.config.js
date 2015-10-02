module.exports = {
    devtool: 'sourcemap',
    output:  {
        filename: 'bundle.js'
    },
    module:  {
        loaders: [
            {
                test:    /\.js$/,
                exclude: [/app\/lib/, /node_modules/],
                loader:  'babel',
                query:   {
                    optional: ['runtime', 'es6.spec.templateLiterals'],
                    stage:    0
                }
            },
            {test: /\.html$/, loader: 'raw'},
            {test: /\.styl$/, loader: 'style!css!stylus'},
            {test: /\.css$/, loader: 'style!css'}
        ]
    }
};
