-- Wedding Website Database Schema

CREATE DATABASE IF NOT EXISTS wedding_website;
USE wedding_website;

-- Couple table for bride and groom information
CREATE TABLE couple (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    role ENUM('bride', 'groom') NOT NULL,
    date_of_birth DATE,
    hometown VARCHAR(255),
    profession VARCHAR(255),
    hobbies TEXT,
    bio TEXT,
    photo_path VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Story events table for timeline
CREATE TABLE story_events (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    event_date DATE NOT NULL,
    icon VARCHAR(50),
    photo_path VARCHAR(255),
    sort_order INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Education table for bride and groom education
CREATE TABLE education (
    id INT AUTO_INCREMENT PRIMARY KEY,
    person_role ENUM('bride', 'groom') NOT NULL,
    level VARCHAR(100) NOT NULL,
    institution VARCHAR(255) NOT NULL,
    location VARCHAR(255),
    start_year INT,
    end_year INT,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Family members table
CREATE TABLE family_members (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    relationship VARCHAR(100) NOT NULL,
    bio TEXT,
    belongs_to ENUM('bride', 'groom') NOT NULL,
    photo_path VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Guest messages table (bonus feature)
CREATE TABLE guest_messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    guest_name VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    email VARCHAR(255),
    approved BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample data

-- Couple data
INSERT INTO couple (name, role, date_of_birth, hometown, profession, hobbies, bio) VALUES
('Sarah Johnson', 'bride', '1995-03-15', 'San Francisco, California', 'Graphic Designer', 'Painting, Yoga, Travel', 'Sarah is a creative soul with a passion for art and design. Her warm smile and kind heart brighten every room she enters.'),
('Michael Chen', 'groom', '1994-07-22', 'Los Angeles, California', 'Software Engineer', 'Photography, Hiking, Cooking', 'Michael is a thoughtful and ambitious person with a love for technology and the outdoors. His adventurous spirit and caring nature make him the perfect partner.');

-- Story events
INSERT INTO story_events (title, description, event_date, icon, sort_order) VALUES
('First Meeting', 'Sarah and Michael met at a friend\'s art gallery opening in San Francisco. Sarah was showcasing her photography work, and Michael was immediately captivated by both her art and her smile.', '2022-03-10', '🎨', 1),
('First Date', 'Their first date was at a cozy Italian restaurant in North Beach. They talked for hours about art, technology, travel, and their dreams.', '2022-03-18', '🍝', 2),
('First Trip Together', 'They took their first trip to Napa Valley. Sarah loved the beautiful landscapes, and Michael enjoyed the wine tasting.', '2022-06-15', '🍷', 3),
('Moving In Together', 'They decided to take the next step and moved into their first apartment together in San Francisco.', '2022-12-01', '🏠', 4),
('The Proposal', 'Michael proposed on Christmas morning during a romantic getaway to Lake Tahoe. He arranged for a private dinner by the lake, got down on one knee, and asked Sarah to be his wife.', '2023-12-25', '💍', 5),
('Engagement Party', 'They celebrated their engagement with friends and family at a beautiful garden party.', '2024-01-20', '🎉', 6);

-- Education data
INSERT INTO education (person_role, level, institution, location, start_year, end_year, description) VALUES
('bride', 'Primary School', 'Lincoln Elementary School', 'San Francisco, CA', 2001, 2007, 'Where Sarah discovered her love for art and creativity'),
('bride', 'Secondary School', 'San Francisco High School', 'San Francisco, CA', 2007, 2011, 'Excelled in art classes and was the yearbook designer'),
('bride', 'University', 'Academy of Art University', 'San Francisco, CA', 2011, 2015, 'Bachelor of Fine Arts in Graphic Design, graduated with honors'),
('groom', 'Primary School', 'Oakwood Elementary School', 'Los Angeles, CA', 2000, 2006, 'Where Michael developed his passion for technology'),
('groom', 'Secondary School', 'Los Angeles Technical High School', 'Los Angeles, CA', 2006, 2010, 'Computer club president and robotics team lead'),
('groom', 'University', 'Stanford University', 'Stanford, CA', 2010, 2014, 'Bachelor of Science in Computer Science, graduated with distinction');

-- Family members
INSERT INTO family_members (name, relationship, bio, belongs_to) VALUES
('Robert Johnson', 'Father', 'Retired architect with a passion for classical music and woodworking. Taught Sarah the importance of attention to detail.', 'bride'),
('Emily Johnson', 'Mother', 'Elementary school teacher and amazing cook. Sarah\'s biggest supporter and role model.', 'bride'),
('David Johnson', 'Brother', 'Software engineer living in Seattle. Always there for Sarah with tech advice.', 'bride'),
('Lisa Johnson', 'Sister', 'Wedding planner based in San Francisco. Helping Sarah plan the perfect wedding.', 'bride'),
('James Chen', 'Father', 'Successful businessman and community leader. Instilled in Michael the values of hard work.', 'groom'),
('Margaret Chen', 'Mother', 'Nurse practitioner and yoga instructor. Taught Michael the importance of health and mindfulness.', 'groom'),
('Daniel Chen', 'Brother', 'Medical resident in Boston. Michael\'s older brother and closest confidant.', 'groom'),
('Sophia Chen', 'Sister', 'Fashion designer in New York. Always keeping Michael updated on the latest trends.', 'groom');

-- Sample guest messages
INSERT INTO guest_messages (guest_name, message, email, approved) VALUES
('Jennifer Smith', 'Congratulations to the beautiful couple! Wishing you a lifetime of love and happiness.', 'jennifer@email.com', TRUE),
('David Wilson', 'So happy for you both! Can\'t wait to celebrate with you on your special day.', 'david@email.com', TRUE),
('Maria Garcia', 'Sarah and Michael, you two are perfect together! Much love and best wishes!', 'maria@email.com', TRUE);
