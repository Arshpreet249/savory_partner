
import express from 'express';
import cors from 'cors';
const app = express();

app.use(cors({ origin: 'http://localhost:5173' }));


app.use(express.json());


app.post('/auth/login', (req, res) => {
res.json({ message: 'Login Success' });
});

app.listen(7000, () => console.log('Server running on port 7000'));
