'use strict'
const BASE_URI = require('./prod.uri').BASE_URI;
module.exports = {
  NODE_ENV: '"production"',
  BASE_URL: `"${BASE_URI}"`
}
