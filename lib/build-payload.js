'use strict'

const config = require('../config')
const calculateCategory = require('./calculate-category')

module.exports = data => {
  const auth = 'Basic ' + Buffer.from(config.GITHUB_USER + ':' + config.GITHUB_TOKEN).toString('base64')
  const category = calculateCategory(data)
  const issue = {
    assignees: [
      config.ASSIGNEES
    ],
    labels: [
      category
    ]
  }
  return {
    headers: {
      'authorization': auth,
      'userAgent': config.GITHUB_USER,
      'accept': 'application/vnd.github.v3+json'
    },
    data: issue,
    url: data.issue
  }
}
