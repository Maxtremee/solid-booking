ALTER TABLE user ADD `email` text NOT NULL;--> statement-breakpoint
ALTER TABLE user ADD `avatar` text;--> statement-breakpoint
CREATE UNIQUE INDEX `user_email_unique` ON `user` (`email`);