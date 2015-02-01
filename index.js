/**
 * index.js
 * Client entry point.
 *
 * @author Francis Brito <fr.br94@gmail.com>
 * @license MIT
 */
'use strict';

/**
 * Client
 * Provides methods to access PrintHouse's API.
 *
 * @param {String} apiKey   API key identifying account owner.
 * @param {Object} opts     Contains options to be passed to the client
 */
var Client = function Client(apiKey, opts) {
    opts = opts || {};

    if (!apiKey) {
        throw new Error('No API key provided.');
    }

    this._apiUrl = opts.apiUrl || Client.DEFAULT_API_URL; 
};

/**
 * Default API endpoint.
 * Used if no API endpoint is passed in opts parameter when constructing a client.
 *
 * @type {String}
 */
Client.DEFAULT_API_URL = 'http://printhouse.io/api';

/**
 * Default API version.
 * Used if no API version is passed in opts parameter when constructing a client.
 *
 * @type {String}
 */
Client.DEFAULT_API_VERSION = 1;

module.exports = {
    Client: Client
};
