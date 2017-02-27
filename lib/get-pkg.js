'use strict'

const axios = require('axios')

module.exports = data => {
  return new Promise((resolve, reject) => {
    axios.get(data.pkgUrl)
      .then(response => {
        resolve(response.data)
      }).catch(error => {
        reject(error)
      })
  })
}
