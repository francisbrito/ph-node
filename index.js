/**
 * index.js
 * Client entry point.
 *
 * @author Francis Brito <fr.br94@gmail.com>
 * @license MIT
 */
'use strict';

var request = require('request'),
    querystring = require('querystring');

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

    this._apiKey = apiKey;
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
    if (arguments.length === 1) {
        fn = filter;

        filter = null;
    }

    this._get(this._getUrlFor('products'), fn);
};

Client.prototype.getProductById = function getProductById(id, fn) {
    if (!id) {
        throw new MissingParameterError('id');
    }

    this._get(this._getUrlFor('products') + '/' + id, fn);
};

Client.prototype.getPrintFiles = function getPrintFiles(fn) {
    this._get(this._getUrlFor('print_files'), fn);
};

Client.prototype.getPrintFileById = function getPrintFileById(id, fn) {
    if (!id) {
        throw new MissingParameterError('id');
    }

    this._get(this._getUrlFor('print_files') + '/' + id, fn);
};

Client.prototype.createPrintFile = function createPrintFile(fields, fn) {
    if (!fields) {
        throw new MissingParameterError('fields');
    }

    this._post(this._getUrlFor('print_files'), fields, fn);
};

Client.prototype._get = function _get(url, fn) {
    this._request('get', url, null, null, fn);
};

Client.prototype._post = function _post(url, body, fn) {
    this._request('post', url, body, null, fn);
};

/**
 * Client#_request
 * Allows making HTTP requests to an API endpoint.
 *
 * @param {String} method       HTTP method.
 * @param {String} collection   API collection.
 * @param {Object} body         JSON object to posted (POST/PUT methods).
 * @param {Object} query        URL query params.
 * @param {Function} fn         Callback.
 *
 * @private
 */
Client.prototype._request = function _request(method, url, body, query, fn) {
    if (query) {
        url += _toUrlQueryParams(query);
    }

    var opts = {
        url: url,
        method: method,
        headers: {
            'Authorization': 'Token token=' + this._apiKey
        }
    };

    if (body) {
        opts.json = true;
        opts.body = body;
    }

    request(opts, function (err, res, body) {
        if (err) {
            // Endpoint was not reachable...
            if (err.code === 'ENOTFOUND' || err.code === 'ETIMEDOUT') {
                err = new Error('Endpoint is not reachable.');
            }

            return fn(err);
        }

        if (res.statusCode >= 400) {
            // NOTE: Error handling logic is bound to change once
            //       the production-ready API is deployed.
            err = new Error('Server responded with an error.');

            return fn(err);
        }

        // NOTE: This is a JSON API, so its safe to parse. For now.
        //       Except if content-type is set to JSON, as response is already parsed.
        var parsed = opts.json ? body : JSON.parse(body);

        fn(null, parsed);
    });
};

/**
 * Client#_getUrlFor
 * Returns an API endpoint given a collection name.
 *
 * @param {String} collection Name of the collection.
 * @return {String}
 *
 * @private
 */
Client.prototype._getUrlFor = function _getUrlFor(collection) {
    return this._endpoint + '/' + 'v' + this._version + '/' + collection;
};

module.exports = {
    Client: Client
};

// Helpers
var _toUrlQueryParams = function _toUrlQueryParams(query) {
    return '?' + querystring.stringify(query);
};

var MissingParameterError = function MissingParameterError(param) {
    Error.call(this);

    this.message = '`' + param + '` is missing.';
};

MissingParameterError.prototype = new Error();
