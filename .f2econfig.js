module.exports = {
    livereload: true,
    useLess: true,
    useBabel: {
        only: '**.jsx',
        presets: ['es2015', 'react'],
        plugins: ['babel-plugin-transform-es2015-modules-amd'],
        moduleIds: true,
        getModuleId: pathname => pathname.replace(/^[\\/]?src\//, '')
    },
    include: /\$require\(["'\s]*([^"'\s]+)["'\s]*\)/g,
    gzip: true,
    middlewares: [
        {
            test: /(\.html|require\.js)$/,
            middleware: 'template'
        },
        {
            url: 'http://47.93.218.133',
            test: /^(?!src|index})/,
            middleware: 'proxy'
        }
    ],
    buildFilter: (pathname, data) => {
        let nameFilter = !pathname || /^(src|index)/.test(pathname)
        return nameFilter
    },
    bundles: [
        {
            test: /^src\/(?!(require|index|codemirror)).*$/,
            dist: 'src/index.js'
        }
    ],
    output: require('path').join(__dirname, './dist')
}
