const plugins = []
if (process.env.NODE_ENV === 'production') {
  plugins.push(['transform-remove-console', { exclude: ['error', 'warn'] }])
}
plugins.push(['component',
  {
    libraryName: '@yuewen/qqreader-view',
    style: true
  }
])
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins
}
