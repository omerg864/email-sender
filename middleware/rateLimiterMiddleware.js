import setRateLimit from 'express-rate-limit';

const rateLimiterMiddleware = setRateLimit({
	windowMs: 10 * 60 * 1000, // 30 minutes
	max: 1000, // limit each IP to 150 requests per windowMs
	headers: true,
});

export default rateLimiterMiddleware;
