import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
	host: process.env.HOST,
	port: 565,
	secure: true,
	auth: {
		user: process.env.EMAIL,
		pass: process.env.PASS,
	},
	logger: true, // Debugging enabled
	debug: true,
});

export async function POST(request) {
	try {
		const body = await request.json();
		const { name, email, message } = body;

		await transporter.verify();

		const mailOptions = {
			from: process.env.EMAIL,
			to: process.env.HOST_MAIL,
			subject: `New message in Lovetanin from ${name}`,
			text: `
                Name: ${name}
                Email: ${email}
                Message: ${message}
            `,
		};

		// Send the email
		await transporter.sendMail(mailOptions);
		return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
	} catch (error) {
		console.error("Error sending email: ", error); // Log the error for debugging
		return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
	}
}
