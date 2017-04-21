'use strict'

module.exports = data => {
  const dependencies = data.pkg.dependencies || {}
  const devDependencies = data.pkg.devDependencies || {}
  const packageName = data.title.split(' ')[1]
  let category = 'kategori 3'

  if (Object.keys(devDependencies).includes(packageName)) {
    category = 'kategori 3'
  }

  if (Object.keys(dependencies).includes(packageName)) {
    category = 'kategori 2'
  }

  return category
}
