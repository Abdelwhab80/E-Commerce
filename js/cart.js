function addToCart(product) {
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || []

    cartItems.push(product)
  
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
  
  }
  
  
  document.addEventListener("click", function(event) {
    if (event.target.id === "addcart") {
      var productDiv = event.target.closest(".product")
      var productName = productDiv.querySelector(".hproduct").textContent
      var productPrice = productDiv.querySelector(".pricer").textContent
      var productImage = productDiv.querySelector(".imgproduct").src
  
      var product = {
        name: productName,
        price: productPrice,
        image: productImage,
      }
  
      addToCart(product)
    }
  })
  

  


  