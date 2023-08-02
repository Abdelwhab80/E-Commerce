// search
function searchProducts(search) {
  var allProducts = document.querySelectorAll('.product')
  allProducts.forEach(product => {
    var productName = product.querySelector('.hproduct').textContent.toLowerCase()
    if (productName.includes(search.toLowerCase())) {
      product.style.display = 'block'
      if (productName.lastIndexOf("p")) {
        document.getElementById('sectionsearch1').scrollIntoView({ behavior: "smooth"})
      }
      // else if(productName.lastIndexOf("j")){
      //   document.getElementById('section2-products').scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });

      // }else if(productName.lastIndexOf("q")){
      //   document.getElementById('section3-products').scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });

      // }
      
      
    } else {
      product.style.display = 'none'
    }
  });
}

var searchForm = document.querySelector('form')
var searchInput = searchForm.querySelector('input')

searchForm.addEventListener('submit', function (e) {
  e.preventDefault()
  var search = searchInput.value
  searchProducts(search)
});

// search




function createProductElement(product) {
    var productDiv = document.createElement("div")
    productDiv.classList.add("product")

    var productHead = document.createElement("div")
    productHead.classList.add("head")
  
    var productName = document.createElement("h3")
    productName.classList.add("hproduct")
    productName.textContent = product.name
  
    var productPrice = document.createElement("span")
    productPrice.classList.add("price")
    productPrice.textContent = "Price: "
  
    var productPriceValue = document.createElement("span")
    productPriceValue.classList.add("pricer")
    productPriceValue.textContent = `EGP ${product.price}`
    var productAdd = document.createElement("p")
    productAdd.classList.add("pricer2")
    productAdd.innerHTML = `Item Added <img class="pricer3" src="./photos/checked.png" >`
  
    productPrice.appendChild(productPriceValue)
    productHead.appendChild(productName)
    productHead.appendChild(productPrice)
  
    var productImage = document.createElement("img")
    productImage.classList.add("imgproduct")
    productImage.width = 200
    productImage.height = 200
    productImage.src = product.image
    productImage.alt = product.name
  
    var productFoot = document.createElement("div")
    productFoot.classList.add("foot")

    var addToCartLink = document.createElement("a")
    addToCartLink.id = "addcart"
  
    addToCartLink.innerHTML = '<i class="fa-solid fa-cart-shopping"></i> Add To Cart'
  
    productFoot.appendChild(addToCartLink)
    productFoot.appendChild(productAdd)
  
    productDiv.appendChild(productHead)
    productDiv.appendChild(productImage)
    productDiv.appendChild(productFoot)
  
    return productDiv
  }
  
  function displayProducts(sectionId, productsData) {
    var productsContainer = document.getElementById(sectionId)
    productsData.forEach(product => {
      var productDiv = createProductElement(product)
      productsContainer.appendChild(productDiv)
    })
  }
  
  fetch("products.json")
    .then(response => response.json())
    .then(data => {
      displayProducts("section1-products", data.section1)
      displayProducts("section2-products", data.section2)
      displayProducts("section3-products", data.section3)
      displayProducts("section4-products", data.section4)
      displayProducts("section5-products", data.section5)
    });
  
