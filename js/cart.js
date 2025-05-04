// let Products = [];

// async function getCartPro() {
//   let res = await fetch("https://ecommerce.routemisr.com/api/v1/cart", {
//     headers: {
//       "Content-Type": "application/json", // specify the content type
//       token: localStorage.getItem("userToken").slice(1, -1),
//     },
//   });
//   let resFinal = await res.json();
//   Products = resFinal.data.products;
//   console.log(Products);
//   disCartPro();
// }
// getCartPro();




// function disCartPro(filteredProducts = Products) {
//   let pro = ``;
//   for (let i = 0; i < filteredProducts.length; i++) {
//       let initialTotal = filteredProducts[i].price * 1;

//       pro += `
//         <div class="product">
//           <div class="pro-img">
//             <img src="${filteredProducts[i].product.imageCover}" alt="">
//           </div>
//           <div class="pro-name">
//             <h3>Name</h3>
//             <p>${filteredProducts[i].product.title}</p>
//           </div>
//           <div class="pro-quantity">
//             <h3>Quantity</h3>
//             <input type="number" value="1" min="1" 
//             onchange="updateTotal(${i})" id="quantity${i}">
//           </div>
//           <div class="pro-price">
//             <h3>Price</h3>
//             <p>$${filteredProducts[i].price}</p>
//           </div>
//           <div class="pro-total">
//             <h3>Total</h3>
//             <p id="totalPrice${i}">$${initialTotal}</p>
//           </div>
//           <div class="pro-delete">
//             <button onclick="deleteProduct(${i})">Delete</button>
//           </div>
//         </div>
//       `;
//   }
//   document.querySelector(".products").innerHTML = pro;

//   calculateTotal();
// }




// //search for products//
// function searchProducts() {
//   // Get the search term from the input
//   const searchTerm = document.getElementById("searchInput").value.toLowerCase();

//   // Filter products that include the search term in their title
//   const filteredProducts = Products.filter(product =>
//       product.product.title.toLowerCase().includes(searchTerm)
//   );

//   // Call disCartPro with the filtered products list
//   disCartPro(filteredProducts);
// }





// //delete products//
// async function deleteProduct(index) {
//   const productId = Products[index].product._id; // Assuming the product has an ID attribute like _id
  
//   // Send the DELETE request to the server
//   try {
//     let response = await fetch(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, {
//       method: 'DELETE',
//       headers: {
//         "Content-Type": "application/json",
//         token: localStorage.getItem("userToken").slice(1, -1),
//       },
//     });
//     const data = await response.json();
//     if (response.ok) {
//       // If the product is successfully deleted from the server, remove it from the local array
//       Products.splice(index, 1); // Remove the product from the Products array
//       disCartPro(); // Re-render the cart after deletion
//     } else {
//       console.error('Error deleting product:', data.message);
//     }
//   } catch (error) {
//     console.error('Error:', error);
//   }
// }




// // Function to update the total price when quantity changes
// function updateTotal(index) {
//   const quantity = document.getElementById(`quantity${index}`).value;
//   const price = Products[index].price;
  
//   // Ensure the quantity is a valid number and not less than 1
//   const validQuantity = Math.max(1, parseInt(quantity));

//   // Update the total price
//   const totalPrice = validQuantity * price;

//   // Update the total price in the UI
//   document.getElementById(`totalPrice${index}`).innerText = `$${totalPrice}`;

//   // Optionally, you can also update the product's quantity in the `Products` array
//   Products[index].quantity = validQuantity; // If you want to store the quantity in the Products array
// }
