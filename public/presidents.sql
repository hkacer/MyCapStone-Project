

CREATE TABLE presidents (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  party TEXT NOT NULL,
  term_start DATE NOT NULL,
  term_end DATE NOT NULL,
  predecessor INTEGER,
  successor INTEGER,
  FOREIGN KEY (predecessor) REFERENCES presidents(id),
  FOREIGN KEY (successor) REFERENCES presidents(id)
);

INSERT INTO presidents (id, name, party, term_start, term_end, predecessor, successor)
VALUES (1, 'George Washington', 'Independent', '1789-04-30', '1797-03-04', NULL, 2),
       (2, 'John Adams', 'Federalist', '1797-03-04', '1801-03-04', 1, 3),
       (3, 'Thomas Jefferson', 'Democratic-Republican', '1801-03-04', '1809-03-04', 2, 4),
       (4, 'James Madison', 'Democratic-Republican', '1809-03-04', '1817-03-04', 3, 5),
       (5, 'James Monroe', 'Democratic-Republican', '1817-03-04', '1825-03-04', 4, 6),
       (6, 'John Quincy Adams', 'Democratic-Republican/National Republican', '1825-03-04', '1829-03-04', 5, 7),
       (7, 'Andrew Jackson', 'Democratic', '1829-03-04', '1837-03-04', 6, 8),
       (8, 'Martin Van Buren', 'Democratic', '1837-03-04', '1841-03-04', 7, 9),
       (9, 'William Henry Harrison', 'Whig', '1841-03-04', '1841-04-04', 8, 10),
       (10, 'John Tyler', 'Democratic/Whig', '1841-04-04', '1845-03-04', 9, 11);
        (11, 'James K. Polk', 'Democratic', '1845-03-04', '1849-03-04', 10, 12),
       (12, 'Zachary Taylor', 'Whig', '1849-03-04', '1850-07-09', 11, 13),
       (13, 'Millard Fillmore', 'Whig/American', '1850-07-09', '1853-03-04', 12, 14),
       (14, 'Franklin Pierce', 'Democratic', '1853-03-04', '1857-03-04', 13, 15),
       (15, 'James Buchanan', 'Democratic', '1857-03-04', '1861-03-04', 14, 16),
       (16, 'Abraham Lincoln', 'Republican', '1861-03-04', '1865-04-15', 15, 17),
       (17, 'Andrew Johnson', 'National Union', '1865-04-15', '1869-03-04', 16, 18),
       (18, 'Ulysses S. Grant', 'Republican', '1869-03-04', '1877-03-04', 17, 19),
       (19, 'Rutherford B. Hayes', 'Republican', '1877-03-04', '1881-03-04', 18, 20),
       (20, 'James A. Garfield', 'Republican', '1881-03-04', '1881-09-19', 19, 21);
        (21, 'Chester A. Arthur', 'Republican', '1881-09-19', '1885-03-04', 20, 22),
       (22, 'Grover Cleveland', 'Democratic', '1885-03-04', '1889-03-04', 21, 23),
       (23, 'Benjamin Harrison', 'Republican', '1889-03-04', '1893-03-04', 22, 24),
       (24, 'Grover Cleveland', 'Democratic', '1893-03-04', '1897-03-04', 23, 25),
       (25, 'William McKinley', 'Republican', '1897-03-04', '1901-09-14', 24, 26),
       (26, 'Theodore Roosevelt', 'Republican/Progressive', '1901-09-14', '1909-03-04', 25, 27),
       (27, 'William Howard Taft', 'Republican', '1909-03-04', '1913-03-04', 26, 28),
       (28, 'Woodrow Wilson', 'Democratic', '1913-03-04', '1921-03-04', 27, 29),
       (29, 'Warren G. Harding', 'Republican', '1921-03-04', '1923-08-02', 28, 30),
       (30, 'Calvin Coolidge', 'Republican', '1923-08-02', '1929-03-04', 29, 31);
       (31, 'Herbert Hoover', 'Republican', '1929-03-04', '1933-03-04', 30, 32),
       (32, 'Franklin D. Roosevelt', 'Democratic', '1933-03-04', '1945-04-12', 31, 33),
       (33, 'Harry S. Truman', 'Democratic', '1945-04-12', '1953-01-20', 32, 34),
       (34, 'Dwight D. Eisenhower', 'Republican', '1953-01-20', '1961-01-20', 33, 35),
       (35, 'John F. Kennedy', 'Democratic', '1961-01-20', '1963-11-22', 34, 36),
       (36, 'Lyndon B. Johnson', 'Democratic', '1963-11-22', '1969-01-20', 35, 37),
       (37, 'Richard Nixon', 'Republican', '1969-01-20', '1974-08-09', 36, 38),
       (38, 'Gerald Ford', 'Republican', '1974-08-09', '1977-01-20', 37, 39),
       (39, 'Jimmy Carter', 'Democratic', '1977-01-20', '1981-01-20', 38, 40),
       (40, 'Ronald Reagan', 'Republican', '1981-01-20', '1989-01-20', 39, 41);
       (41, 'George H. W. Bush', 'Republican', '1989-01-20', '1993-01-20', 40, 42),
       (42, 'Bill Clinton', 'Democratic', '1993-01-20', '2001-01-20', 41, 43),
       (43, 'George W. Bush', 'Republican', '2001-01-20', '2009-01-20', 42, 44),
       (44, 'Barack Obama', 'Democratic', '2009-01-20', '2017-01-20', 43, 45),
       (45, 'Donald Trump', 'Republican', '2017-01-20', '2021-01-20', 44, 46),
       (46, 'Joe Biden', 'Democratic', '2021-01-20', '2025-01-20', 45, 47);




