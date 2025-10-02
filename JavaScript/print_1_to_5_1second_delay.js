function x() {
    for (var i = 0; i <= 5; i++) {
        setTimeout(function () {
            console.log(i);
        }, i * 1000);
    }
}

x();

// Problem in above code with Var type variable- in console.log 'i' is pointing to the i refrence thats why getting 6 all 5 times.

// Improved version

function x1() {
    for (let i = 1; i <= 5; i++) {
        setTimeout(function () {
            console.log(i);
        }, i * 1000);
    }
}

x1();


//----------------------------------------------------------------------------------------------
// If we will try to get the desier result with var only so-

function x2() {
    for (var i = 1; i <= 5; i++) {
        function close(i) {
            setTimeout(function () {
                console.log(i);
            }, i * 1000);
        }
        close(i);
    }
}

x2();

