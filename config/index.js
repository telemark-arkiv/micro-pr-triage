'use strict'

const assignees = process.env.ASSIGNEES ? process.env.ASSIGNEES.split(',') : false

module.exports = {
  GITHUB_WEBHOOK_SECRET: process.env.GITHUB_WEBHOOK_SECRET || 'Louie Louie, oh no, I got to go Louie Louie, oh no, I got to go',
  GITHUB_TOKEN: process.env.GITHUB_TOKEN || 'GITHUB_TOKEN',
  GITHUB_USER: process.env.GITHUB_USER || 'GITHUB_USER',
  ASSIGNEES: assignees || ['zrrrzzt']
}
