import express from 'express';
import env from 'dotenv';
import cors from 'cors';
import connectDB from './src/database/db.js';   // FIXED PATH
import cookieParser from 'cookie-parser';
import methodOverride from 'method-override';
import path from 'path';
import router from './src/routes/index.js';
import { fileURLToPath } from 'url';

// env config
env.config({ path: './.env' });

// Get dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(methodOverride('_method'));

// Static folder
app.use(express.static(path.join(__dirname, 'src', 'public')));

// View engine
app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// Routes
app.use('/', router);

// Health route
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Make port
const port = process.env.PORT || 3000;

// Database connection
connectDB();

// Port listen
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
