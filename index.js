'use strict'

const readFileSync = require('fs').readFileSync
const marked = require('marked')
const { json, send } = require('micro')

module.exports = async (request, response) => {
  if (request.method === 'POST') {
    const data = await json(request)
    console.log(data)
    send(response, 200, {message: 'received', success: true})
  } else {
    const readme = readFileSync('./README.md', 'utf-8')
    const html = marked(readme)
    send(response, 200, html)
  }
}
