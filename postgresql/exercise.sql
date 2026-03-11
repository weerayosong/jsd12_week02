-- Ex1. Write a query to see a list of all employees working at Chrome & Burger.
SELECT * FROM staff

-- Ex2. Write a query to find all menu items that fall under the 'Burger' category.
-- SELECT * FROM menuitems where category = 'Burger'

-- Ex3. Write a query to show all menu items, but list them from the most expensive to the least expensive.
-- SELECT * FROM menuitems ORDER BY price desc

-- Ex4. Write a query to find the three cheapest items available on the menu.
-- SELECT name, price FROM menuitems ORDER BY price asc limit 3

-- Ex5. Write a query to find all the ingredients supplied by 'Patty''s Premium Meats'.
/*
SELECT Ingredients.name
FROM Ingredients
JOIN Suppliers ON Ingredients.supplier_id = Suppliers.supplier_id
WHERE Suppliers.name = 'Patty''s Premium Meats'
*/

-- Ex6. Write a query to see all orders processed by the staff member with staff_id = 1
-- SELECT * FROM Orders WHERE staff_id = 1

-- Ex7. Write a query to find out how many orders each staff member has processed. Show the staff member's first name, last name, and their total order count.
/*
SELECT
    s.first_name,
    s.last_name,
    COUNT(o.order_id) AS order_count
FROM Staff s
JOIN Orders o ON s.staff_id = o.staff_id
GROUP BY s.staff_id
ORDER BY order_count DESC
*/

-- Ex8. Write a query to calculate the total revenue for each day of sales.
/*
SELECT
    DATE(order_date) AS sales_day,
    SUM(total_price) AS daily_revenue
FROM Orders
GROUP BY sales_day
ORDER BY sales_day
*/

-- Ex9. Write a query to find out which menu item has been ordered the most.
/*
SELECT
    mi.name,
    SUM(oi.quantity) AS total_sold
FROM OrderItems oi
JOIN MenuItems mi ON oi.item_id = mi.item_id
GROUP BY mi.name
ORDER BY total_sold DESC
LIMIT 1
*/

-- Ex10. List All Ingredients for the 'Bacon Cheeseburger'
/*
SELECT
    i.name,
    ri.quantity_needed,
    i.unit
FROM RecipeItems ri
JOIN MenuItems mi ON ri.item_id = mi.item_id
JOIN Ingredients i ON ri.ingredient_id = i.ingredient_id
WHERE mi.name = 'Bacon Cheeseburger'
*/