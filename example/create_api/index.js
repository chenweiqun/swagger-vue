const jsonData = require('../api-docs.json')
const swaggerGen = require('../../index.js')
const fs = require('fs')
const path = require('path')
const axiosFile = fs.readFileSync(path.join(__dirname, '../../lib/axios.js'), 'utf-8')
let opt = {
  swagger: jsonData,
  moduleName: 'api',
  className: 'api'
}
const codeResult = swaggerGen(opt)
fs.writeFileSync(path.join(__dirname, '../dist/api.js'), codeResult)
fs.writeFileSync(path.join(__dirname, '../dist/axios.js'), axiosFile)
