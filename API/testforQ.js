// A custom function
function ajax(successCallback) {
    $.ajax({
        url: 'server.php',
        success: successCallback
    });
}

// Tell QUnit that you expect three assertion to run
test('asynchronous test', 3, function() {
    // Pause the test
    stop();

    ajax(function() {
        ok(true);
    })

    ajax(function() {
        ok(true);
        ok(true);
    })

    setTimeout(function() {
        start();
    }, 2000);
})