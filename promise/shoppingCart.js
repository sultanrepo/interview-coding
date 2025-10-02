// createOrder, 
// proceedToPayment, 
// showOrderSummary, 
// updateWallet

const cart = [
    {
        productID: "5484",
        product_name: "Iphone",
        price: "149999"
    },
    {
        productID: "8596",
        product_name: "MACBook Pro",
        price: "189999"
    },
    {
        productID: "6974",
        product_name: "Marq Monitor 27 INCH",
        price: "7551"
    }
];

const wallet = 599999;

createOrder(cart)
    .then((orderId) => {
        console.log(orderId);
        return proceedToPayment(orderId);
    })
    .then((paymentInfo) => {
        console.log(paymentInfo);
        return showOrderSummary(cart);
    })
    .then((orderSummaryDetails) => {
        console.log(orderSummaryDetails);
        return updateWallet(wallet);
    })
    .then((upWallet) => {
        console.log(upWallet);
    })
    .catch((err) => {
        console.log(err.message);
    })
    .finally(() => {
        console.log("Promise Executed.");
    })



//Create Order
function createOrder(cart) {
    const pr = new Promise((resolve, reject) => {
        //Validate Cart
        //create Order DB Call
        //create order id
        let err;
        if (!validateCreateOrder(cart)) {
            err = new Error("Cart is not valid");
            reject(err);
            return;
        }
        const orderId = "ZAM5487548"; //For now the dummy data is there. This is the api call where we can get the order id
        if (orderId) {
            setTimeout(() => {
                console.log("API Called for Order ID.");
                resolve("Order ID:" + orderId);
            }, 2000);
        } else {
            err = new Error("API Failed");
            reject(err);
        }
    });

    return pr;
}

function proceedToPayment(orderId) {
    const pr = new Promise((resolve, reject) => {
        //Validate Proceed to payment
        //Proceed To Payment
        let err;
        if (!validateProceedToPayment) {
            err = new Error("Payment Failed");
            reject(err);
            return;
        }
        const payment = {
            status: 200,
            orderId: orderId,
            message: "Payment Successful"
        };
        if (payment) {
            setTimeout(() => {
                console.log("API called for Payment");
                resolve({
                    orderId: payment.orderId,
                    message: payment.message
                });
            }, 3000);
        } else {
            err = new Error("Payment API Failed");
            reject(err);
        }
    });
    return pr;
}

function showOrderSummary(cart) {
    const pr = new Promise((resolve, reject) => {
        //validate orderID
        //show order summary
        let err;
        if (!validateOrderSummary) {
            err = new Error("Show order Summary Error");
            reject(err);
            return;
        }
        const orderSummary = cart
        if (orderSummary) {
            setTimeout(() => {
                console.log("Order Summary API Called.");
                resolve(orderSummary);
            }, 4000);
        } else {
            err = new Error("Order Summary API failed.");
        }
    });

    return pr;
}

function updateWallet(wallet) {
    const pr = new Promise((resolve, reject) => {
        //Validate Wallet
        //update wallet
        let err;
        if (!validateWallet) {
            err = new Error("Wallet is not valid.");
            reject(err);
            return;
        }
        const updatedWallet = 120000;
        if (updatedWallet) {
            setTimeout(() => {
                console.log("Wallet API Called.");
                resolve(updatedWallet);
            }, 5000);
        } else {
            err = new Error("Wallet API Failed");
            reject(err);
        }
    });

    return pr;
}


function validateCreateOrder(cart) {
    if (cart.length > 0) {
        return true;
    } else {
        return false;
    }
}

validateProceedToPayment = () => true;

validateOrderSummary = () => true

validateWallet = () => true;