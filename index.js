import express from 'express';
import dotenv from 'dotenv';
import { errorHandler } from './middleware/errorMiddleware.js';
const config = dotenv.config();
import cors from 'cors';
import rateLimiterMiddleware from './middleware/rateLimiterMiddleware.js';
import emailRoutes from './routes/emailRoutes.js';

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
	cors({
		origin: '*', // allow to server to accept request from different origin
		methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
		credentials: true,
	})
);
app.use(rateLimiterMiddleware);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});

app.use('/api/', emailRoutes);

app.use(errorHandler);
