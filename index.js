'use strict'

const readFileSync = require('fs').readFileSync
const marked = require('marked')
const { json, send } = require('micro')
const repackData = require('./lib/repack-data')
const addLabels = require('./lib/add-labels')
const addAssignes = require('./lib/add-assignes')

module.exports = async (request, response) => {
  if (request.method === 'POST') {
    const data = repackData(await json(request))
    const assignees = await addAssignes(data)
    const labels = await addLabels(data)
    const result = {
      action: assignees.action !== 'nothing' && labels.action !== 'nothing',
      labels: labels,
      assignees: assignees,
      data: data
    }
    send(response, 200, result)
  } else {
    const readme = readFileSync('./README.md', 'utf-8')
    const html = marked(readme)
    send(response, 200, html)
  }
}
