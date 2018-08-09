/* eslint-disable */
import axios from 'axios'
import qs from 'qs'
let domain = 'http://petstore.swagger.io/api'
let axiosInstance = axios.create()
export const getDomain = () => {
  return domain
}
export const setDomain = ($domain) => {
  domain = $domain
}
export const getAxiosInstance = () => {
  return axiosInstance
}
export const setAxiosInstance = ($axiosInstance) => {
  axiosInstance = $axiosInstance
}
export const request = (method, url, body, queryParameters, form, config) => {
  method = method.toLowerCase()
  let keys = Object.keys(queryParameters)
  let queryUrl = url
  if (keys.length > 0) {
    queryUrl = url + '?' + qs.stringify(queryParameters)
  }
  // let queryUrl = url+(keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
  if (body) {
    return axiosInstance[method](queryUrl, body, config)
  } else if (method === 'get' || method === 'delete' || method === 'head' || method === 'option') {
    return axiosInstance[method](queryUrl, config)
  } else {
    return axiosInstance[method](queryUrl, qs.stringify(form), config)
  }
}
/*==========================================================
 *                    A sample API that uses a petstore as an example to demonstrate features in the swagger-2.0 specification
 ==========================================================*/
/**
 * Pets get summary
 * request: findPets
 * url: findPetsURL
 * method: findPets_TYPE
 * raw_url: findPets_RAW_URL
 * @param tags - tags to filter by
 * @param limit - maximum number of results to return
 */
export const findPets = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/pets'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['tags'] !== undefined) {
    queryParameters['tags'] = parameters['tags']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  } else if (parameters['limit'] === undefined) {
    queryParameters['limit'] = 20
  }
  if (parameters['limit'] !== undefined && parameters['limit'] < 1) {
    return Promise.reject(new Error('Parameter "limit" value must be higher then: 1'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const findPets_PARAMETERS = {
  tags: {
    name: "tags",
    in: "query",
    description: "tags to filter by",
    type: "array",
    collectionFormat: "csv",
    items: {
      "type": "string"
    },
    camelCaseName: "tags",
    isQueryParameter: true,
    cardinality: "?"
  },
  limit: {
    name: "limit",
    in: "query",
    description: "maximum number of results to return",
    default: 20,
    minimum: 1,
    type: "integer",
    format: "int32",
    camelCaseName: "limit",
    isQueryParameter: true,
    cardinality: "?"
  }
}
export const findPets_META = {
  description: "Pets get description",
  summary: "Pets get summary",
  operationId: "findPets",
  tags: ["pet-store", "find-pet"]
}
export const findPets_RAW_URL = function() {
  return '/pets'
}
export const findPets_TYPE = function() {
  return 'get'
}
export const findPetsURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/pets'
  if (parameters['tags'] !== undefined) {
    queryParameters['tags'] = parameters['tags']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 
 * request: addPet
 * url: addPetURL
 * method: addPet_TYPE
 * raw_url: addPet_RAW_URL
 * @param pet - Pet to add to the store
 */
export const addPet = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/pets'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pet'] !== undefined) {
    body = parameters['pet']
  }
  if (parameters['pet'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: pet'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const addPet_PARAMETERS = {
  pet: {
    name: "pet",
    in: "body",
    description: "Pet to add to the store",
    required: true,
    schema: {
      "$ref": "#/definitions/NewPet"
    },
    camelCaseName: "pet",
    isBodyParameter: true,
  }
}
export const addPet_META = {
  description: "Creates a new pet in the store.  Duplicates are allowed",
  summary: "",
  operationId: "addPet",
  tags: []
}
export const addPet_RAW_URL = function() {
  return '/pets'
}
export const addPet_TYPE = function() {
  return 'post'
}
export const addPetURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/pets'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 
 * request: find_pet_by_id
 * url: find_pet_by_idURL
 * method: find_pet_by_id_TYPE
 * raw_url: find_pet_by_id_RAW_URL
 * @param id - ID of pet to fetch
 */
export const find_pet_by_id = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/pets/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const find_pet_by_id_PARAMETERS = {
  id: {
    name: "id",
    in: "path",
    description: "ID of pet to fetch",
    required: true,
    type: "integer",
    format: "int64",
    camelCaseName: "id",
    isPathParameter: true,
  }
}
export const find_pet_by_id_META = {
  description: "Returns a user based on a single ID, if the user does not have access to the pet",
  summary: "",
  operationId: "find_pet_by_id",
  tags: []
}
export const find_pet_by_id_RAW_URL = function() {
  return '/pets/{id}'
}
export const find_pet_by_id_TYPE = function() {
  return 'get'
}
export const find_pet_by_idURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/pets/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 
 * request: deletePet
 * url: deletePetURL
 * method: deletePet_TYPE
 * raw_url: deletePet_RAW_URL
 * @param id - ID of pet to delete
 */
export const deletePet = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/pets/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deletePet_PARAMETERS = {
  id: {
    name: "id",
    in: "path",
    description: "ID of pet to delete",
    required: true,
    type: "integer",
    format: "int64",
    camelCaseName: "id",
    isPathParameter: true,
  }
}
export const deletePet_META = {
  description: "deletes a single pet based on the ID supplied",
  summary: "",
  operationId: "deletePet",
  tags: []
}
export const deletePet_RAW_URL = function() {
  return '/pets/{id}'
}
export const deletePet_TYPE = function() {
  return 'delete'
}
export const deletePetURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/pets/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}