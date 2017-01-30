import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import minify from 'rollup-plugin-minify'

export default [{
    entry: 'src/entry-1.js',
    dest: 'dist/app-from-entry-1.js',
    format: 'umd',
    moduleName: 'entry-1',
    sourceMap: 'inline',
    plugins: [
        resolve({
            jsnext: true,
            main: true,
            browser: true,
        }),
        commonjs(),
        babel(),
        minify({ umd: 'dist/entry-1.min.js' })
    ]
},
{
    entry: 'src/entry-2.js',
    dest: 'dist/app-from-entry-2-like-vendor.js',
    format: 'umd',
    moduleName: 'entry-2',
    sourceMap: 'inline',
    plugins: [
        resolve({
            jsnext: true,
            main: true,
            browser: true,
        }),
        commonjs(),
        babel(),
        minify({ umd: 'dist/entry-2.min.js' })
    ]
}];