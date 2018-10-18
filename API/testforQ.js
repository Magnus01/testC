if (typeof QUnit == 'undefined') // if your tests also run in the browser...
    QUnit = require('qunit');

// use QUnit as you normally would.

var add = function(a, b) {
    return a + b;
};

QUnit.test("my module test", function() {
    QUnit.assert.equal(add(2, 3), 5, "add function succeeds");
    QUnit.assert.equal(add(2, 3), 5, "add function fails");
});