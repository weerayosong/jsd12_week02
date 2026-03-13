-- 1. สร้างตาราง CATEGORY (ต้องสร้างก่อนเพราะ PRODUCT ต้องใช้อ้างอิง)
CREATE TABLE category (
    category_id INT PRIMARY KEY,
    category_name VARCHAR(100),
    cattegory_description TEXT
);

-- 2. สร้างตาราง USER (ต้องใส่ "" คลุมชื่อตาราง)
CREATE TABLE "user" (
    user_id INT PRIMARY KEY,
    username VARCHAR(50),
    email VARCHAR(100),
    phone VARCHAR(20),
    address TEXT
);

-- 3. สร้างตาราง PRODUCT
CREATE TABLE product (
    product_id INT PRIMARY KEY,
    product_name VARCHAR(255),
    product_description TEXT,
    price DECIMAL(10, 2),
    stock_quantity INT,
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES category(category_id)
);

-- 4. สร้างตาราง ORDER (ต้องใส่ "" คลุมชื่อตาราง และเปลี่ยน DATETIME เป็น TIMESTAMP)
CREATE TABLE "order" (
    order_id INT PRIMARY KEY,
    user_id INT,
    order_date TIMESTAMP,
    total_amount DECIMAL(10, 2),
    status VARCHAR(50),
    shiping_address TEXT,
    FOREIGN KEY (user_id) REFERENCES "user"(user_id)
);

-- 5. สร้างตาราง ORDER_ITEM
CREATE TABLE order_item (
    order_item_id INT PRIMARY KEY,
    order_id INT,
    product_id INT,
    quantity INT,
    price_per_unit DECIMAL(10, 2),
    FOREIGN KEY (order_id) REFERENCES "order"(order_id),
    FOREIGN KEY (product_id) REFERENCES product(product_id)
);

-- 6. สร้างตาราง PAYMENT
CREATE TABLE payment (
    payment_id INT PRIMARY KEY,
    order_id INT,
    payment_method VARCHAR(50),
    payment_date TIMESTAMP,
    amount DECIMAL(10, 2),
    transaction_id VARCHAR(100),
    FOREIGN KEY (order_id) REFERENCES "order"(order_id)
);