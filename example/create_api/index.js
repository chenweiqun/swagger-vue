let args = require('optimist').argv
const util = require('util')
let version = '2'

if (args.v || args.version) {
  version = args.v || args.version
}

console.info('Test', util.inspect(args))

if (!version) {
  console.error('Wrong version provided')
} else {
  console.log('Generate api for swagger ', '../swagger' + version + '.json')
  const jsonData = require('../swagger' + version + '.json')
  const swaggerGen = require('../../index.js')
  const fs = require('fs')
  const path = require('path')
  let opt = {
    swagger: jsonData,
    moduleName: 'api',
    className: 'api'
  }
  const codeResult = swaggerGen(opt)
  fs.writeFileSync(path.join(__dirname, '../dist/api.js'), codeResult)
}
