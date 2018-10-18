var add = function(a, b) {
    return a + b;
};

QUnit.test("my module test", function() {
    equal(add(2, 3), 5, "add function succeeds");
    equal(add("2", 3), 5, "add function fails");
});