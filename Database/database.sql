create DATABASE ng_games_db;
USE ng_games_db;

CREATE TABLE games
(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(180),
    description VARCHAR(255),
    image VARCHAR(200),
    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

describe games;

use ng_games_db
SELECT * FROM games

