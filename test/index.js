/**
 * test/index.js
 * Contains tests for client entry point.
 *
 * @author Francis Brito <fr.br94@gmail.com>
 * @license MIT
 */
/* global describe, it */
'use strict';

var should = require('should');

describe('Client', function () {
    describe('constructor', function () {
        it('should throw if no API key is provided.');
        it('should use default API endpoint if none is provided.');
        it('should use latest API version if none is specified.');
    });

    describe('#getProducts', function () {
        it('should filter products by `filter` parameter.');

        it('should throw if API endpoint is not reachable.');
        it('should throw if API endpoint responds with a server error.');
        it('should throw if an unsupported status code is returned.');
    });

    describe('#getProductById', function () {
        it('should throw if no product with id `id` is found.');
        it('should throw if no `id` field is provided.');

        it('should throw if API endpoint is not reachable.');
        it('should throw if API endpoint responds with a server error.');
        it('should throw if an unsupported status code is returned.');
    });

    describe('#getPrintFiles', function () {
        it('should throw if API endpoint is not reachable.');
        it('should throw if API endpoint responds with a server error.');
        it('should throw if an unsupported status code is returned.');
    });
});
