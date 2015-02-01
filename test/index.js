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
});
