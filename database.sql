CREATE TABLE gallery (
	id SERIAL PRIMARY KEY,
	"path" VARCHAR(256) NOT NULL,
	"description" VARCHAR(512),
	"likes" INT DEFAULT 0
);

INSERT INTO gallery 
(path, description)
VALUES
('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.'),
('images/brushTeethCat.png', 'Photo of a cat that doesn''t brush its teeth.'),
('images/confusedCat.jpg', 'Photo of a cat with imposter syndrome.'),
('images/neckCat.png', 'Photo of a cat that''s a little taken aback.'),
('images/sleepyCat.png', 'Photo of a very tired cat.'),
('images/angryCat.png', 'Photo of a cat that has been angered.');

SELECT * FROM gallery;

