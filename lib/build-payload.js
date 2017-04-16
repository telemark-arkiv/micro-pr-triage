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
      'Authorization': auth,
      'User-Agent': config.GITHUB_USER,
      'Accept': 'application/vnd.github.v3+json',
      'Content-Type': 'application/json'
    },
    data: issue,
    url: data.issue
  }
}
