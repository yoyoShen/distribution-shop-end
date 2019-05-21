const url = require('./dev.uri').BASE_URI;

module.exports = {
  [url]: {
    target: 'http://192.168.1.161:8003/',
    changeOrigin: true,
      pathRewrite: {
  ['^' + url]: ''
}
}
}
