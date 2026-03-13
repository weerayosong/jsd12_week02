# Chrome Burger MongoDB Project Summary

This directory contains MongoDB scripts for setting up the `chrome_burger` database. The scripts initialize collections with mock data and demonstrate basic queries and aggregations.

## Database: `chrome_burger`

### 1. Suppliers (`01_suppliers.mongodb.js`)
Manages information about the vendors providing ingredients.
- **Fields:** `name`, `contact_person`, `phone_number`.
- **Sample Data:** Patty's Premium Meats, The Bun Barn, Freshest Farm Produce.

### 2. Staff (`02_staff.mongodb.js`)
Stores employee information and their roles within the restaurant.
- **Fields:** `first_name`, `last_name`, `role` (e.g., Cashier, Cook).
- **Sample Data:** Jane Doe, John Smith, etc.

### 3. Ingredients (`03_ingredients.mongodb.js`)
Tracks inventory items and links them to suppliers.
- **Fields:** `name`, `stock_level`, `unit`, `supplier_id` (Reference to `suppliers`).
- **Features:** Demonstrates `$lookup` to join ingredient data with supplier details.

### 4. Menu Items (`04_menu_items.mongodb.js`)
Defines the products available for purchase, including their recipes.
- **Fields:** `name`, `description`, `price`, `category`, `recipe` (Array of embedded objects containing `ingredient_id` and `quantity_needed`).
- **Sample Data:** Classic Burger, Cheeseburger.

### 5. Orders (`05_orders.mongodb.js`)
Records customer transactions.
- **Fields:** `order_date`, `total_price`, `staff_id` (Reference to `staff`), `items` (Array of embedded, denormalized menu items including `name` and `price`).
- **Features:** Uses `$lookup` to associate orders with the staff member who processed them.

## Usage
These scripts are designed to be run in a MongoDB environment (like MongoDB Compass or the VS Code MongoDB extension). Each script follows a pattern of:
1. Selecting the `chrome_burger` database.
2. Clearing existing data in the specific collection.
3. Inserting fresh mock data.
4. Executing a sample query or aggregation.
