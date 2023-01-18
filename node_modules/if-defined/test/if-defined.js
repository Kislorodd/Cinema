'use strict'

const assert = require('chai').assert
const defined = require('../lib/if-defined')

describe('if-defined', function () {

    it('should return true if value is defined', function () {
        // list of values - all defined
        var testValues = [false, null, 0, 1, '', 'hello', {}, []]
        // check each value
        testValues.forEach(value => assert.isTrue(defined(value)))
    })

    it('should return false if value is not defined', function () {
        assert.isFalse(defined())
        assert.isFalse(defined(undefined))
    })

})