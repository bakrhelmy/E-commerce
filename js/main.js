

let Products = [];
let eightPros = [];
async function getAllProducts() {
  let res = await fetch("https://ecommerce.routemisr.com/api/v1/products");
  let resFinal = await res.json();
  Products = resFinal.data;
  eightPros = Products.slice(0, 8);
  disProEight();
}
getAllProducts();

function disProEight() {
  let pro = ``;
  for (let i = 0; i < eightPros.length; i++) {
    pro += `
        
        <div class="product">
                            <div class="pro-img">
                                <img src="${eightPros[i].imageCover}" alt="">
                            </div>
                            <span>$${eightPros[i].price}</span>
                            <p>clothes</p>
                            <a href=""><h4>${eightPros[i].title}</h4></a>
                            <div class="addCart-btn">
                                <button class="addCart" onclick="addToCart('${eightPros[i].id}');">Add Cart</button>
                            </div>
                        </div>
    `;
  }
  document.querySelector(".products").innerHTML = pro;
}

async function addToCart(proId) {
  console.log(proId);
  let res = await fetch("https://ecommerce.routemisr.com/api/v1/cart", {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // specify the content type
      token: localStorage.getItem("userToken").slice(1, -1),
    },
    body: JSON.stringify({
      productId: proId,
    }),
  });
  let resFinal = await res.json();
  console.log(resFinal);
}

function searchProducts() {
  // Get the search term from the input
  const searchTerm = document.getElementById("searchInput").value.toLowerCase();

  // Filter products that include the search term in their title
  const filteredProducts = Products.filter(product =>
      product.product.title.toLowerCase().includes(searchTerm)
  );

  // Call disCartPro with the filtered products list
  disCartPro(filteredProducts);
}


function disCartPro(filteredProducts = Products) {
  let pro = ``;
  for (let i = 0; i < filteredProducts.length; i++) {
      let initialTotal = filteredProducts[i].price * 1;

      pro += `
        <div class="product">
          <div class="pro-img">
            <img src="${filteredProducts[i].product.imageCover}" alt="">
          </div>
          <div class="pro-name">
            <h3>Name</h3>
            <p>${filteredProducts[i].product.title}</p>
          </div>
          <div class="pro-quantity">
            <h3>Quantity</h3>
            <input type="number" value="1" min="1" 
            onchange="updateTotal(${i})" id="quantity${i}">
          </div>
          <div class="pro-price">
            <h3>Price</h3>
            <p>$${filteredProducts[i].price}</p>
          </div>
          <div class="pro-total">
            <h3>Total</h3>
            <p id="totalPrice${i}">$${initialTotal}</p>
          </div>
          <div class="pro-delete">
            <button onclick="deleteProduct(${i})">Delete</button>
          </div>
        </div>
      `;
  }
  document.querySelector(".products").innerHTML = pro;

  calculateTotal();
}
