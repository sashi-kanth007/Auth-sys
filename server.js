const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const passwordValidator = require('password-validator');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/authsystem', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

// Password validation schema
const passwordSchema = new passwordValidator();
passwordSchema
    .is().min(8)            // Minimum length 8
    .is().max(100)          // Maximum length 100
    .has().uppercase()      // Must have uppercase letters
    .has().lowercase()      // Must have lowercase letters
    .has().digits()         // Must have digits
    .has().symbols()        // Must have symbols
    .is().not().oneOf(['Passw0rd', 'password123']); // Avoid commonly used passwords

// Custom username validation function
const validateUsername = (username) => {
    const usernameRegex = /^[a-zA-Z0-9_-]{3,20}$/;
    return usernameRegex.test(username);
};

app.post('/register', async (req, res) => {
    const { username, password } = req.body;

    // Validate username
    const isUsernameValid = validateUsername(username);
    if (!isUsernameValid) {
        return res.status(400).json({ message: 'Invalid username' });
    }

    // Validate password
    const passwordErrors = passwordSchema.validate(password, { list: true });
    if (passwordErrors.length > 0) {
        return res.status(400).json({ message: 'Invalid password', errors: passwordErrors });
    }

    try {
        const userExists = await User.findOne({ username });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, password: hashedPassword });

        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
    res.json({ token });
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
