/* Product Array */
const product = [
    {
        product_id: 1,
        product_name: "DY Cloth Cap",
        inStock: true,
        color: ["Black", "White", "Navy"],
        price: 159
    },
    {
        product_id: 2,
        product_name: "Denim Cap",
        inStock: false,
        color: ["Black", "Light Jeans", "Dark Jeans"],
        price: 199
    },
    {
        product_id: 3,
        product_name: "Mesh Cap",
        inStock: true,
        color: ["Black", "White", "Two-Tone"],
        price: 219
    }
];

/* Order Object */
const order = {
  order_id: 1,
  user_id: 1,
  total_amount: 378,
  status: "pending",
  shipping_address: "1/1 moo.1, Bang Phli, Samut Prakarn 10540"
};

/* Array of Order objects for a cart */
const cart = [
  {
    product_id: 1,
    product_name: "DY Cloth Cap",
    price: 159,
    stock_quantity: 23,
  },
  { product_id: 3,
    product_name: "Mesh Cap",
    price: 219,
    stock_quantity: 12 }
];

/* Output */
console.log(`1. String for product name (Product1): ${product[0].product_name}`);
console.log(`2. Number for price (Product2): ${product[1].price} THB`);
console.log(`3. Boolean for inStock (Product3): ${product[2].inStock}`);
console.log("4. Array for list of products: ", product);
console.log("5. object for one order: ", order);
console.log("6. array of objects for shopping cart: ", cart);