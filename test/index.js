/**
 * test/index.js
 * Contains tests for client entry point.
 *
 * @author Francis Brito <fr.br94@gmail.com>
 * @license MIT
 */
/* global describe, it, before */
'use strict';

var should = require('should'),
    Client = require('../').Client;

var LOCAL_TEST_SERVER = 'http://localhost:3000';

describe('Client', function () {
    describe('constructor', function () {
        it('should throw if no API key is provided.', function () {
            (function () {
               var client = new Client();
            }).should.throw('No API key provided.');
        });

        it('should use default API endpoint if none is provided.', function () {
            var client = new Client('some api key');

            // NOTE: Accessing client's private API, so sort of breaking the rules here.
            client._endpoint.should.eql(Client.DEFAULT_API_URL);
        });

        it('should use latest API version if none is specified.', function () {
            var client = new Client('some api key');

            client._version.should.eql(Client.DEFAULT_API_VERSION);
        });
    });

    describe('#getProducts', function () {
        before(function () {
            this.client = new Client('some api key', {
                endpoint: LOCAL_TEST_SERVER
            });
        });

        it('should filter products by `filter` parameter.', function (next) {
            var filter = {
                kind: 'Canvas'
            };

            this.client.getProducts(filter, function (err, products) {
                every(products, isACanvas).should.be.true();

                next();
            });
        });

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

    describe('#getPrintFileById', function () {
        it('should throw if no print file with id `id` is found.');
        it('should throw if no `id` field is provided.');

        it('should throw if API endpoint is not reachable.');
        it('should throw if API endpoint responds with a server error.');
        it('should throw if an unsupported status code is returned.');
    });

    describe('#createPrintFile', function () {
        it('should throw if no `fields` parameter is provided.');

        it('should throw if API endpoint is not reachable.');
        it('should throw if API endpoint responds with a server error.');
        it('should throw if an unsupported status code is returned.');
    });

    describe('#getOrders', function () {
        it('should throw if API endpoint is not reachable.');
        it('should throw if API endpoint responds with a server error.');
        it('should throw if an unsupported status code is returned.');
    });

    describe('#getOrderById', function () {
        it('should throw if no order with id `id` is found.');
        it('should throw if no `id` field is provided.');

        it('should throw if API endpoint is not reachable.');
        it('should throw if API endpoint responds with a server error.');
        it('should throw if an unsupported status code is returned.');
    });

    describe('#createOrder', function () {
        it('should throw if no `fields` parameter is provided.');

        it('should throw if API endpoint is not reachable.');
        it('should throw if API endpoint responds with a server error.');
        it('should throw if an unsupported status code is returned.');
    });

    describe('#updateOrder', function () {
        it('should throw if no order with id `id` is found.');
        it('should throw if no `id` field is provided.');
        it('should throw if order has already being confirmed.');
        it('should throw if no `fields` parameter is provided.');

        it('should throw if API endpoint is not reachable.');
        it('should throw if API endpoint responds with a server error.');
        it('should throw if an unsupported status code is returned.');
    });

    describe('#confirmOrder', function () {
        it('should throw if no order with id `id` is found.');
        it('should throw if no `id` field is provided.');
        it('should throw if order was already confirmed.');

        it('should throw if API endpoint is not reachable.');
        it('should throw if API endpoint responds with a server error.');
        it('should throw if an unsupported status code is returned.');
    });
});

/*
 * Helpers
 */
function isACanvas(c) { return c.kind === 'Canvas'; }
function every(array, predicate) { return array.every(predicate); }
