import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';
import json from 'rollup-plugin-json';
import { terser } from 'rollup-plugin-terser';

import pkg from './package.json';

export default [
	{
		input: 'src/MainUMD.js',
		output: {
			name: 'mhlib',
			file: pkg.browser.replace(/\.js$/, '.min.js'),
			format: 'umd'
		},
		plugins: [
			resolve({
				mainFields: ["browser", "module", "main"],
				preferBuiltins: true
			}),
			commonjs(),
			globals(),
			builtins({
				crypto: false
			}),
			json(),
			babel({
				exclude: ['node_modules/**'],
				babelrc: false,
				presets: [
					[
						'@babel/env',
						{
							modules: false,
							useBuiltIns: "usage",
							corejs: 2,
							targets: 'maintained node versions'
						}
					]
				]
			})
		]
	},
	{
		input: 'src/MainCJS.js',
		external: ['elliptic', 'hash.js'],
		output: [
			{ file: pkg.main, format: 'cjs' },
			{ file: pkg.module, format: 'es' }
		],
		plugins: [
			babel({
				exclude: ['node_modules/**'],
				babelrc: false,
				presets: [
					[
						'@babel/env',
						{
							modules: false,
							useBuiltIns: "usage",
							corejs: 2,
							targets: 'maintained node versions'
						}
					]
				]
			})
		]
	}
];