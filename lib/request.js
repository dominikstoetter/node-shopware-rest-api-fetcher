const request = require('request-promise')

module.exports = function (args) {
  return request.defaults({
    json: true,
    headers: {
      'User-Agent': 'Shopware API Client',
      'Content-Type': 'application/json; charset=utf-8'
    },
    auth: {
      user: args.user,
      pass: args.apiKey,
      sendImmediately: false
    }
  })(args).promise();
}
