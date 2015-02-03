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

    this._endpoint = opts.endpoint || Client.DEFAULT_API_URL;
    this._version = opts.version || Client.DEFAULT_API_VERSION;
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
 * @type {Number}
 */
Client.DEFAULT_API_VERSION = 1;


/**
 * Client#getProducts
 * Retrieves a list of print products.
 *
 * @param {Object} filter   Key/value pairs to filter products.
 * @param {Function} fn     Callback.
 */
Client.prototype.getProducts = function getProducts(filter, fn) {
    fn(null, [{kind: ''}]);
};

module.exports = {
    Client: Client
};
