/* eslint-disable */
import axios from 'axios'
import qs from 'qs'
let domain = ''
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
 *                    This is a flow-analyzer api description
 ==========================================================*/
/**
 * Get the list of all available reports and their filters.
 * request: reports
 * url: reportsURL
 * method: reports_TYPE
 * raw_url: reports_RAW_URL
 * @param token - A security token used to authenticate a user request.
 */
export const reports = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/reports'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  if (parameters['token'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: token'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const reports_PARAMETERS = {
  token: {
    name: "token",
    in: "query",
    description: "A security token used to authenticate a user request.",
    required: true,
    schema: {
      "type": "string"
    },
    camelCaseName: "token",
    isQueryParameter: true,
  }
}
export const reports_RAW_URL = function() {
  return '/reports'
}
export const reports_TYPE = function() {
  return 'get'
}
export const reportsURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/reports'
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
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
 * Raw flows data
 * request: flows
 * url: flowsURL
 * method: flows_TYPE
 * raw_url: flows_RAW_URL
 * @param startTime - Date and time start in the form (YYYY-MM-DDTHH:MM:SSZ)
 * @param endTime - Date and time end in the form (YYYY-MM-DDTHH:MM:SSZ)
 * @param srcAddr - Source addr. Format: 185.34.200.15
 * @param dstAddr - Destination addr. Format: 204.252.0.24
 * @param ipVersion - IP version
 * @param tos - Type of service
 * @param protocol - IP Protocol number
 * @param srcPort - TCP/UDP source port number separated by coma. Ranges identified by .. Examples: [53, 80, 443, 1000..2000]
 * @param dstPort - TCP/UDP destination port number separated by coma. Ranges identified by .. Examples: [53, 80, 443, 1000..2000]
 * @param inputInterface - SNMP input interface Index 
 * @param outputInterface - SNMP output interface Index 
 * @param srcMask - Network mask of source addr
 * @param dstMask - Network mask of destination addr
 * @param srcAs - Source AS Number
 * @param dstAs - Destination AS Number
 * @param nextHop - Next hop. Format: 149.11.38.161
 * @param groupby - Group by report.
 * @param aggregateColumn - Aggregate column
 * @param aggregateFunction - Aggregate functions
 * @param orderby - One of the columns to sort a report.
 * @param order - The sorting order of a report sorted by some column. Values can be either ascending or descending. Must by used with orderby parameter.
 * @param page - Page number
 * @param pageSize - Page size
 */
