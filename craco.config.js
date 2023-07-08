module.exports = {
  webpack: {
    plugins: {
      add: [
        require('million/compiler').webpack({
          mode: 'react',
          optimize: true
        })
      ]
    }
  }
}
