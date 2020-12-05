import vuePlugin from 'rollup-plugin-vue'

export default {
  input: 'src/index.js',
  output: [
    {
      dir: 'es',
      preserveModules: true,
      format: 'esm'
    }
  ],
  plugins: [
    vuePlugin()
  ]
}