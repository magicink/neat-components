import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'

export default {
  dest: 'bundle.js',
  entry: 'src/index.js',
  format: 'cjs',
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    }),
    commonjs({
      include: [
        'node_modules/**'
      ],
      namedExports: {
        'node_modules/react/react.js': ['Component', 'createElement']
      }
    })
  ]
}
