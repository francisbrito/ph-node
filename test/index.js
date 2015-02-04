/**
 * test/index.js
 * Contains tests for client entry point.
 *
 * @author Francis Brito <fr.br94@gmail.com>
 * @license MIT
 */
/* global describe, it, before */
/* jshint expr:true */
'use strict';

require('should');

var Client = require('../').Client;

var LOCAL_TEST_SERVER = 'http://localhost:3000';

describe('Client', function () {
    describe('constructor', function () {
        it('should throw if no API key is provided.', function () {
            (function () {
               new Client();
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
            this.client = new Client('some api token', {
                endpoint: LOCAL_TEST_SERVER
            });
        });

        it('should filter products by `filter` parameter.', function (next) {
            var filter = {
                kind: 'Canvas'
            };

            this.client.getProducts(filter, function (err, products) {
                every(products, isACanvas).should.be.true;

                next();
            });
        });

        it('should not require `filter` parameter.', function (next) {
            var self = this;

            (function () {
                // Note: try/catch is required so Mocha.js doesn't stop test execution upon receiving type error.
                try {
                    self.client.getProducts(function (err, products) {
                        products.should.be.ok.and.be.an.Array;

                        next();
                    });
                } catch(err) {
                    throw err;
                }
            }).should.not.throw();
        });

        it('should throw if API endpoint is not reachable.', function (next) {
            this.timeout(5 * 1000);

            var client = new Client('some api token', {
                endpoint: 'http://not-reachable:3001'
            });


            client.getProducts(function (err) {
                err.should.be.ok;
                err.message.should.eql('Endpoint "http://not-reachable:3001" not reachable.');

                next();
            });
        });

        it('should throw if API endpoint responds with a server error.', function (next) {
            var client = new Client('some api token', {
                endpoint: 'http://localhost:3000/server-error'
            });

            client.getProducts(function (err) {
                (err !== null).should.be.true;
                err.message.should.eql('Server responded with an error.');
                err.inner.should.eql('Cannot GET /server-error/1/products?');

                next();
            });
        });
    });

    describe('#getProductById', function () {
        it('should throw if no product with id `id` is found.');
        it('should throw if no `id` field is provided.');

        it('should throw if API endpoint is not reachable.');
        it('should throw if API endpoint responds with a server error.');
    });

    describe('#getPrintFiles', function () {
        it('should throw if API endpoint is not reachable.');
        it('should throw if API endpoint responds with a server error.');
    });

    describe('#getPrintFileById', function () {
        it('should throw if no print file with id `id` is found.');
        it('should throw if no `id` field is provided.');

        it('should throw if API endpoint is not reachable.');
        it('should throw if API endpoint responds with a server error.');
    });

    describe('#createPrintFile', function () {
        it('should throw if no `fields` parameter is provided.');

        it('should throw if API endpoint is not reachable.');
        it('should throw if API endpoint responds with a server error.');
    });

    describe('#getOrders', function () {
        it('should throw if API endpoint is not reachable.');
        it('should throw if API endpoint responds with a server error.');
    });

    describe('#getOrderById', function () {
        it('should throw if no order with id `id` is found.');
        it('should throw if no `id` field is provided.');

        it('should throw if API endpoint is not reachable.');
        it('should throw if API endpoint responds with a server error.');
    });

    describe('#createOrder', function () {
        it('should throw if no `fields` parameter is provided.');

        it('should throw if API endpoint is not reachable.');
        it('should throw if API endpoint responds with a server error.');
    });

    describe('#updateOrder', function () {
        it('should throw if no order with id `id` is found.');
        it('should throw if no `id` field is provided.');
        it('should throw if order has already being confirmed.');
        it('should throw if no `fields` parameter is provided.');

        it('should throw if API endpoint is not reachable.');
        it('should throw if API endpoint responds with a server error.');
    });

    describe('#confirmOrder', function () {
        it('should throw if no order with id `id` is found.');
        it('should throw if no `id` field is provided.');
        it('should throw if order was already confirmed.');

        it('should throw if API endpoint is not reachable.');
        it('should throw if API endpoint responds with a server error.');
    });
});

/*
 * Helpers
 */
function isACanvas(c) { return c.kind === 'Canvas'; }
function every(array, predicate) { return array.every(predicate); }
