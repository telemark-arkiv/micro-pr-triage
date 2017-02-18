'use strict'

const readFileSync = require('fs').readFileSync
const marked = require('marked')
const { json, send } = require('micro')

module.exports = async (request, response) => {
  if (request.method === 'POST') {
    const data = await json(request)
    send(response, 200, data)
  } else {
    const readme = readFileSync('./README.md', 'utf-8')
    const html = marked(readme)
    send(response, 200, html)
  }
}
