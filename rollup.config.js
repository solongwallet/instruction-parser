import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
import json from '@rollup/plugin-json'
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';

import pkg from './package.json';

const fileName = 'index';
const extensions = ['.ts'];
const noDeclarationFiles = { compilerOptions: { declaration: false } };

const babelRuntimeVersion = pkg.devDependencies['@babel/runtime'].replace(
    /^[^0-9]*/,
    ''
);

const makeExternalPredicate = externalArr => {
    if (externalArr.length === 0) {
        return () => false;
    }
    const pattern = new RegExp(`^(${externalArr.join('|')})($|/)`);
    return id => pattern.test(id);
};

export default [
    // CommonJS
    // {
    //     input: 'src/index.ts',
    //     output: { file: `lib/${fileName}.js`, format: 'cjs', indent: false },
    //     external: makeExternalPredicate([
    //         ...Object.keys(pkg.dependencies || {}),
    //         ...Object.keys(pkg.peerDependencies || {})
    //     ]),
    //     plugins: [
    //         nodeResolve({
    //             extensions
    //         }),
    //         commonjs(),
    //         json(),
    //         typescript({ useTsconfigDeclarationDir: true }),
    //         babel({
    //             extensions,
    //             plugins: [
    //                 [
    //                     '@babel/plugin-transform-runtime',
    //                     { version: babelRuntimeVersion }
    //                 ]
    //             ],
    //             babelHelpers: 'runtime'
    //         })
    //     ]
    // },

    // ES
    {
        input: 'src/index.ts',
        output: { file: `es/${fileName}.js`, format: 'es', indent: false, 
            // globals: {
            //     "buffer": "buffer" // 指明 global.buffer 即是外部依赖 buffer
            // }
        },
        external: makeExternalPredicate([
            ...Object.keys(pkg.dependencies || {}),
            ...Object.keys(pkg.peerDependencies || {})
        ]),
        
        plugins: [
            nodeResolve({
                extensions
            }),
            json(),
            commonjs(),
            typescript({ useTsconfigDeclarationDir: true }),
            babel({
                extensions,
                plugins: [
                    [
                        '@babel/plugin-transform-runtime',
                        { version: babelRuntimeVersion, useESModules: true }
                    ]
                ],
                babelHelpers: 'runtime'
            })
        ]
    },

    // ES for Browsers
    // {
    //     input: 'src/index.ts',
    //     output: { file: `es/${fileName}.mjs`, format: 'es', indent: false },
    //     plugins: [
    //         nodeResolve({
    //             extensions
    //         }),
    //         replace({
    //             'process.env.NODE_ENV': JSON.stringify('production')
    //             'preventAssignment': true
    //         }),
    //         commonjs(),
    //         json(),
    //         typescript({ tsconfigOverride: noDeclarationFiles }),
    //         babel({
    //             extensions,
    //             exclude: 'node_modules/**'
    //         }),
    //         terser({
    //             compress: {
    //                 pure_getters: true,
    //                 unsafe: true,
    //                 unsafe_comps: true,
    //                 warnings: false
    //             }
    //         })
    //     ]
    // },

    // UMD Development
    {
        input: 'src/index.ts',
        output: {
            file: `dist/${fileName}.js`,
            format: 'umd',
            name: 'AssertEngine',
            indent: false
        },
        plugins: [
            nodeResolve({
                extensions
            }),
            commonjs(),
            json(),
            typescript({ tsconfigOverride: noDeclarationFiles }),
            babel({
                extensions,
                exclude: 'node_modules/**'
            }),
            replace({
                'process.env.NODE_ENV': JSON.stringify('development'),
                'preventAssignment': true
            })
        ]
    },

    // UMD Production
    {
        input: 'src/index.ts',
        output: {
            file: `dist/${fileName}.min.js`,
            format: 'umd',
            name: 'AssertEngine',
            indent: false
        },
        plugins: [
            nodeResolve({
                extensions,
                // preferBuiltins: true, 
                // mainFields: ['browser']
            }),
            commonjs(),
            json(),
            typescript({ tsconfigOverride: noDeclarationFiles }),
            babel({
                extensions,
                exclude: 'node_modules/**'
            }),
            replace({
                'process.env.NODE_ENV': JSON.stringify('production'),
                'preventAssignment': true
            }),
            terser({
                compress: {
                    pure_getters: true,
                    unsafe: true,
                    unsafe_comps: true,
                    warnings: false
                }
            })
        ]
    }
];
