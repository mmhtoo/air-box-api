CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"username" varchar(50) NOT NULL,
	"email" varchar(50) NOT NULL,
	"password" varchar(255) NOT NULL,
	"createdAt" timestamp DEFAULT now(),
	"updatedAt" timestamp,
	"isDelete" boolean DEFAULT false,
	"deletedAt" timestamp,
	"profileImageUrl" varchar(300),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
