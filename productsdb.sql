CREATE DATABASE bamazon_db;

USE bamazon_db;

SELECT * FROM products WHERE id = 12;

UPDATE products SET stock = 5;

CREATE TABLE products (
  id INT AUTO_INCREMENT,
  product_name VARCHAR(50) NOT NULL, 
  department_name VARCHAR(50) NOT NULL, 
  price INT(4),
  stock INT(4),
  PRIMARY KEY (id)
  );
  
   SELECT *FROM products;
  
  INSERT INTO products (product_name, department_name, price, stock) 
  VALUES 
  ("Apple Airpods", "Electronics", 299, 5);
  
 INSERT INTO products (product_name, department_name, price, stock) 
  VALUES 
  
  ("bluetooth earpods", "Electronics", 105, 5),
  ("Macbook pro", "Electronics", 1050, 3),
  ("Hanging Circular Mirror", "Decoration", 100, 8),
  ("Tall Flower base", "Decoration", 53, 5),
  ("tableware set", "Decoration", 89, 5) , 
  ("Circular table lamp", "Decoration", 150, 2), 
  ("Marmol lazysusan", "Decoration", 200, 6),
  ("Prismacolor Premier", "Crafts", 20, 10),
  ("Glue Sticks", "Crafts", 9,10),
  ("Washi tape", "Crafts", 12, 10),
  ( "Series 400 Sketch Pads", "Crafts", 26, 8),
  ("Cutting mat", "Crafts", 13, 10);