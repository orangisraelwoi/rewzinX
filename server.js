const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public'));

// Data Login Khusus Boss RezinX
const users = [{ username: 'Rezin', password: '1' }];

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        res.json({ success: true });
    } else {
        res.status(401).json({ success: false, message: 'Username/Password Salah, Anj!' });
    }
});

app.listen(PORT, () => {
    console.log(`[!] Architect 01 Running on http://localhost:${PORT}`);
});
