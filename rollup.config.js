import babel from 'rollup-plugin-babel'
import flow from 'rollup-plugin-flow'
import path from 'path'
import resolve from 'rollup-plugin-node-resolve'
import uglify from 'rollup-plugin-uglify'

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
      exclude: 'node_modules/**'
    }),
    flow({all: true}),
    resolve(),
    uglify({
      ie8: false,
      mangle: false
    })
  ]
}]
