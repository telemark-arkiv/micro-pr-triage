'use strict'

const readFileSync = require('fs').readFileSync
const marked = require('marked')
const { json, send } = require('micro')
const repackData = require('./lib/repack-data')
const addLabels = require('./lib/add-labels')
const addAssignes = require('./lib/add-assignes')
const getPkg = require('./lib/get-pkg')
const validatePayload = require('./lib/validate-payload')

module.exports = async (request, response) => {
  if (request.method === 'POST') {
    const headers = request.headers
    const payload = await json(request)
    const isValid = validatePayload({headers: headers, body: payload})

    if (isValid === true) {
      try {
        let data = repackData(payload)
        const pkg = await getPkg(data)
        data.pkg = pkg
        const assignees = await addAssignes(data)
        const labels = await addLabels(data)
        const result = {
          action: assignees.action !== 'nothing' && labels.action !== 'nothing',
          labels: labels,
          assignees: assignees,
          data: data
        }
        send(response, 200, result)
      } catch (error) {
        console.error(error)
        send(response, 500, {success: false, error: error.message})
      }
    } else {
      send(response, 401, 'invalid signature')
    }
  } else {
    const readme = readFileSync('./README.md', 'utf-8')
    const html = marked(readme)
    send(response, 200, html)
  }
}
