# swagger-vue
Swagger to JS &amp; Vue &amp; Axios Codegen
# Installation
```shell
npm install swagger-vue
```
# Generar api.js
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

# Uilizar api.js en vue
### main.js
```javascript
import ubicacionesSetAxios from 'ubicaciones-client/dist/axios'
import {setDomain as ubicacionesSetDomain} from 'ubicaciones-client/dist/apiUbicaciones'

ubicacionesSetAxios(axios)
ubicacionesSetDomain(process.env.VUE_APP_UBICACIONES_URL)
```

### componente
```javascript
import * as apiUbicaciones from 'ubicaciones-client/dist/apiUbicaciones'


apiUbicaciones.getParametros().then(response => {
      dispatch('setModelosRF', response.data)
    })
```
# Links
 - [swagger-js-codegen](https://github.com/wcandillon/swagger-js-codegen)

# License

[MIT](https://opensource.org/licenses/MIT)
