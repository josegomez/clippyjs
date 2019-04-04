const fs = require('fs');
const path = require('path');
const buble = require('rollup-plugin-buble');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const uglify = require('rollup-plugin-uglify');
// const { minify } = require('uglify-js-harmony');
const { dependencies } = require('./package.json');

const name = 'clippy'
const dist = path.resolve(__dirname, 'dist');

// Ensure dist directory exists
if (!fs.existsSync(dist)) {
    fs.mkdirSync(dist);
}

export default  {
    input: path.resolve(__dirname, 'lib/index.js'),
    //external: Object.keys(dependencies),
    //moduleName: name,
    output: {
        file: 'dist/clippy.js',
        format:'umd',
        name:'clippy_html'
    },
    plugins: [
        buble(),
        resolve({ external: ['vue'] }),
        commonjs(),
        // uglify({}, minify)
    ],

    /*targets: [
        {
            format: 'umd',
            moduleName: name,
            dest: path.resolve(dist, name + '.js'),
            sourceMap: true
        },
        {
            format: 'es',
            dest: path.resolve(dist, name + '.esm.js'),
            sourceMap: true
        }
    ]*/
};
