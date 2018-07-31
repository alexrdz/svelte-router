module.exports = {
  presets: [
    [ '@babel/preset-env', {
      modules: false,
      targets: {
        browsers: [
          '> 1%',
          'last 2 versions',
          'not ie <= 8'
        ]
      }
    }]
  ],
  plugins: [
    '@babel/plugin-transform-spread',
    '@babel/plugin-proposal-class-properties'
  ]
}
