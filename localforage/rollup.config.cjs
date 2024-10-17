const { defineConfig } = require('rollup');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const terser = require('@rollup/plugin-terser');
const path = require('path');

const pkg = require('./package.json');

// 用于生成 Banner
const BANNER = `/*!
    localForage -- Offline Storage, Improved
    Version ${pkg.version}
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/`;

module.exports = defineConfig([
    // Main bundle with promises
    {
        input: 'src/localforage.js',
        output: {
            file: 'dist/localforage.js',
            format: 'umd',
            name: 'localforage',
            sourcemap: true,
            sourcemapPathTransform: (relativeSourcePath, sourcemapPath) => {
                // 将相对路径转换为绝对路径
                return path.resolve(path.dirname(sourcemapPath), relativeSourcePath);
            },
            banner: BANNER,
        },
        plugins: [
            nodeResolve(),
            commonjs(),
        ],
    },
    // No-promises bundle
    {
        input: 'src/localforage.js',
        output: {
            file: 'dist/localforage.nopromises.js',
            format: 'umd',
            name: 'localforage',
            sourcemap: true,
            banner: BANNER,
        },
        plugins: [
            nodeResolve(),
            commonjs(),
        ],
    },
    // Minified bundles
    {
        input: 'dist/localforage.js',
        output: {
            file: 'dist/localforage.min.js',
            format: 'umd',
            name: 'localforage',
            sourcemap: true,
            banner: BANNER,
        },
        plugins: [terser()],
    },
    {
        input: 'dist/localforage.nopromises.js',
        output: {
            file: 'dist/localforage.nopromises.min.js',
            format: 'umd',
            name: 'localforage',
            sourcemap: true,
            banner: BANNER,
        },
        plugins: [terser()],
    },
]);
