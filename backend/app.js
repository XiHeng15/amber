import express from 'express';
const app = express();
import routes from './routes/index.js';
import { connectDB } from './db.js';
import { json } from 'express';
import cors from 'cors';

connectDB();
app.use(cors());
app.use(json());
app.use('/', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => console.log(`Server running on port ${PORT}`));