export const flows = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/reports/flows'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['startTime'] !== undefined) {
    queryParameters['start-time'] = parameters['startTime']
  }
  if (parameters['startTime'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: startTime'))
  }
  if (parameters['endTime'] !== undefined) {
    queryParameters['end-time'] = parameters['endTime']
  }
  if (parameters['endTime'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: endTime'))
  }
  if (parameters['srcAddr'] !== undefined) {
    queryParameters['src-addr'] = parameters['srcAddr']
  }
  if (parameters['dstAddr'] !== undefined) {
    queryParameters['dst-addr'] = parameters['dstAddr']
  }
  if (parameters['ipVersion'] !== undefined) {
    queryParameters['ip-version'] = parameters['ipVersion']
  }
  if (parameters['tos'] !== undefined) {
    queryParameters['tos'] = parameters['tos']
  }
  if (parameters['protocol'] !== undefined) {
    queryParameters['protocol'] = parameters['protocol']
  }
  if (parameters['srcPort'] !== undefined) {
    queryParameters['src-port'] = parameters['srcPort']
  }
  if (parameters['dstPort'] !== undefined) {
    queryParameters['dst-port'] = parameters['dstPort']
  }
  if (parameters['inputInterface'] !== undefined) {
    queryParameters['input-interface'] = parameters['inputInterface']
  }
  if (parameters['outputInterface'] !== undefined) {
    queryParameters['output-interface'] = parameters['outputInterface']
  }
  if (parameters['srcMask'] !== undefined) {
    queryParameters['src-mask'] = parameters['srcMask']
  }
  if (parameters['dstMask'] !== undefined) {
    queryParameters['dst-mask'] = parameters['dstMask']
  }
  if (parameters['srcAs'] !== undefined) {
    queryParameters['src-as'] = parameters['srcAs']
  }
  if (parameters['dstAs'] !== undefined) {
    queryParameters['dst-as'] = parameters['dstAs']
  }
  if (parameters['nextHop'] !== undefined) {
    queryParameters['next-hop'] = parameters['nextHop']
  }
  if (parameters['groupby'] !== undefined) {
    queryParameters['groupby'] = parameters['groupby']
  }
  if (parameters['aggregateColumn'] !== undefined) {
    queryParameters['aggregate-column'] = parameters['aggregateColumn']
  }
  if (parameters['aggregateFunction'] !== undefined) {
    queryParameters['aggregate-function'] = parameters['aggregateFunction']
  }
  if (parameters['orderby'] !== undefined) {
    queryParameters['orderby'] = parameters['orderby']
  }
  if (parameters['order'] !== undefined) {
    queryParameters['order'] = parameters['order']
  }
  if (parameters['page'] !== undefined) {
    queryParameters['page'] = parameters['page']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['page-size'] = parameters['pageSize']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const flows_PARAMETERS = {
  startTime: {
    name: "start-time",
    in: "query",
    description: "Date and time start in the form (YYYY-MM-DDTHH:MM:SSZ)",
    required: true,
    schema: {
      "type": "string",
      "format": "date-time"
    },
    camelCaseName: "startTime",
    isQueryParameter: true,
  },
  endTime: {
    name: "end-time",
    in: "query",
    description: "Date and time end in the form (YYYY-MM-DDTHH:MM:SSZ)",
    required: true,
    schema: {
      "type": "string",
      "format": "date-time"
    },
    camelCaseName: "endTime",
    isQueryParameter: true,
  },
  srcAddr: {
    name: "src-addr",
    in: "query",
    description: "Source addr. Format: 185.34.200.15",
    schema: {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    camelCaseName: "srcAddr",
    isQueryParameter: true,
    cardinality: "?"
  },
  dstAddr: {
    name: "dst-addr",
    in: "query",
    description: "Destination addr. Format: 204.252.0.24",
    schema: {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    camelCaseName: "dstAddr",
    isQueryParameter: true,
    cardinality: "?"
  },
  ipVersion: {
    name: "ip-version",
    in: "query",
    description: "IP version",
    schema: {
      "type": "string",
      "enum": ["4", "6"]
    },
    camelCaseName: "ipVersion",
    isQueryParameter: true,
    cardinality: "?"
  },
  tos: {
    name: "tos",
    in: "query",
    description: "Type of service",
    schema: {
      "type": "integer",
      "format": "uint8",
      "minimum": 0,
      "maximum": 255
    },
    camelCaseName: "tos",
    isQueryParameter: true,
    cardinality: "?"
  },
  protocol: {
    name: "protocol",
    in: "query",
    description: "IP Protocol number",
    schema: {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    camelCaseName: "protocol",
    isQueryParameter: true,
    cardinality: "?"
  },
  srcPort: {
    name: "src-port",
    in: "query",
    description: "TCP/UDP source port number separated by coma. Ranges identified by .. Examples: [53, 80, 443, 1000..2000]",
    schema: {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    camelCaseName: "srcPort",
    isQueryParameter: true,
    cardinality: "?"
  },
  dstPort: {
    name: "dst-port",
    in: "query",
    description: "TCP/UDP destination port number separated by coma. Ranges identified by .. Examples: [53, 80, 443, 1000..2000]",
    schema: {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    camelCaseName: "dstPort",
    isQueryParameter: true,
    cardinality: "?"
  },
  inputInterface: {
    name: "input-interface",
    in: "query",
    description: "SNMP input interface Index ",
    schema: {
      "type": "array",
      "items": {
        "type": "integer",
        "format": "uint32",
        "minimum": 0,
        "maximum": 4294967295
      }
    },
    camelCaseName: "inputInterface",
    isQueryParameter: true,
    cardinality: "?"
  },
  outputInterface: {
    name: "output-interface",
    in: "query",
    description: "SNMP output interface Index ",
    schema: {
      "type": "array",
      "items": {
        "type": "integer",
        "format": "uint32",
        "minimum": 0,
        "maximum": 4294967295
      }
    },
    camelCaseName: "outputInterface",
    isQueryParameter: true,
    cardinality: "?"
  },
  srcMask: {
    name: "src-mask",
    in: "query",
    description: "Network mask of source addr",
    schema: {
      "type": "array",
      "items": {
        "type": "integer",
        "format": "uint8",
        "minimum": 0,
        "maximum": 128
      }
    },
    camelCaseName: "srcMask",
    isQueryParameter: true,
    cardinality: "?"
  },
  dstMask: {
    name: "dst-mask",
    in: "query",
    description: "Network mask of destination addr",
    schema: {
      "type": "array",
      "items": {
        "type": "integer",
        "format": "uint8",
        "minimum": 0,
        "maximum": 128
      }
    },
    camelCaseName: "dstMask",
    isQueryParameter: true,
    cardinality: "?"
  },
  srcAs: {
    name: "src-as",
    in: "query",
    description: "Source AS Number",
    schema: {
      "type": "array",
      "items": {
        "type": "integer",
        "format": "uint32",
        "minimum": 0,
        "maximum": 4294967295
      }
    },
    camelCaseName: "srcAs",
    isQueryParameter: true,
    cardinality: "?"
  },
  dstAs: {
    name: "dst-as",
    in: "query",
    description: "Destination AS Number",
    schema: {
      "type": "array",
      "items": {
        "type": "integer",
        "format": "uint32",
        "minimum": 0,
        "maximum": 4294967295
      }
    },
    camelCaseName: "dstAs",
    isQueryParameter: true,
    cardinality: "?"
  },
  nextHop: {
    name: "next-hop",
    in: "query",
    description: "Next hop. Format: 149.11.38.161",
    schema: {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    camelCaseName: "nextHop",
    isQueryParameter: true,
    cardinality: "?"
  },
  groupby: {
    name: "groupby",
    in: "query",
    description: "Group by report.",
    schema: {
      "type": "array",
      "items": {
        "type": "string",
        "enum": ["ts", "ipver", "src-addr", "dst-addr", "tos", "protocol", "src-port", "dst-port", "input-interface", "output-interface", "src-mask", "dst-mask", "src-as", "dst-as", "next-hop"]
      }
    },
    camelCaseName: "groupby",
    isQueryParameter: true,
    cardinality: "?"
  },
  aggregateColumn: {
    name: "aggregate-column",
    in: "query",
    description: "Aggregate column",
    schema: {
      "type": "string",
      "enum": ["octets", "packets"],
      "default": "octets"
    },
    camelCaseName: "aggregateColumn",
    isQueryParameter: true,
    cardinality: "?"
  },
  aggregateFunction: {
    name: "aggregate-function",
    in: "query",
    description: "Aggregate functions",
    schema: {
      "type": "string",
      "enum": ["count", "min", "max", "avg", "uniq", "sum"]
    },
    camelCaseName: "aggregateFunction",
    isQueryParameter: true,
    cardinality: "?"
  },
  orderby: {
    name: "orderby",
    in: "query",
    description: "One of the columns to sort a report.",
    schema: {
      "type": "string",
      "enum": ["ts", "ipver", "src-addr", "dst-addr", "tos", "protocol", "src-port", "dst-port", "input-interface", "output-interface", "src-mask", "dst-mask", "src-as", "dst-as", "next-hop", "octets", "packets"],
      "default": "ts"
    },
    camelCaseName: "orderby",
    isQueryParameter: true,
    cardinality: "?"
  },
  order: {
    name: "order",
    in: "query",
    description: "The sorting order of a report sorted by some column. Values can be either ascending or descending. Must by used with orderby parameter.",
    schema: {
      "type": "string",
      "enum": ["ascending", "descending"],
      "default": "descending"
    },
    camelCaseName: "order",
    isQueryParameter: true,
    cardinality: "?"
  },
  page: {
    name: "page",
    in: "query",
    description: "Page number",
    schema: {
      "type": "integer",
      "format": "uint32",
      "minimum": 1,
      "default": 1
    },
    camelCaseName: "page",
    isQueryParameter: true,
    cardinality: "?"
  },
  pageSize: {
    name: "page-size",
    in: "query",
    description: "Page size",
    schema: {
      "type": "integer",
      "format": "uint16",
      "maximum": 5000,
      "default": 100
    },
    camelCaseName: "pageSize",
    isQueryParameter: true,
    cardinality: "?"
  }
}
export const flows_RAW_URL = function() {
  return '/reports/flows'
}
export const flows_TYPE = function() {
  return 'get'
}
export const flowsURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/reports/flows'
  if (parameters['startTime'] !== undefined) {
    queryParameters['start-time'] = parameters['startTime']
  }
  if (parameters['endTime'] !== undefined) {
    queryParameters['end-time'] = parameters['endTime']
  }
  if (parameters['srcAddr'] !== undefined) {
    queryParameters['src-addr'] = parameters['srcAddr']
  }
  if (parameters['dstAddr'] !== undefined) {
    queryParameters['dst-addr'] = parameters['dstAddr']
  }
  if (parameters['ipVersion'] !== undefined) {
    queryParameters['ip-version'] = parameters['ipVersion']
  }
  if (parameters['tos'] !== undefined) {
    queryParameters['tos'] = parameters['tos']
  }
  if (parameters['protocol'] !== undefined) {
    queryParameters['protocol'] = parameters['protocol']
  }
  if (parameters['srcPort'] !== undefined) {
    queryParameters['src-port'] = parameters['srcPort']
  }
  if (parameters['dstPort'] !== undefined) {
    queryParameters['dst-port'] = parameters['dstPort']
  }
  if (parameters['inputInterface'] !== undefined) {
    queryParameters['input-interface'] = parameters['inputInterface']
  }
  if (parameters['outputInterface'] !== undefined) {
    queryParameters['output-interface'] = parameters['outputInterface']
  }
  if (parameters['srcMask'] !== undefined) {
    queryParameters['src-mask'] = parameters['srcMask']
  }
  if (parameters['dstMask'] !== undefined) {
    queryParameters['dst-mask'] = parameters['dstMask']
  }
  if (parameters['srcAs'] !== undefined) {
    queryParameters['src-as'] = parameters['srcAs']
  }
  if (parameters['dstAs'] !== undefined) {
    queryParameters['dst-as'] = parameters['dstAs']
  }
  if (parameters['nextHop'] !== undefined) {
    queryParameters['next-hop'] = parameters['nextHop']
  }
  if (parameters['groupby'] !== undefined) {
    queryParameters['groupby'] = parameters['groupby']
  }
  if (parameters['aggregateColumn'] !== undefined) {
    queryParameters['aggregate-column'] = parameters['aggregateColumn']
  }
  if (parameters['aggregateFunction'] !== undefined) {
    queryParameters['aggregate-function'] = parameters['aggregateFunction']
  }
  if (parameters['orderby'] !== undefined) {
    queryParameters['orderby'] = parameters['orderby']
  }
  if (parameters['order'] !== undefined) {
    queryParameters['order'] = parameters['order']
  }
  if (parameters['page'] !== undefined) {
    queryParameters['page'] = parameters['page']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['page-size'] = parameters['pageSize']
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
 * Implements signing-on functionality
 * request: login
 * url: loginURL
 * method: login_TYPE
 * raw_url: login_RAW_URL
 */
export const login = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/login'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const login_PARAMETERS = {}
export const login_RAW_URL = function() {
  return '/login'
}
export const login_TYPE = function() {
  return 'post'
}
export const loginURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/login'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Implements direct Clickhouse query
 * request: query
 * url: queryURL
 * method: query_TYPE
 * raw_url: query_RAW_URL
 */
export const query = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/query'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const query_PARAMETERS = {}
export const query_RAW_URL = function() {
  return '/query'
}
export const query_TYPE = function() {
  return 'post'
}
export const queryURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/query'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Updates a stored query
 * request: update_stored_query
 * url: update_stored_queryURL
 * method: update_stored_query_TYPE
 * raw_url: update_stored_query_RAW_URL
 * @param id - Stored query Id
 */
export const update_stored_query = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/queries/{id}'
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
  return request('post', domain + path, body, queryParameters, form, config)
}
export const update_stored_query_PARAMETERS = {
  id: { in: "path",
    name: "id",
    description: "Stored query Id",
    required: true,
    schema: {
      "type": "integer",
      "format": "int64"
    },
    camelCaseName: "id",
    isPathParameter: true,
  }
}
export const update_stored_query_RAW_URL = function() {
  return '/queries/{id}'
}
export const update_stored_query_TYPE = function() {
  return 'post'
}
export const update_stored_queryURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/queries/{id}'
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
 * Deletes a stored query
 * request: delete_stored_query
 * url: delete_stored_queryURL
 * method: delete_stored_query_TYPE
 * raw_url: delete_stored_query_RAW_URL
 * @param id - Stored query Id
 */
export const delete_stored_query = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/queries/{id}'
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
export const delete_stored_query_PARAMETERS = {
  id: { in: "path",
    name: "id",
    description: "Stored query Id",
    required: true,
    schema: {
      "type": "integer",
      "format": "int64"
    },
    camelCaseName: "id",
    isPathParameter: true,
  }
}
export const delete_stored_query_RAW_URL = function() {
  return '/queries/{id}'
}
export const delete_stored_query_TYPE = function() {
  return 'delete'
}
export const delete_stored_queryURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/queries/{id}'
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
 * Creates a new query
 * request: post_stored_query
 * url: post_stored_queryURL
 * method: post_stored_query_TYPE
 * raw_url: post_stored_query_RAW_URL
 */
export const post_stored_query = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/queries'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const post_stored_query_PARAMETERS = {}
export const post_stored_query_RAW_URL = function() {
  return '/queries'
}
export const post_stored_query_TYPE = function() {
  return 'post'
}
export const post_stored_queryURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/queries'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Gets a list of stored queries
 * request: get_queries
 * url: get_queriesURL
 * method: get_queries_TYPE
 * raw_url: get_queries_RAW_URL
 */
export const get_queries = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/queries'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_queries_PARAMETERS = {}
export const get_queries_RAW_URL = function() {
  return '/queries'
}
export const get_queries_TYPE = function() {
  return 'get'
}
export const get_queriesURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/queries'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Gets a list of user profiles
 * request: get_profiles
 * url: get_profilesURL
 * method: get_profiles_TYPE
 * raw_url: get_profiles_RAW_URL
 */
export const get_profiles = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/profiles'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_profiles_PARAMETERS = {}
export const get_profiles_RAW_URL = function() {
  return '/profiles'
}
export const get_profiles_TYPE = function() {
  return 'get'
}
export const get_profilesURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/profiles'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Updates the given user profile
 * request: update_user_profile
 * url: update_user_profileURL
 * method: update_user_profile_TYPE
 * raw_url: update_user_profile_RAW_URL
 * @param id - User Id
 */
export const update_user_profile = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/profiles/{id}'
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
  return request('post', domain + path, body, queryParameters, form, config)
}
export const update_user_profile_PARAMETERS = {
  id: { in: "path",
    name: "id",
    description: "User Id",
    required: true,
    schema: {
      "type": "integer",
      "format": "int64"
    },
    camelCaseName: "id",
    isPathParameter: true,
  }
}
export const update_user_profile_RAW_URL = function() {
  return '/profiles/{id}'
}
export const update_user_profile_TYPE = function() {
  return 'post'
}
export const update_user_profileURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/profiles/{id}'
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
 * Gets the current user profile
 * request: get_profile
 * url: get_profileURL
 * method: get_profile_TYPE
 * raw_url: get_profile_RAW_URL
 */
export const get_profile = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/profile'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_profile_PARAMETERS = {}
export const get_profile_RAW_URL = function() {
  return '/profile'
}
export const get_profile_TYPE = function() {
  return 'get'
}
export const get_profileURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/profile'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Updates the current user profile
 * request: update_profile
 * url: update_profileURL
 * method: update_profile_TYPE
 * raw_url: update_profile_RAW_URL
 */
export const update_profile = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/profile'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const update_profile_PARAMETERS = {}
export const update_profile_RAW_URL = function() {
  return '/profile'
}
export const update_profile_TYPE = function() {
  return 'post'
}
export const update_profileURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/profile'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Implements signing-out functionality
 * request: logout
 * url: logoutURL
 * method: logout_TYPE
 * raw_url: logout_RAW_URL
 */
export const logout = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/logout'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const logout_PARAMETERS = {}
export const logout_RAW_URL = function() {
  return '/logout'
}
export const logout_TYPE = function() {
  return 'post'
}
export const logoutURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/logout'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
* Return full structure of configuration, with it\'s groups and subgroups
    
* request: configGet
* url: configGetURL
* method: configGet_TYPE
* raw_url: configGet_RAW_URL
*/
export const configGet = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/config'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const configGet_PARAMETERS = {}
export const configGet_RAW_URL = function() {
  return '/config'
}
export const configGet_TYPE = function() {
  return 'get'
}
export const configGetURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/config'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Update subgroup of group in configuration
 * request: configResourceUpdate
 * url: configResourceUpdateURL
 * method: configResourceUpdate_TYPE
 * raw_url: configResourceUpdate_RAW_URL
 * @param resource - Subgroup name
 */
export const configResourceUpdate = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/config/{resource}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{resource}', `${parameters['resource']}`)
  if (parameters['resource'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: resource'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const configResourceUpdate_PARAMETERS = {
  resource: { in: "path",
    name: "resource",
    description: "Subgroup name",
    required: true,
    schema: {
      "type": "string"
    },
    camelCaseName: "resource",
    isPathParameter: true,
  }
}
export const configResourceUpdate_RAW_URL = function() {
  return '/config/{resource}'
}
export const configResourceUpdate_TYPE = function() {
  return 'post'
}
export const configResourceUpdateURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/config/{resource}'
  path = path.replace('{resource}', `${parameters['resource']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Return subgroup structure by resource name
 * request: configResourceGet
 * url: configResourceGetURL
 * method: configResourceGet_TYPE
 * raw_url: configResourceGet_RAW_URL
 * @param resource - Configuration subgroup name
 */
export const configResourceGet = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/config/{resource}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{resource}', `${parameters['resource']}`)
  if (parameters['resource'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: resource'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const configResourceGet_PARAMETERS = {
  resource: { in: "path",
    name: "resource",
    description: "Configuration subgroup name",
    required: true,
    schema: {
      "type": "string"
    },
    camelCaseName: "resource",
    isPathParameter: true,
  }
}
export const configResourceGet_RAW_URL = function() {
  return '/config/{resource}'
}
export const configResourceGet_TYPE = function() {
  return 'get'
}
export const configResourceGetURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/config/{resource}'
  path = path.replace('{resource}', `${parameters['resource']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Delete exact single parameter identified by it's key/name
 * request: configParameterDelete
 * url: configParameterDeleteURL
 * method: configParameterDelete_TYPE
 * raw_url: configParameterDelete_RAW_URL
 * @param resource - Configuration subgroup name
 * @param id - Parameter name
 */
export const configParameterDelete = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/config/{resource}/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{resource}', `${parameters['resource']}`)
  if (parameters['resource'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: resource'))
  }
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
export const configParameterDelete_PARAMETERS = {
  resource: { in: "path",
    name: "resource",
    description: "Configuration subgroup name",
    required: true,
    schema: {
      "type": "string"
    },
    camelCaseName: "resource",
    isPathParameter: true,
  },
  id: { in: "path",
    name: "id",
    description: "Parameter name",
    required: true,
    schema: {
      "type": "string"
    },
    camelCaseName: "id",
    isPathParameter: true,
  }
}
export const configParameterDelete_RAW_URL = function() {
  return '/config/{resource}/{id}'
}
export const configParameterDelete_TYPE = function() {
  return 'delete'
}
export const configParameterDeleteURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/config/{resource}/{id}'
  path = path.replace('{resource}', `${parameters['resource']}`)
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
 * Update exact single parameter identified by it's key/name
 * request: configParameterUpdate
 * url: configParameterUpdateURL
 * method: configParameterUpdate_TYPE
 * raw_url: configParameterUpdate_RAW_URL
 * @param resource - Subgroup name
 * @param id - Parameter name
 */
export const configParameterUpdate = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/config/{resource}/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{resource}', `${parameters['resource']}`)
  if (parameters['resource'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: resource'))
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const configParameterUpdate_PARAMETERS = {
  resource: { in: "path",
    name: "resource",
    description: "Subgroup name",
    required: true,
    schema: {
      "type": "string"
    },
    camelCaseName: "resource",
    isPathParameter: true,
  },
  id: { in: "path",
    name: "id",
    description: "Parameter name",
    required: true,
    schema: {
      "type": "string"
    },
    camelCaseName: "id",
    isPathParameter: true,
  }
}
export const configParameterUpdate_RAW_URL = function() {
  return '/config/{resource}/{id}'
}
export const configParameterUpdate_TYPE = function() {
  return 'post'
}
export const configParameterUpdateURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/config/{resource}/{id}'
  path = path.replace('{resource}', `${parameters['resource']}`)
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
 * Return parameter from subgroup by it's name
 * request: configParameterGet
 * url: configParameterGetURL
 * method: configParameterGet_TYPE
 * raw_url: configParameterGet_RAW_URL
 * @param resource - Configuration subgroup name
 * @param id - Parameter name
 */
export const configParameterGet = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/config/{resource}/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{resource}', `${parameters['resource']}`)
  if (parameters['resource'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: resource'))
  }
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
export const configParameterGet_PARAMETERS = {
  resource: { in: "path",
    name: "resource",
    description: "Configuration subgroup name",
    required: true,
    schema: {
      "type": "string"
    },
    camelCaseName: "resource",
    isPathParameter: true,
  },
  id: { in: "path",
    name: "id",
    description: "Parameter name",
    required: true,
    schema: {
      "type": "string"
    },
    camelCaseName: "id",
    isPathParameter: true,
  }
}
export const configParameterGet_RAW_URL = function() {
  return '/config/{resource}/{id}'
}
export const configParameterGet_TYPE = function() {
  return 'get'
}
export const configParameterGetURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/config/{resource}/{id}'
  path = path.replace('{resource}', `${parameters['resource']}`)
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}