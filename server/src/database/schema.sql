CREATE TABLE customers (
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY NOT NULL,
	first_name VARCHAR(30) NOT NULL,
	last_name VARCHAR(30) NOT NULL,
	email VARCHAR(40) NOT NULL,
	password VARCHAR(25) NOT NULL,
	phone VARCHAR(30) NOT NULL
);

CREATE TABLE products (
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY NOT NULL,
	title VARCHAR(100) NOT NULL,
	description TEXT,
	price DECIMAL(5, 2) NOT NULL CHECK(price > 0.00),
	category VARCHAR(20) NOT NULL
);

CREATE TABLE orders (
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY NOT NULL,
	customer_id INT REFERENCES customers(id) NOT NULL,
	total_price DECIMAL(9, 2) NOT NULL CHECK(total_price > 0.00) DEFAULT(0.00),
	status VARCHAR(20) NOT NULL,
	created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE orders_products (
	order_id INT REFERENCES orders(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
    NOT NULL,
	product_id INT REFERENCES products(id) NOT NULL,
	quantity INT NOT NULL CHECK(quantity > 0),
	CONSTRAINT order_item_pk
	PRIMARY KEY(order_id, product_id)
);
