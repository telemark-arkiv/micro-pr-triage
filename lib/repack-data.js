'use strict'

module.exports = data => {
  return {
    action: data.action,
    title: data.pull_request.title,
    user: data.pull_request.user.login,
    assignee: data.pull_request.assignee,
    assignees: data.pull_request.assignees,
    issue: data.pull_request.issue_url,
    pkgUrl: `https://raw.githubusercontent.com/${data.repository.full_name}/master/package.json`
  }
}
