const dotenv = require('../lib/dotenv')
const request = require('../lib/request.js')

const user = process.env.user
const apiKey = process.env.apiKey
const url = process.env.url

request({url, user, apiKey, method: 'GET', qs: {}, })
  .then(console.log)
  .catch(console.error)

