document.getElementById("MOfname").onblur = validationfullname;
document.getElementById("MOfname").setAttribute("required", "");
//fullname validation
function validationfullname(MOfname) {
    fnameCheck1 = new RegExp(/^[a-zA-Z]{3,}. [a-zA-Z]{3,}/g);
    if (!(document.getElementById("MOfname").value.match(fnameCheck1))) {
        document.getElementById("MOfname").style.backgroundColor = "#ff00001c"
        document.getElementById("MOfname").style.border = "1px solid red"

        document.getElementById("MOfnameSpan").style.display = "inline"
    }
    else {
        document.getElementById("MOfname").style.backgroundColor = ""
        document.getElementById("MOfnameSpan").textContent = ""
        document.getElementById("MOfnameSpan").style.display = "none"
    }
};

document.getElementById("MOcitySelect").setAttribute("required", "");
document.getElementById("MOfloor").setAttribute("required", "");
document.getElementById("MOapart").setAttribute("required", "");
document.getElementById("MOaddress").setAttribute("required", "");


document.getElementById("MOaddress").onblur = validationAdress;

//Address validation
function validationAdress(MOaddress) {
    fnameCheck2 = new RegExp(/^[0-9]{0,4} (st.) [a-zA-Z]{2,}/g);
    if (!(document.getElementById("MOaddress").value.match(fnameCheck2))) {
        document.getElementById("MOaddress").style.backgroundColor = "#ff00001c"
        document.getElementById("MOaddress").style.border = "1px solid red"

        document.getElementById("MOaddressSpan").style.display = "inline"
    }
    else {
        document.getElementById("MOaddress").style.backgroundColor = ""
        document.getElementById("MOaddressSpan").textContent = ""
        document.getElementById("MOaddressSpan").style.display = "none"
    }
};


document.getElementById("MOapart").onblur = validationApart;

//apartment validation
function validationApart(MOapart) {
    fnameCheck3 = new RegExp(/^[0-9]{1,4}$/g);
    if (!(document.getElementById("MOapart").value.match(fnameCheck3))) {
        document.getElementById("MOapart").style.backgroundColor = "#ff00001c"
        document.getElementById("MOapart").style.border = "1px solid red"

        document.getElementById("MOapartSpan").style.display = "inline"
    }
    else {
        document.getElementById("MOapart").style.backgroundColor = ""
        document.getElementById("MOapartSpan").textContent = ""
        document.getElementById("MOapartSpan").style.display = "none"
    }
};


document.getElementById("MOfloor").onblur = validationFloor;

//floor validation
function validationFloor(MOfloor) {
    fnameCheck4 = new RegExp(/^[0-9]{1,3}$/g);
    if (!(document.getElementById("MOfloor").value.match(fnameCheck4))) {
        document.getElementById("MOfloor").style.backgroundColor = "#ff00001c"
        document.getElementById("MOfloor").style.border = "1px solid red"

        document.getElementById("MOfloorSpan").style.display = "inline"
    }
    else {
        document.getElementById("MOfloor").style.backgroundColor = ""
        document.getElementById("MOfloorSpan").textContent = ""
        document.getElementById("MOfloorSpan").style.display = "none"
    }
};


document.getElementById("MOzip").onblur = validationZIP;

//ZIP code validation
function validationZIP(MOzip) {
    fnameCheck5 = new RegExp(/^[0-9]{5}/g);
    if (!(document.getElementById("MOzip").value.match(fnameCheck5))) {
        document.getElementById("MOzip").style.backgroundColor = "#ff00001c"
        document.getElementById("MOzip").style.border = "1px solid red"

        document.getElementById("MOzipSpan").style.display = "inline"
    }
    else {
        document.getElementById("MOzip").style.backgroundColor = ""
        document.getElementById("MOzipSpan").textContent = ""
        document.getElementById("MOzipSpan").style.display = "none"
    }
};

//close checkout page
document.getElementById("MOclose").onclick = function () {
    document.getElementById("checkoutPage").style.display = "none"
};


document.getElementById("MOcheckoutSubmit").onclick = validationSubmit;

