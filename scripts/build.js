const path = require('path')
const fs = require('fs')
var rimraf = require('rimraf')
const dictionary = require(path.join(__dirname, '../clippy.json'))
const buildPath = path.join(__dirname, '../dist')

rimraf.sync(buildPath)
fs.mkdirSync(buildPath)
fs.writeFileSync(path.join(buildPath, 'clippy.json'), JSON.stringify(dictionary))
