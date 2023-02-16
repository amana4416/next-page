-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "user_library" (
	"id" SERIAL PRIMARY KEY,
	"book_title" VARCHAR (255) NOT NULL,
	"book_author" VARCHAR (255) NOT NULL,
	"book_cover" VARCHAR (500) NOT NULL,
	"book_description" TEXT NOT NULL,
	"bookshelf" INT NOT NULL,
	"user_id" INT REFERENCES "user"
);
-- bookshelf values:
	-- 1: currently reading
	-- 2: want to read
	-- 3: finished reading

CREATE TABLE "user_notes" (
	"id" SERIAL PRIMARY KEY,
	"book_id" INT REFERENCES "user_library",
	"note" TEXT NOT NULL,
	"user_id" INT REFERENCES "user"
);