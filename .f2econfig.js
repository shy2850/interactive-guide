const { argv } = process
const build = argv[argv.length - 1] !== 'dev'
module.exports = {
    build,
    livereload: !build,
    useLess: true,
    useBabel: {
        only: '**.jsx',
        presets: ['es2015', 'react'],
        plugins: [
            'babel-plugin-transform-es2015-modules-amd',
            'babel-plugin-transform-class-properties',
            'babel-plugin-transform-object-rest-spread'],
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
            test: /^(courses|lessons|codes|section)\b/,
            middleware: 'proxy'
        }
    ],
    buildFilter: (pathname, data) => {
        let nameFilter = !pathname || /^(src|index|less)/.test(pathname)
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
