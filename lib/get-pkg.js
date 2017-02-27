'use strict'

const axios = require('axios')

module.exports = data => {
  return new Promise((resolve, reject) => {
    axios.get(`https://raw.githubusercontent.com/${data.repository.full_name}/master/package.json`)
      .then(response => {
        resolve(response.data)
      }).catch(error => {
        reject(error)
      })
  })
}
