import asyncHandler from 'express-async-handler';
import { createTransport } from 'nodemailer';

const sendEmail = asyncHandler(async (req, res) => {
    const { receiver, subject, text, html } = req.body;
	var transporter = createTransport({
		service: process.env.EMAIL_SERVICE,
		auth: {
			user: process.env.EMAIL_USERNAME,
			pass: process.env.EMAIL_PASSWORD,
		},
	});

	var mailOptions = {
		from: process.env.EMAIL_ADDRESS,
		to: receiver,
		subject: subject,
		text: text,
		html: html,
	};
	let success = false;
	await transporter
		.sendMail(mailOptions)
		.then(() => {
			success = true;
		})
		.catch((err) => {
			console.log(err);
			success = false;
		});
	res.json({ success });
});

export { sendEmail };
