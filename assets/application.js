// Put your application javascript here
console.log("testing from VS Code application.js file.....")

// this function adds item(s) to cart without redirecting to the Cart page
function addToCart(form) {
    jQuery.post('/cart/add.js', $('form[action="/cart/add"]').serialize());
}
