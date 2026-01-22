const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
const multer = require('multer');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// File upload configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + Math.round(Math.random() * 1E9) + path.extname(file.originalname));
  }
});

const upload = multer({ 
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed!'), false);
    }
  }
});

// Database connection
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Create uploads directory if it doesn't exist
const fs = require('fs');
if (!fs.existsSync('uploads')) {
  fs.mkdirSync('uploads');
}

// API Routes

// Get couple information
app.get('/api/couple', async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM couple ORDER BY role');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching couple data:', error);
    res.status(500).json({ error: 'Failed to fetch couple data' });
  }
});

// Update couple information
app.put('/api/couple/:id', upload.single('photo'), async (req, res) => {
  try {
    const { name, date_of_birth, hometown, profession, hobbies, bio } = req.body;
    const photo_path = req.file ? req.file.filename : null;
    
    let query = 'UPDATE couple SET name = ?, date_of_birth = ?, hometown = ?, profession = ?, hobbies = ?, bio = ?';
    let params = [name, date_of_birth, hometown, profession, hobbies, bio];
    
    if (photo_path) {
      query += ', photo_path = ?';
      params.push(photo_path);
    }
    
    query += ' WHERE id = ?';
    params.push(req.params.id);
    
    await db.execute(query, params);
    res.json({ message: 'Couple information updated successfully' });
  } catch (error) {
    console.error('Error updating couple data:', error);
    res.status(500).json({ error: 'Failed to update couple data' });
  }
});

// Get story events
app.get('/api/story', async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM story_events ORDER BY sort_order ASC, event_date ASC');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching story events:', error);
    res.status(500).json({ error: 'Failed to fetch story events' });
  }
});

// Add story event
app.post('/api/story', upload.single('photo'), async (req, res) => {
  try {
    const { title, description, event_date, icon, sort_order } = req.body;
    const photo_path = req.file ? req.file.filename : null;
    
    const [result] = await db.execute(
      'INSERT INTO story_events (title, description, event_date, icon, photo_path, sort_order) VALUES (?, ?, ?, ?, ?, ?)',
      [title, description, event_date, icon, photo_path, sort_order || 0]
    );
    
    res.json({ id: result.insertId, message: 'Story event added successfully' });
  } catch (error) {
    console.error('Error adding story event:', error);
    res.status(500).json({ error: 'Failed to add story event' });
  }
});

// Get education information
app.get('/api/education', async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM education ORDER BY person_role, start_year ASC');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching education data:', error);
    res.status(500).json({ error: 'Failed to fetch education data' });
  }
});

// Add education record
app.post('/api/education', async (req, res) => {
  try {
    const { person_role, level, institution, location, start_year, end_year, description } = req.body;
    
    const [result] = await db.execute(
      'INSERT INTO education (person_role, level, institution, location, start_year, end_year, description) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [person_role, level, institution, location, start_year, end_year, description]
    );
    
    res.json({ id: result.insertId, message: 'Education record added successfully' });
  } catch (error) {
    console.error('Error adding education record:', error);
    res.status(500).json({ error: 'Failed to add education record' });
  }
});

// Get family members
app.get('/api/family', async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM family_members ORDER BY belongs_to, relationship, name');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching family members:', error);
    res.status(500).json({ error: 'Failed to fetch family members' });
  }
});

// Add family member
app.post('/api/family', upload.single('photo'), async (req, res) => {
  try {
    const { name, relationship, bio, belongs_to } = req.body;
    const photo_path = req.file ? req.file.filename : null;
    
    const [result] = await db.execute(
      'INSERT INTO family_members (name, relationship, bio, belongs_to, photo_path) VALUES (?, ?, ?, ?, ?)',
      [name, relationship, bio, belongs_to, photo_path]
    );
    
    res.json({ id: result.insertId, message: 'Family member added successfully' });
  } catch (error) {
    console.error('Error adding family member:', error);
    res.status(500).json({ error: 'Failed to add family member' });
  }
});

// Get guest messages
app.get('/api/messages', async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM guest_messages WHERE approved = TRUE ORDER BY created_at DESC');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching guest messages:', error);
    res.status(500).json({ error: 'Failed to fetch guest messages' });
  }
});

// Add guest message
app.post('/api/messages', async (req, res) => {
  try {
    const { guest_name, message, email } = req.body;
    
    const [result] = await db.execute(
      'INSERT INTO guest_messages (guest_name, message, email) VALUES (?, ?, ?)',
      [guest_name, message, email]
    );
    
    res.json({ id: result.insertId, message: 'Message submitted successfully. It will be visible after approval.' });
  } catch (error) {
    console.error('Error adding guest message:', error);
    res.status(500).json({ error: 'Failed to submit message' });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Error handling middleware
app.use((error, req, res, next) => {
  if (error instanceof multer.MulterError) {
    if (error.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({ error: 'File size too large. Maximum size is 5MB.' });
    }
  }
  console.error('Unhandled error:', error);
  res.status(500).json({ error: 'Internal server error' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`API available at http://localhost:${PORT}/api`);
});
