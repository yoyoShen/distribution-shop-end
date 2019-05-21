'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
const BASE_URI = require('./dev.uri').BASE_URI;

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_URL: `"${BASE_URI}"`
})
