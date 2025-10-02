const cart = ["shoes", "pants", "kurta"];

console.log("Hllo");
createOrder(cart)
    .then(function (orderId) {
        console.log(orderId);
        return orderId;
    })
    .catch((err) => {
        console.log(err.message);
    })
    .then(function (orderId) {
        return proceedToPayment(orderId);
    })
    .then((paymentInfo) => {
        console.log(paymentInfo);
    })
    .finally(() => {
        console.log("Promise Executed..!");
    });

// Producer

function createOrder(cart) {
    const pr = new Promise((resolve, reject) => {
        // createOrder
        // validateCart
        // orderId
        if (!validateCart(cart)) {
            const err = new Error("Cart is not valid");
            reject(err);
            return;
        }
        // loginc for createOrder
        const orderId = "12345";
        if (orderId) {
            console.log("API Called. Please Wait");
            setTimeout(() => {
                console.log("Data Fetched from DB..!")
                resolve("Order ID:-" + orderId);
            }, 2000);
        } else {
            const err = new Error("OrderId not created..!");
            reject(err);
        }
    });

    return pr;
}

function proceedToPayment(orderId) {
    const pr = new Promise((resolve, reject) => {
        //ValidateOrderID
        //Call DB with orderID
        if (!validateOrderId(orderId)) {
            err = new Error("Something went wrong while Payment.!");
            reject(err);
            return;
        }
        const price = "2590";
        if (price) {
            setTimeout(() => {
                console.log("API called for order id.");
                resolve("Payment Successful, Price:" + price);
            }, 2000);
        } else {
            const err = new Error("Proceed to payment failed.");
            reject(err);
        }
    });

    return pr;
}

function validateCart(cart) {
    // if (cart.length > 0) {
    //     return true
    // }
    return false;
}

function validateOrderId(orderID) {
    return true;
}