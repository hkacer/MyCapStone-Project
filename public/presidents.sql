

-- CREATE TABLE presidents (
--   id INTEGER PRIMARY KEY,
--   name TEXT NOT NULL,
--   party TEXT NOT NULL,
--   term_start DATE NOT NULL,
--   term_end DATE NOT NULL,
--   predecessor INTEGER,
--   successor INTEGER,
--   image_url TEXT NOT NULL,
--   FOREIGN KEY (predecessor) REFERENCES presidents(id),
--   FOREIGN KEY (successor) REFERENCES presidents(id)
-- );

  CREATE TABLE ratings (
        id INTEGER PRIMARY KEY,
        president_id INTEGER NOT NULL,
        rater_name TEXT NOT NULL,
        rating INTEGER NOT NULL,
        FOREIGN KEY (president_id) REFERENCES presidents(id)
      );

      create table vote_users(
        vote_user_id serial primary key,
        firstname varchar DEFAULT '',
       lastname varchar DEFAULT '';
        email varchar not null,
        passhash varchar(500) not null 
    );
SELECT c.*, u.* FROM comments c LEFT JOIN vote_users u ON c.vote_user_id = u.vote_user_id;

    SELECT ratings.*, presidents.name
    FROM ratings
    JOIN presidents ON ratings.president_id = presidents.id;

