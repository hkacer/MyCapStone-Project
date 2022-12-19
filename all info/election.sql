 -- Define the candidates table
  CREATE TABLE candidates (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    party TEXT NOT NULL,
    born DATE NOT NULL,
    education TEXT NOT NULL,
    experience INTEGER NOT NULL
  );
  
  -- Insert the data for candidate 1
  INSERT INTO candidates (id, name, party, born, education, experience)
  VALUES (1, "Candidate 1", "Democratic", "1980-01-01", "Bachelor's degree in political science", 5);
  
  -- Insert the data for candidate 2
  INSERT INTO candidates (id, name, party, born, education, experience)
  VALUES (2, "Candidate 2", "Republican", "1981-02-02", "Master's degree in public policy", 10);
  