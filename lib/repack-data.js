'use strict'

module.exports = data => {
  return {
    action: data.action,
    user: data.pull_request.user.login,
    assignee: data.pull_request.assignee,
    assignees: data.pull_request.assignees,
    issue: data.pull_request.issue_url
  }
}
