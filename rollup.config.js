import babel from 'rollup-plugin-babel'
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
        '@babel/plugin-transform-runtime',
        '@babel/plugin-proposal-export-default-from'
      ],
      runtimeHelpers: true
    }),
    flow({ all: true }),
    resolve(),
    terser()
  ]
}]
