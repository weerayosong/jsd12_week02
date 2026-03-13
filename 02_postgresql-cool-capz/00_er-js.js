const coolCapzData = {
  // 1. ตาราง CATEGORY
  category: [
    {
      category_id: 1,
      category_name: "ผ้าดีวาย (DY)",
      cattegory_description: "ราคาคุ้มค่า สีสดไม่ซีดง่าย อยู่ทรงแข็งแรง"
    },
    {
      category_id: 2,
      category_name: "ผ้ายีนส์ (Denim)",
      cattegory_description: "เท่ ทนทาน สไตล์ Street Style"
    },
    {
      category_id: 3,
      category_name: "หมวกตาข่าย (Mesh)",
      cattegory_description: "ระบายอากาศดีเยี่ยม เบาสบาย สไตล์ Trucker"
    }
  ],

  // 2. ตาราง PRODUCT
  product: [
    {
      product_id: 101,
      product_name: "CoolCapz DY Black",
      product_description: "หมวกผ้าดีวายสีดำคลาสสิก",
      price: 150.00,
      stock_quantity: 50,
      category_id: 1
    },
    {
      product_id: 102,
      product_name: "CoolCapz Denim Dark",
      product_description: "หมวกผ้ายีนส์ฟอกเข้ม",
      price: 350.00,
      stock_quantity: 30,
      category_id: 2
    },
    {
      product_id: 103,
      product_name: "CoolCapz Mesh White/Black",
      product_description: "หมวกตาข่ายทูโทน ขาว-ดำ",
      price: 250.00,
      stock_quantity: 25,
      category_id: 3
    }
  ],

  // 3. ตาราง USER
  user: [
    {
      user_id: 1,
      username: "somchai_cool",
      email: "somchai@email.com",
      phone: "081-234-5678",
      address: "123/45 หมู่ 5 เขตจตุจักร กรุงเทพฯ 10900"
    },
    {
      user_id: 2,
      username: "jane_fashion",
      email: "jane.f@email.com",
      phone: "089-876-5432",
      address: "99 ชั้น 2 อาคารสยามสแควร์ เขตปทุมวัน กรุงเทพฯ 10330"
    }
  ],

  // 4. ตาราง ORDER
  order: [
    {
      order_id: 5001,
      user_id: 1,
      order_date: "2026-03-12T10:30:00Z",
      total_amount: 500.00,
      status: "paid",
      shiping_address: "123/45 หมู่ 5 เขตจตุจักร กรุงเทพฯ 10900"
    },
    {
      order_id: 5002,
      user_id: 2,
      order_date: "2026-03-12T14:15:00Z",
      total_amount: 350.00,
      status: "pending",
      shiping_address: "99 ชั้น 2 อาคารสยามสแควร์ เขตปทุมวัน กรุงเทพฯ 10330"
    }
  ],

  // 5. ตาราง ORDER_ITEM (เชื่อมโยง Order กับ Product)
  order_item: [
    {
      order_item_id: 9001,
      order_id: 5001,
      product_id: 101,
      quantity: 2,
      price_per_unit: 150.00
    },
    {
      order_item_id: 9002,
      order_id: 5001,
      product_id: 103,
      quantity: 1,
      price_per_unit: 200.00 // ราคาโปรโมชั่น ณ ขณะซื้อ
    },
    {
      order_item_id: 9003,
      order_id: 5002,
      product_id: 102,
      quantity: 1,
      price_per_unit: 350.00
    }
  ],

  // 6. ตาราง PAYMENT
  payment: [
    {
      payment_id: 7001,
      order_id: 5001,
      payment_method: "Mobile Banking",
      payment_date: "2026-03-12T10:35:00Z",
      amount: 500.00,
      transaction_id: "TXN99887766"
    }
  ]
};

console.log("** TestLogData **",coolCapzData);
