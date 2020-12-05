import { nodeResolve } from '@rollup/plugin-node-resolve'

export default {
  input: 'app.js',
  output: {
    dir: 'app-output',
    format: 'esm'
  },
  plugins: [
    nodeResolve()
  ],
  external: [
    'vue'
  ]
}