# swagger-vue
Swagger to JS &amp; Vue &amp; Axios Codegen
# Installation
```shell
npm install swagger-vue
```
# Example
```javascript
const swaggerGen = require('swagger-vue')
const jsonData = require('../api-docs.json')
const fs = require('fs')
const path = require('path')

let opt = {
  swagger: jsonData,
  moduleName: 'api',
  className: 'api'
}
const codeResult = swaggerGen(opt)
fs.writeFileSync(path.join(__dirname, '../dist/api.js'), codeResult)
```

# Links
 - [swagger-js-codegen](https://github.com/wcandillon/swagger-js-codegen)

# License

[MIT](https://opensource.org/licenses/MIT)
