/**
 * @prettier
 * @copyright (c) 2019 - present, HGC-AB
 * @licence This source code is licensed under the MIT license described and found in the
 * LICENSE file in the root directory of this source tree.
 */

const router = require('express').Router()
const authorize = require('../middleware/authorize')
const token = require('../middleware/token')
const introspect = require('../middleware/introspect')
const revoke = require('../middleware/revoke')

/**
 * Set up router, endpoints, middleware and attach the router to express
 * @param app
 * @param appConfig
 */
module.exports = function (app, appConfig) {
  const { oAuthConfig } = appConfig
  const { endpoints } = oAuthConfig

  // Endpoint to request access tokens for an authorized request
  router.route(endpoints.token).post(token())

  // Endpoint to authorize a request for an access token
  router
    .route(endpoints.authorize)
    .get(authorize())
    .post(authorize())

  // Endpoint to introspect an access token status
  router.route(endpoints.introspect).post(introspect())

  // Endpoint to revoke token
  router.route(endpoints.revoke).post(revoke())

  // Connect the endpoints to the root endpoint and express.js
  app.use(oAuthConfig.endpoints.root, router)
}
