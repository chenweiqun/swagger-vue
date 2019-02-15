# swagger-vue
Swagger to JS &amp; Vue &amp; Axios Codegen
# Installation
```shell
npm install swagger-vue
```
# Example
```javascript
const swaggerGen = require('swagger-vue')
const jsonData = require('./swagger')
const fs = require('fs')
const path = require('path')
const axiosFile = fs.readFileSync(path.join(__dirname, '../node_modules/swagger-vue/lib/axios.js'), 'utf-8')

let opt = {
  swagger: jsonData,
  moduleName: 'apiUbicaciones',
  className: 'apiUbicaciones'
}
const codeResult = swaggerGen(opt)
fs.writeFileSync(path.join(__dirname, '../dist/apiUbicaciones.js'), codeResult)
fs.writeFileSync(path.join(__dirname, '../dist/axios.js'), axiosFile)
```

# Links
 - [swagger-js-codegen](https://github.com/wcandillon/swagger-js-codegen)

# License

[MIT](https://opensource.org/licenses/MIT)
