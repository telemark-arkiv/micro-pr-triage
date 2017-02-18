'use strict'

module.exports = data => {
  let result = {
    action: 'none'
  }
  if (data.action === 'opened') {
    result.action = 'opened'
    result.user = data.pull_request.user.login
    result.assignee = data.pull_request.assignee
    result.assignees = data.pull_request.assignees
    result.issue = data.pull_request.issue_url
  }

  return result
}
