/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */

let products = [];

/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/

let product1 =
  {
      productId: 1,
      name: "Carton of Cherries",
      price: 4.00,
      quantity: 0,
      image: "images/cherry.jpg"
  };
    products.push(product1);

let product2 = {
      productId: 2,
      name: "Bag of Oranges",
      price: 5.00,
      quantity: 0,
      image: "images/orange.jpg"
  };
    products.push(product2);

let product3 = {
      productId: 3,
      name: "Carton of Strawberries",
      price: 10.00,
      quantity: 0,
      image: "images/strawberry.jpg"
  };
    products.push(product3);


/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */

let cart = [ ];

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/

function addProductToCart(productId) {
  const product = products.find(prod => prod.productId === productId);
product.quantity += 1;
  
      if (!cart.includes(product)) {
          // If product is not in the cart, add it to the cart
          cart.push(product);
      }
  }

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/

function increaseQuantity(productId) {
  const product = products.find(prod => prod.productId === productId);

  if (product) {
      // Increase the quantity of the found product
      product.quantity++;
  }
}

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/

function decreaseQuantity(productId) {
  const cartProductIndex = cart.findIndex(item => item.productId === productId);

  if (cartProductIndex !== -1) {
      // Decrease the quantity of the product
      cart[cartProductIndex].quantity--;

      if (cart[cartProductIndex].quantity === 0) {
          // If quantity reaches 0, remove the product from the cart
          cart.splice(cartProductIndex, 1);
      }
  }
}

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/

function removeProductFromCart(productId) {
  const cartProductIndex = cart.findIndex(item => item.productId === productId);

  if (cartProductIndex !== -1) {
      // Set the quantity of the product to 0
      cart[cartProductIndex].quantity = 0;
      // Remove the product from the cart
      cart.splice(cartProductIndex, 1);
  }
}

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/

function cartTotal() {
  let total = 0;
  for (const item of cart) {
      total += item.price * item.quantity;
  }
  return total;
}

/* Create a function called emptyCart that empties the products from the cart */

function emptyCart() {
  cart = [0];
}

/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/
let totalPaid = 0;

function pay(amount) {
  //Calculate the total cost of products in cart
  const totalCost = cartTotal();
  //Add current paid amount to totalPaid
  totalPaid += amount;
  //calculate the remainiing balance after pay
  let remaining = totalPaid - totalCost;
  if (remaining >= 0) {
     // If the remaining balance is greater than or equal to 0,
     // it means the customer paid enough to cover the total cost

     // Update totalPaid to the total cost
     totalPaid = 0;

     emptyCart();
     // Empty cart now that payment went through
}
 return remaining;

}
/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/
module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay, 
  emptyCart,
  /* Uncomment the following line if completing the currency converter bonus */
  // currency
}
