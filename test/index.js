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

var PH_TEST_SERVER = 'http://private-50d6dc-printhouse.apiary-mock.com/api';

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
                endpoint: PH_TEST_SERVER
            });
        });

        it('should return a list of products.', function (next) {
            this.client.getProducts(function (err, products) {
                products.should.be.ok.and.be.an.Array;

                next();
            });
        });

        it('should throw if API endpoint is not reachable.');

        it('should throw if API endpoint responds with a server error.');
    });

    describe('#getProductById', function () {
        before(function () {
            this.client = new Client('some api token', {
                endpoint: PH_TEST_SERVER
            });
        });

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
// function isACanvas(c) { return c.kind === 'Canvas'; }
// function every(array, predicate) { return array.every(predicate); }
