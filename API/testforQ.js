var add = function(a, b) {
    return a + b;
};

QUnit.test("my module test", function() {
    QUnit.equal(add(2, 3), 5, "add function succeeds");
    QUnit.equal(add("2", 3), 5, "add function fails");
});