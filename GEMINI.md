# CoolCapz E-commerce Project Context

This project is a development and design repository for **CoolCapz**, an e-commerce platform specializing in high-quality caps (DY Cloth, Denim, and Mesh). It covers the full lifecycle from business modeling to database design and initial JavaScript implementation.

## 🚀 Project Overview

- **Brand:** CoolCapz (Cool + Cap)
- **Core Products:** 3 Types of Caps (DY Cloth, Denim, Mesh) in minimal colors.
- **Goal:** To solve common market issues like choice overload, poor materials, and inconsistent shapes by providing a curated, high-quality selection through an automated e-commerce system.
- **Tech Stack:** 
  - **Database:** PostgreSQL (Schema defined for a restaurant/ingredient system - *Note: Possible domain mismatch found*).
  - **Logic:** Node.js (Basic data structures and console output).
  - **Design:** Excalidraw for diagrams (Use Case, ER, Business Model).

## 📁 Key Files & Directory Structure

- `01_my-ecommerce.md`: Business model, problem statement, and solution strategy.
- `05_product-backlog.md`: User stories for Customers and Admins.
- `06_bring-it-to-javascript.js`: JavaScript representation of products, orders, and carts.
- `postgresql/`: contains SQL scripts for database setup.
  - `create-table.sql`: Defines the core schema (Suppliers, Staff, Ingredients, MenuItems, Orders).
- `*.excalidraw`: Visual design diagrams for the business model, use cases, and ER diagrams.

## 🛠 Building and Running

### JavaScript
Currently, the JavaScript file is a standalone script for data demonstration.
- **Run:** `node 06_bring-it-to-javascript.js`

### Database
SQL scripts are intended for PostgreSQL.
- **Setup:** Execute `postgresql/create-table.sql` in a PostgreSQL environment.
- **Queries:** See `postgresql/query.sql` and `postgresql/exercise.sql` for example operations.

## ⚠️ Known Issues / TODOs
- **[Critical] Domain Mismatch:** The database schema (`postgresql/`) currently describes a **Restaurant/Food** system (Ingredients, MenuItems), while the business plan and JavaScript code describe a **Clothing/Cap** store.
- **TODO:** Align the PostgreSQL schema with the Cap E-commerce business model.
- **TODO:** Initialize a `package.json` if moving towards a full Node.js application.

## 📐 Development Conventions
- **Naming:** Follows `snake_case` for database columns and JavaScript object properties.
- **Documentation:** Numbered prefixes (01, 02...) indicate a sequential learning or development path.
