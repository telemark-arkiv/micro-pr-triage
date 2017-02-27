'use strict'

const Wreck = require('wreck')
const buildPayload = require('./build_payload')
const getPkg = require('./get-pkg')

module.exports = data => {
  return new Promise(async (resolve, reject) => {
    if (data.action === 'opened' && data.user === 'greenkeeper[bot]' && data.assignees.length === 0) {
      const payload = buildPayload(data)
      let labels = payload.data.labels
      const pkg = await getPkg(data)
      if (!pkg.private) {
        labels.push('npm')
      }
      const options = {
        headers: payload.headers,
        json: true,
        payload: JSON.stringify(labels)
      }

      Wreck.post(`${payload.url}/labels`, options, (error, response, payload) => {
        if (error) {
          reject(error)
        } else {
          const result = {
            action: 'labeled',
            success: true,
            response: payload
          }
          resolve(result)
        }
      })
    } else {
      const result = {
        action: 'nothing'
      }
      resolve(result)
    }
  })
}
