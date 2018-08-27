const Handlebars = require('handlebars')
const fs = require('fs')
const path = require('path')
const apiTemplate = fs.readFileSync(path.join(__dirname, 'template/api.hbs'), 'utf-8')
const method = fs.readFileSync(path.join(__dirname, 'template/method.hbs'), 'utf-8')
const jsonData = require('../api-docs.json')
const parse = require('../../lib/parse.js')
Handlebars.registerPartial('method', method)
let opt = {
  swagger: jsonData,
  moduleName: 'api',
  className: 'api'
}
let data = parse(opt)
let yamlResult = Handlebars.compile(apiTemplate)(data)
fs.writeFileSync(path.join(__dirname, '../dist/api.yaml'), yamlResult)
