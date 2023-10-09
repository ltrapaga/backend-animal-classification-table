-- Creates the `basic_backend_table` database --
CREATE DATABASE basic_backend_table;

-- Use `basic_backend_table` database
USE basic_backend_table;

-- Creates `animal_families table --
CREATE TABLE IF NOT EXISTS animal_families (
-- Creates numeric field (or column) called `id`
id INT NOT NULL,
-- Creates a string called "name" with 20 or less characters --
name VARCHAR(20) NOT NULL,
-- Adds the primary key constraint on the column `id` --
PRIMARY KEY (id)
);

