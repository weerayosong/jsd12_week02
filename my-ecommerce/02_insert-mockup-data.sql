-- ==========================================
-- เพิ่ม Mockup Data สำหรับ PostgreSQL
-- ==========================================

-- 1. ข้อมูลหมวดหมู่หมวก 3 ประเภท
INSERT INTO category (category_id, category_name, cattegory_description) VALUES
(1, 'ผ้าดีวาย (DY)', 'ราคาคุ้มค่า สีสดไม่ซีดง่าย อยู่ทรงแข็งแรง'),
(2, 'ผ้ายีนส์ (Denim)', 'เท่ ทนทาน สไตล์ Street Style'),
(3, 'หมวกตาข่าย (Mesh)', 'ระบายอากาศดีเยี่ยม เบาสบาย สไตล์ Trucker');

-- 2. ข้อมูลลูกค้า (ต้องใส่ "" ครอบชื่อ user)
INSERT INTO "user" (user_id, username, email, phone, address) VALUES
(1, 'somchai_cool', 'somchai@email.com', '081-234-5678', '123/45 หมู่ 5 เขตจตุจักร กรุงเทพฯ 10900'),
(2, 'jane_fashion', 'jane.f@email.com', '089-876-5432', '99 ชั้น 2 อาคารสยามสแควร์ เขตปทุมวัน กรุงเทพฯ 10330');

-- 3. ข้อมูลสินค้าหมวก
INSERT INTO product (product_id, product_name, product_description, price, stock_quantity, category_id) VALUES
(101, 'CoolCapz DY Black', 'หมวกผ้าดีวายสีดำคลาสสิก', 150.00, 50, 1),
(102, 'CoolCapz Denim Dark', 'หมวกผ้ายีนส์ฟอกเข้ม', 350.00, 30, 2),
(103, 'CoolCapz Mesh White/Black', 'หมวกตาข่ายทูโทน ขาว-ดำ', 250.00, 25, 3);

-- 4. ข้อมูลออเดอร์ (ต้องใส่ "" ครอบชื่อ order)
INSERT INTO "order" (order_id, user_id, order_date, total_amount, status, shiping_address) VALUES
(5001, 1, '2026-03-12 10:30:00', 500.00, 'paid', '123/45 หมู่ 5 เขตจตุจักร กรุงเทพฯ 10900'),
(5002, 2, '2026-03-12 14:15:00', 350.00, 'pending', '99 ชั้น 2 อาคารสยามสแควร์ เขตปทุมวัน กรุงเทพฯ 10330');

-- 5. ข้อมูลรายละเอียดสินค้าในออเดอร์
INSERT INTO order_item (order_item_id, order_id, product_id, quantity, price_per_unit) VALUES
(9001, 5001, 101, 2, 150.00),
(9002, 5001, 103, 1, 200.00),
(9003, 5002, 102, 1, 350.00);

-- 6. ข้อมูลการชำระเงิน
INSERT INTO payment (payment_id, order_id, payment_method, payment_date, amount, transaction_id) VALUES
(7001, 5001, 'Mobile Banking', '2026-03-12 10:35:00', 500.00, 'TXN99887766');