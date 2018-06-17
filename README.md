# swagger-vue
Swagger to JS &amp; Vue &amp; Axios Codegen
# Installation
```shell
npm install swagger-vue --dev
```
# Generate
## Using NodeJS file
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
## Using Grunt task

Create **Gruntfile.js**
```javascript
const fs = require('fs')
const path = require('path')
const swaggerGen = require('swagger-vue')

module.exports = function(grunt) {

  grunt.initConfig({
    'pkg': grunt.file.readJSON('package.json'),
    'swagger-vue-codegen': {
      options: {
        swagger: "<%= pkg.swagger.definition %>",
        className: "<%= pkg.swagger.className %>",
        moduleName: "vue-<%= pkg.swagger.moduleName %>",
        dest: 'client/javascript'
      },
      dist: {

      }
    }
  });

  grunt.registerMultiTask('swagger-vue-codegen', function() {
    var callback = this.async();
    var opt = this.options();
    var distFileName = path.join(opt.dest, opt.moduleName + '.js');

    fs.readFile(opt.swagger, function(err, data) {
      if (err) {
        grunt.log.error(err.toString());
        callback(false);
      } else {
        var parsedData = JSON.parse(data);

        var codeResult = swaggerGen({
          swagger: parsedData,
          moduleName: opt.moduleName,
          className: opt.className
        });

        fs.writeFile(distFileName, codeResult, function(err) {
          if (err) {
            grunt.log.error(err.toString());
            callback(false);
          } else {
            grunt.log.writeln('Generated ' + distFileName + ' from ' + opt.swagger);
          }
        })
      }
    });
  });

  grunt.registerTask('vue', ['swagger-vue-codegen']);

};

```
And set options in package.json
```json
...
  "swagger": {
    "definition": "client/swagger.json",
    "className": "API",
    "moduleName": "api-client"
  }
...
```
Now you can use `grunt vue` to run build task

# Generated client usage

In Vue.js main file set API domain
```javascript
import { setDomain } from './lib/api-client.js'
setDomain('http://localhost:3000/api')
```

Import API function into Vue.js component, for example to log in
```javascript
import { user_login as userLogin } from '../lib/api-client.js'

userLogin({
  credentials: {
    username: 'admin',
    password: 'admin'
  }
}).then(function (response) {
  console.log(response.data) // {id: "<token>", ttl: 1209600, created: "2017-01-01T00:00:00.000Z", userId: 1}
})
```
All requests use **axios** module with promise, for more information about that follow axios documentation 

# Links
 - [swagger-js-codegen](https://github.com/wcandillon/swagger-js-codegen)
 - [axios](https://www.npmjs.com/package/axios)

# License

[MIT](https://opensource.org/licenses/MIT)
