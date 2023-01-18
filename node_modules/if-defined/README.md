# if-defined

    const defined = require('if-defined')

    var x

    if (!defined(x)) {
        console.log('foobar')
    }

Test value to see if it is defined. Return true or false.

The evaluation of defined is done as:

    x !== undefined