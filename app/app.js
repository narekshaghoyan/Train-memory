import express from 'express';
import bodyParser from 'body-parser';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from './database/models/user.js'; // Ensure the file extension is .js

const app = express();
const PORT = 3000;
const SECRET_KEY = 'CyHZCl8HVJEfmx1mQb1ezIiAkTlQMpruJhI0upmB1rYp1F2fESTKRtocOEvpHaf7zkDM47RZF8pOkBsKT1JBijrCpl5PsXe0RJEEQ9JpX6Cw4rbO01bXeVthVOemac4esEPGF'; // Change this to a secure key

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static('public'));

const checkAuth = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
};


// Redirect to memory game if user is authenticated

app.get('/', async (req, res) => {
  res.redirect('memory-game.html')
});

app.get('/user-info', checkAuth, async (req, res) => {
  try {
    const user = await User.findByPk(req.userId, {
      attributes: ['firstName', 'lastName', 'email', 'regDate', 'lastRecord']
    });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching user info:', error);
    res.status(500).json({ error: 'Error fetching user info' });
  }
});

app.get('/navigator.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'navigator.html'));
});


app.post('/verify-token', checkAuth, (req, res) => {
  res.status(200).json({ message: 'Token is valid' });
});

// Registration endpoint
app.post('/register', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      regDate: new Date(),
    });
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error registering user' });
  }
});

// Login endpoint
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
    
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }  
  
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ error: 'Incorrect email!' });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ error: 'Invalid password!' });
    }
    const token = jwt.sign({ userId: user.id }, SECRET_KEY, { expiresIn: '24h' });
    res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error logging in' });
  }
});

app.post('/game-time', checkAuth, async (req, res) => {
  const { time } = req.body;
  const userId = req.userId;

  try {
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    user.lastRecord = time;
    await user.save();

    res.status(200).json({ message: 'Time received and logged' });
  } catch (error) {
    console.error('Error logging game time:', error);
    res.status(500).json({ error: 'Error logging game time' });
  }
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
