/**
 * index.js
 * Client entry point.
 *
 * @author Francis Brito <fr.br94@gmail.com>
 * @license MIT
 */
'use strict';

var Client = function Client(apiKey, opts) {
    if (!apiKey) {
        throw new Error('No API key provided.');
    }
};

module.exports = {
    Client: Client
};
