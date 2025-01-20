CREATE TABLE "players" (
	"id" SERIAL PRIMARY KEY,
	"first_name" TEXT,
	"last_name" TEXT,
	"playing_hand" TEXT,
	"raquet_brand" TEXT);
	
CREATE TABLE "player_stats" (
	"id" SERIAL PRIMARY KEY,
	"player" VARCHAR(50),
	"opponent" VARCHAR(50),
	"date" DATE,
	"points" NUMERIC,
	"ace" NUMERIC,
	"fh_winners" NUMERIC,
	"bh_winners" NUMERIC,
	"double_faults" NUMERIC,
	"fh_error" NUMERIC,
	"bh_error" NUMERIC);
		
	
SELECT * FROM players;

INSERT INTO players ("first_name","last_name","playing_hand","raquet_brand")
VALUES ('Namoi','Osaka','Right','Yonnex');

INSERT INTO player_stats ("player", "opponent", "date", "points", "ace", "fh_winners", "bh_winners", "double_faults", "fh_error",
"bh_error")
VALUES ('Gregg', 'Iga', '2025-01-19', 4, 4, 4, 4, 4, 4, 3);

SELECT * FROM player_stats ORDER BY id;