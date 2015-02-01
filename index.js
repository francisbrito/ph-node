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
    if (!apiKey) {
        throw new Error('No API key provided.');
    }
};

module.exports = {
    Client: Client
};
