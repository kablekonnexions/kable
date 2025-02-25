// Fetch Merchant ID securely from backend
fetch("/config")
    .then(response => response.json())
    .then(data => {
        if (data.merchantId) {
            document.getElementById("paypal-sdk").setAttribute(
                "src", `https://www.paypalobjects.com/ncp/cart/cart.js?merchant_id=${data.merchantId}`
            );

            cartPaypal.AddToCart({ id: "pp-add-to-cart" });
            cartPaypal.Cart({ id: "pp-view-cart" });
        } else {
            console.error("Merchant ID not found");
        }
    })
    .catch(error => console.error("Error loading PayPal script:", error));
