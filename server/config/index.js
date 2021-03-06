/**
 * @prettier
 * @copyright (c) 2019 - present, HGC-AB
 * @licence This source code is licensed under the MIT license described and found in the
 * LICENSE file in the root directory of this source tree.
 */

const apiVersion = process.env.API_VERSION || '/v1'

/**
 * Configuration for the OAuth 2 server
 */
const oAuthConfig = {
  corsConfig: {
    origin: true,
    allowedHeaders: ['Authorization'],
    exposedHeaders: ['WWW-Authenticate', 'X-Accepted-OAuth-Scopes', 'X-OAuth-Scopes'],
  },
  endpoints: {
    status: '/',
    root: (process.env.ENDPOINT_ROOT || '/oauth') + apiVersion,
    token: process.env.ENDPOINT_TOKEN || '/tokens',
    authorize: process.env.ENDPOINT_AUTHORIZE || '/authorize',
    introspect: process.env.ENDPOINT_INTROSPECT || '/introspect',
    revoke: process.env.ENDPOINT_REVOKE || '/revoke',
  }
}

module.exports = oAuthConfig
