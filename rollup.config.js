import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'

const Global = `var process = {
    env: {
        NODE_ENV: 'production'
    }
};`;

export default {
    input:'src/chart.js',
    output: [
        {
            file: 'dist/chart.min.js',
            name:'Chart',
            format: 'umd',
            sourcemap: false,
            banner: Global
        }
    ],
    plugins: [
        resolve(),
        commonjs(),
        babel({
            babelHelpers: 'bundled',
            exclude: 'node_modules/**',
            presets: ["@babel/preset-env"]
        })
    ]
};