//submit validation
function validationSubmit(MOcheckoutSubmit) {
    if ((!(document.getElementById("MOfname").value.match(fnameCheck1))) || (!(document.getElementById("MOaddress").value.match(fnameCheck2))) || (!(document.getElementById("MOapart").value.match(fnameCheck3))) || (!(document.getElementById("MOfloor").value.match(fnameCheck4))) || (!(document.getElementById("MOzip").value.match(fnameCheck5)))) {
        document.getElementById("MOcheckoutSubmit").type = "button";
    }
    else if (((document.getElementById("MOfname").value.match(fnameCheck1))) && ((document.getElementById("MOaddress").value.match(fnameCheck2))) && ((document.getElementById("MOapart").value.match(fnameCheck3))) && ((document.getElementById("MOfloor").value.match(fnameCheck4))) && ((document.getElementById("MOzip").value.match(fnameCheck5)))) {
        document.getElementById("MOcheckoutSubmit").value = "Confirmed";
        document.getElementById("MOcheckoutSubmit").style.backgroundColor = "green";
        document.getElementById("MOcheckoutSubmit").style.color = "white";
        document.getElementById("MOcheckoutSubmit").type = "submit";
        localStorage.removeItem("cartItems")
    }
};



var arrayString = localStorage.getItem('cartItems');
var cartItems = JSON.parse(arrayString)

// console.log(cartItems[0].name)
window.onload = checkArray

function checkArray() {
    if (cartItems.length === 0) {
        document.getElementById("contentCart").style.display = "block"
        document.getElementById("cart").style.display = "none"
    }
    else if (cartItems.length > 0) {
        document.getElementById("contentCart").style.display = "none"
        document.getElementById("cart").style.display = "block"
    }
}



function displayCartItems() {
    var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    var cartList = document.getElementById("cart-items");
    var cartTotal = document.getElementById("cart-total");
    var cartConfirm = document.getElementById("cart-confirm");

    cartList.innerHTML = "";

    // Loop through each item in the cart
    cartItems.forEach(item => {
        // Create HTML elements for the item
        var listItem = document.createElement("li");
        var itemImage = document.createElement("img");
        var itemInfo = document.createElement("div");
        var itemName = document.createElement("span");
        var itemPrice = document.createElement("span");
        var itemActions = document.createElement("div");
        var itemQuantity = document.createElement("input");
        var itemTotal = document.createElement("span");
        var deleteButton = document.createElement("button");

        // Set attributes and content for the HTML elements
        itemImage.src = item.image;
        itemName.textContent = item.name;
        itemPrice.textContent = item.price;
        itemQuantity.type = "number";
        itemQuantity.min = "1";
        itemQuantity.value = "1";
        itemTotal.textContent = item.price;
        deleteButton.textContent = "X";

        // Add classes to the HTML elements
        itemInfo.classList.add("item-info");
        itemName.classList.add("item-name");
        itemPrice.classList.add("item-price");
        itemActions.classList.add("item-actions");
        itemQuantity.classList.add("item-quantity");
        itemTotal.classList.add("item-total");

        // Add event listeners for the quantity input and delete button
        itemQuantity.addEventListener("input", () => {
            var quantityInput = itemQuantity;
            var quantity = parseInt(quantityInput.value);
            var price = parseInt(item.price.replace("EGP", "").trim());
            var totalPrice = quantity * price;
            itemTotal.textContent = `EGP ${totalPrice.toFixed(2)}`
            updateCartTotal();
            console.log(totalPrice);
        });

        deleteButton.addEventListener("click", () => {
            var index = cartItems.indexOf(item);
            cartItems.splice(index, 1);
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
            location.reload()
            displayCartItems();
            updateCartTotal();
        });

        // Append the HTML elements to the list item
        itemInfo.appendChild(itemName);
        itemInfo.appendChild(itemPrice);
        itemActions.appendChild(itemQuantity);
        itemActions.appendChild(itemTotal);
        itemActions.appendChild(deleteButton);
        listItem.appendChild(itemImage);
        listItem.appendChild(itemInfo);
        listItem.appendChild(itemActions);

        // Append the list item to the cart list
        cartList.appendChild(listItem);
    });

    updateCartTotal();
}

function updateCartTotal() {
    var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    var cartTotal = document.getElementById("cart-total");
    let total = 0;

    // Loop through each item in the cart and add up the total price
    cartItems.forEach(item => {
        var quantity = parseInt(item.quantity) || 1;
        
        var price = parseInt(item.price.replace("EGP", "").trim());
        var totalPrice = quantity * price;
        total += totalPrice;
        cartTotal.textContent = `Total: EGP ${total.toFixed(2)}`;
    });

}
displayCartItems();

//checkout button 
document.getElementById("checkoutBtn").onclick = function () {
    document.getElementById("checkoutPage").style.display = "flex"
};


function checkLocalStorage() {
    var user = localStorage.getItem('users');
    var btn = document.getElementById('checkoutBtn')
    if (user) {
        
        console.log(user);
    } else {
        btn.addEventListener('click', function(){
            
                var url = 'register.html'
    
              window.open(url,"_self");
           
            document.getElementById('checkoutPage').style.display= 'none'
        })
        
        
        
    }
}
checkLocalStorage()