// const fs = require('fs')
const jsonData = require('../api-docs.json')
const parse = require('../../lib/parse.js')
const codegen = require('../../lib/codegen.js')
const fs = require('fs')
const path = require('path')
let opt = {
  swagger: jsonData,
  moduleName: 'api',
  className: 'api'
}
let data = parse(opt)
let codeResult = codegen(data)
fs.writeFileSync(path.join(__dirname, '../dist/api.js'), codeResult)
