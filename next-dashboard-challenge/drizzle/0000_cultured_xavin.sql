CREATE TABLE `products` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`category` text,
	`name` text,
	`price` text,
	`description` text,
	`image` text,
	`rating` float,
	CONSTRAINT `products_id` PRIMARY KEY(`id`)
);
