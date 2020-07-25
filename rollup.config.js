import babel from '@rollup/plugin-babel'
import flow from 'rollup-plugin-flow'
import path from 'path'
import resolve from 'rollup-plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'

export default [{
  external: ['react', 'styled-components'],
  input: `${path.resolve(__dirname, 'src', 'index.js')}`,
  output: {
    exports: 'named',
    file: `${path.resolve(__dirname, 'bundle.js')}`,
    format: 'cjs'
  },
  plugins: [
    babel({
      babelrc: false,
      exclude: 'node_modules/**',
      presets: [
        '@babel/preset-flow',
        '@babel/preset-react'
      ],
      plugins: [
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-proposal-export-default-from',
        '@babel/plugin-proposal-object-rest-spread',
        '@babel/plugin-transform-arrow-functions',
        '@babel/plugin-transform-spread',
        '@babel/plugin-transform-destructuring',
        '@babel/plugin-transform-parameters',
        '@babel/plugin-transform-block-scoping',
        '@babel/plugin-transform-computed-properties',
        '@babel/plugin-transform-template-literals',
        '@babel/plugin-proposal-nullish-coalescing-operator',
        '@babel/plugin-proposal-optional-chaining'
      ],
      babelHelpers: 'bundled'
    }),
    flow({ all: true }),
    resolve(),
    terser()
  ]
}]
