let product1 = {
    product_id: 1,
    product_name: "DY Cloth Cap",
    inStock: true,
    color: ["Black", "White", "Navy"],
    price: 159
};
let product2 = {
    product_id: 2,
    product_name: "Denim Cap",
    inStock: false,
    color: ["Black", "Light Jeans", "Dark Jeans"],
    price: 199
};
let product3 = {
    product_id: 3,
    product_name: "Mesh Cap",
    inStock: true,
    color: ["Black", "White", "Two-Tone"],
    price: 219
};


let order1 = `ProductID: ccz${product1.product_id}\nName: ${product1.product_name}\nisStock?: ${product1.inStock}\nColor: ${product1.color[0]}\nPrice: ${product1.price} THB`;
let order2 = `ProductID: ccz${product2.product_id}\nName: ${product2.product_name}\nisStock?: ${product2.inStock}\nColor: ${product2.color[1]}\nPrice: ${product2.price} THB`;
let order3 = `ProductID: ccz${product3.product_id}\nName: ${product3.product_name}\nisStock?: ${product3.inStock}\nColor: ${product3.color[2]}\nPrice: ${product3.price} THB`;

let productList = [product1.product_name, product2.product_name, product3.product_name];

let cart = {product1, product2, product3};

console.log(`1. string for product name (Product1): ${product1.product_name}`);
console.log(`2. number for price (Product2): ${product2.price} THB`);
console.log(`3. boolean for inStock (Product3): ${product3.inStock} THB`);
console.log(`4. array for list of products: ${productList}`);
console.log(`5. object for one order: ${order1}`);
console.log(`6. array of objects for shopping cart: `);
console.log(cart);


// console.log(order1);
// console.log("###### Cart list ######");
// console.log(cart);