CREATE TABLE comments(
       commentsId SERIAL PRIMARY KEY,
       firstName VARCHAR(20) NOT NULL,
       presidentsId INTEGER REFERENCES presidents(id),
       comment TEXT NOT NULL,
       rating INTEGER 
       vote_user_id INTEGER REFERENCES vote_users(vote_user_id) NOT NULL
);


 CREATE TABLE presidents (
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        party TEXT NOT NULL,
        term_start DATE NOT NULL,
        term_end DATE NOT NULL,
        predecessor INTEGER,
        successor INTEGER,
        rating INTEGER,
        image_url TEXT NOT NULL
        
        );
       
        
        INSERT INTO presidents (id, name, party, term_start, term_end, predecessor, successor,image_url,rating)
        VALUES (1, 'George Washington', 'Independent', '1789-04-30', '1797-03-04', NULL, 2,'./images/1st.jfif',5),
               (2, 'John Adams', 'Federalist', '1797-03-04', '1801-03-04', 1, 3,'./images/2nd.jfif',5),
               (3, 'Thomas Jefferson', 'Democratic-Republican', '1801-03-04', '1809-03-04', 2, 4,'./images/3rd.jfif',5),
               (4, 'James Madison', 'Democratic-Republican', '1809-03-04', '1817-03-04', 3, 5,'./images/4th.jfif',5),
               (5, 'James Monroe', 'Democratic-Republican', '1817-03-04', '1825-03-04', 4, 6,'./images/5th.jfif',5),
               (6, 'John Quincy Adams', 'Democratic-Republican/National Republican', '1825-03-04', '1829-03-04', 5, 7,'./images/6th.jfif',5),
               (7, 'Andrew Jackson', 'Democratic', '1829-03-04', '1837-03-04', 6, 8,'./images/7th.jfif',5),
               (8, 'Martin Van Buren', 'Democratic', '1837-03-04', '1841-03-04', 7, 9,'./images/8th.jfif',5),
               (9, 'William Henry Harrison', 'Whig', '1841-03-04', '1841-04-04', 8, 10,'./images/9th.jfif',5),
               (10, 'John Tyler', 'Democratic/Whig', '1841-04-04', '1845-03-04', 9, 11,'./images/10th.jfif',5),
                (11, 'James K. Polk', 'Democratic', '1845-03-04', '1849-03-04', 10, 12,'./images/11.jfif',5),
               (12, 'Zachary Taylor', 'Whig', '1849-03-04', '1850-07-09', 11, 13,'./images/12.jfif',5),
               (13, 'Millard Fillmore', 'Whig/American', '1850-07-09', '1853-03-04', 12, 14,'./images/13.jfif',5),
               (14, 'Franklin Pierce', 'Democratic', '1853-03-04', '1857-03-04', 13, 15,'./images/14.jfif',5),
               (15, 'James Buchanan', 'Democratic', '1857-03-04', '1861-03-04', 14, 16,'./images/15.jfif',5),
               (16, 'Abraham Lincoln', 'Republican', '1861-03-04', '1865-04-15', 15, 17,'./images/16.jfif',5),
               (17, 'Andrew Johnson', 'National Union', '1865-04-15', '1869-03-04', 16, 18,'./images/17.jfif',5),
               (18, 'Ulysses S. Grant', 'Republican', '1869-03-04', '1877-03-04', 17, 19,'./images/18.jfif',5),
               (19, 'Rutherford B. Hayes', 'Republican', '1877-03-04', '1881-03-04', 18, 20,'./images/19.jfif',5),
               (20, 'James A. Garfield', 'Republican', '1881-03-04', '1881-09-19', 19, 21,'./images/20.jfif',5),
                (21, 'Chester A. Arthur', 'Republican', '1881-09-19', '1885-03-04', 20, 22,'./images/21.jfif',5),
               (22, 'Grover Cleveland', 'Democratic', '1885-03-04', '1889-03-04', 21, 23,'./images/22.jfif',5),
               (23, 'Benjamin Harrison', 'Republican', '1889-03-04', '1893-03-04', 22, 24,'./images/23.jfif',5),
               (24, 'Grover Cleveland', 'Democratic', '1893-03-04', '1897-03-04', 23, 25,'./images/24.jfif',5),
               (25, 'William McKinley', 'Republican', '1897-03-04', '1901-09-14', 24, 26,'./images/25.jfif',5),
               (26, 'Theodore Roosevelt', 'Republican/Progressive', '1901-09-14', '1909-03-04', 25, 27,'./images/26.jfif',5),
               (27, 'William Howard Taft', 'Republican', '1909-03-04', '1913-03-04', 26, 28,'./images/27.jfif',5),
               (28, 'Woodrow Wilson', 'Democratic', '1913-03-04', '1921-03-04', 27, 29,'./images/28.jfif',5),
               (29, 'Warren G. Harding', 'Republican', '1921-03-04', '1923-08-02', 28, 30,'./images/29.jfif',5),
               (30, 'Calvin Coolidge', 'Republican', '1923-08-02', '1929-03-04', 29, 31,'./images/30.jfif',5),
               (31, 'Herbert Hoover', 'Republican', '1929-03-04', '1933-03-04', 30, 32,'./images/31.jfif',5),
               (32, 'Franklin D. Roosevelt', 'Democratic', '1933-03-04', '1945-04-12', 31, 33,'./images/32.jfif',5),
               (33, 'Harry S. Truman', 'Democratic', '1945-04-12', '1953-01-20', 32, 34,'./images/33.jfif',5),
               (34, 'Dwight D. Eisenhower', 'Republican', '1953-01-20', '1961-01-20', 33, 35,'./images/34.jfif',5),
               (35, 'John F. Kennedy', 'Democratic', '1961-01-20', '1963-11-22', 34, 36,'./images/35.jfif',5),
               (36, 'Lyndon B. Johnson', 'Democratic', '1963-11-22', '1969-01-20', 35, 37,'./images/36.jfif',5),
               (37, 'Richard Nixon', 'Republican', '1969-01-20', '1974-08-09', 36, 38,'./images/37.jfif',5),
               (38, 'Gerald Ford', 'Republican', '1974-08-09', '1977-01-20', 37, 39,'./images/38.jfif',5),
               (39, 'Jimmy Carter', 'Democratic', '1977-01-20', '1981-01-20', 38, 40,'./images/39.jfif',5),
               (40, 'Ronald Reagan', 'Republican', '1981-01-20', '1989-01-20', 39, 41,'./images/40.jfif',5),
               (41, 'George H. W. Bush', 'Republican', '1989-01-20', '1993-01-20', 40, 42,'./images/41.jfif',5),
               (42, 'Bill Clinton', 'Democratic', '1993-01-20', '2001-01-20', 41, 43,'./images/42.jfif',5),
               (43, 'George W. Bush', 'Republican', '2001-01-20', '2009-01-20', 42, 44,'./images/43.jfif',5),
               (44, 'Barack Obama', 'Democratic', '2009-01-20', '2017-01-20', 43, 45,'./images/44.jfif',5),
               (45, 'Donald Trump', 'Republican', '2017-01-20', '2021-01-20', 44, 46,'./images/45.jfif',5),
               (46, 'Joe Biden', 'Democratic', '2021-01-20', '2025-01-20', 45, 47,'./images/46.jfif',5);
      