'use strict'

const assignees = process.env.ASSIGNEES ? process.env.ASSIGNEES.split(',') : false

module.exports = {
  GITHUB_TOKEN: process.env.GITHUB_TOKEN || 'GITHUB_TOKEN',
  GITHUB_USER: process.env.GITHUB_USER || 'GITHUB_USER',
  ASSIGNEES: assignees || ['zrrrzzt']
}
