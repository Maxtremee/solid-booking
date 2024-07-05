CREATE TABLE `reservation` (
	`user_id` text NOT NULL,
	`accomodation_id` text NOT NULL,
	`check_in` text NOT NULL,
	`check_out` text NOT NULL,
	`id` text PRIMARY KEY NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`accomodation_id`) REFERENCES `accomodation`(`id`) ON UPDATE no action ON DELETE no action
);
