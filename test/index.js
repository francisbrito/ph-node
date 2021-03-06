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

var they = it.bind(it);

var PH_TEST_SERVER = 'http://private-50d6dc-printhouse.apiary-mock.com/api';

describe('Client', function () {
    this.timeout(5 * 1000);

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

    describe('methods', function () {
        they('should throw if API endpoint is not reachable.');
        they('should throw if API endpoint responds with a server error.');
    });

    describe('#getProducts', function () {
        before(function () {
            this.client = new Client('some api token', {
                endpoint: PH_TEST_SERVER
            });
        });

        it('should return a list of products.', function (next) {
            this.client.getProducts(function (err, products) {
                products.should.be.ok.and.be.an.Array;

                next();
            });
        });
    });

    describe('#getProductById', function () {
        before(function () {
            this.client = new Client('some api token', {
                endpoint: PH_TEST_SERVER
            });
        });

        it('should return a product.', function (next) {
            this.client.getProductById('id', function (err, product) {
                (!!product).should.be.ok;

                next();
            });
        });

        it('should return an error if no product with id `id` is found.'/*, function (next) {
            // NOTE: This case cannot be tested with current mock server.
            this.client.getProductById('-1', function (err) {
                (!!err).should.be.ok;
                err.message.should.eql('Unable to find product with such id.');

                next();
            });
        }*/);

        it('should throw if no `id` field is provided.', function () {
            var client = this.client;

            (function () {
                client.getProductById(null);
            }).should.throw('`id` is missing.');
        });
    });

    describe('#getPrintFiles', function () {

        before(function () {
            this.client = new Client('some api token', {
                endpoint: PH_TEST_SERVER
            });
        });

        it('should return a list of print files.', function (next) {
            this.client.getPrintFiles(function (err, files) {
                (!!files).should.be.ok;
                files.should.be.an.Array;

                next();
            });
        });
    });

    describe('#getPrintFileById', function () {
        before(function () {
            this.client = new Client('some api token', {
                endpoint: PH_TEST_SERVER
            });
        });

        it('should return a print file.', function (next) {
            this.client.getPrintFileById('id', function (err, file) {
                (!!file).should.be.ok;
                file.should.be.an.Object;

                next();
            });
        });

        it('should throw if no print file with id `id` is found.');

        it('should throw if no `id` field is provided.', function () {
            var client = this.client;

            (function () {
                client.getPrintFileById();
            }).should.throw('`id` is missing.');
        });
    });

    describe('#createPrintFile', function () {
        before(function () {
            this.client = new Client('some api token', {
                endpoint: PH_TEST_SERVER
            });
        });

        it('should throw if no `fields` parameter is provided.', function () {
            var client = this.client;

            (function () {
                client.createPrintFile(null, function () {});
            }).should.throw('`fields` is missing.');
        });

        it('should return created print file.', function (next) {
            var fields = {
                print_file: {
                    product_id: 1,
                    file_url: 'http://placehold.it/300'
                }
            };

            this.client.createPrintFile(fields, function (err, file) {
                (!!file).should.be.ok;
                file.id.should.be.ok;

                next();
            });
        });
    });

    describe('#getOrders', function () {});

    describe('#getOrderById', function () {
        it('should throw if no order with id `id` is found.');
        it('should throw if no `id` field is provided.');
    });

    describe('#createOrder', function () {
        it('should throw if no `fields` parameter is provided.');
    });

    describe('#updateOrder', function () {
        it('should throw if no order with id `id` is found.');
        it('should throw if no `id` field is provided.');
        it('should throw if order has already being confirmed.');
        it('should throw if no `fields` parameter is provided.');
    });

    describe('#confirmOrder', function () {
        it('should throw if no order with id `id` is found.');
        it('should throw if no `id` field is provided.');
        it('should throw if order was already confirmed.');
    });
});

/*
 * Helpers
 */
// function isACanvas(c) { return c.kind === 'Canvas'; }
// function every(array, predicate) { return array.every(predicate); }
