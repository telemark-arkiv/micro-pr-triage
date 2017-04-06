'use strict'

const Wreck = require('wreck')
const buildPayload = require('./build-payload')

module.exports = data => {
  return new Promise((resolve, reject) => {
    if (data.action === 'opened' && data.user === 'greenkeeper[bot]' && data.assignees.length === 0) {
      const payload = buildPayload(data)
      const options = {
        headers: payload.headers,
        json: true,
        payload: JSON.stringify(payload.data)
      }

      Wreck.post(`${payload.url}/assignees`, options, (error, response, payload) => {
        if (error) {
          reject(error)
        } else {
          const result = {
            action: 'assigned',
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
