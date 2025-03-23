"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AOS from "aos";

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [errors, setErrors] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const [submitStatus, setSubmitStatus] = useState(null);

	useEffect(() => {
		AOS.init();
	}, []);

	const validateForm = () => {
		const newErrors = {};

		if (!formData.name.trim()) newErrors.name = "Name is required";

		if (!formData.email.trim()) {
			newErrors.email = "Email is required";
		} else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
			newErrors.email = "Email is invalid";
		}

		if (!formData.message.trim()) newErrors.message = "Message is required";

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });

		// Clear error for this field when user starts typing
		if (errors[name]) {
			setErrors({ ...errors, [name]: null });
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		// Reset status
		setSubmitStatus(null);

		if (!validateForm()) return;

		setIsLoading(true);

		try {
			// Replace with your actual API endpoint
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			if (!response.ok) {
				throw new Error(`Error: ${response.status}`);
			}

			const data = await response.json();
			setSubmitStatus({
				success: true,
				message: "Thank you! Your message has been sent successfully.",
			});

			// Reset form after successful submission
			setFormData({
				name: "",
				email: "",
				message: "",
			});
		} catch (error) {
			console.error("Submission error:", error);
			setSubmitStatus({
				success: false,
				message: "Something went wrong. Please try again later.",
			});
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<main className="overflow-x-hidden bg-[#FFFAFA] min-h-screen flex flex-col">
			<Navbar />

			<div className="max-w-4xl mx-auto p-6 w-full flex-grow">
				<div className="mb-12 text-center" data-aos="fade-down" data-aos-duration="800">
					<h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
					<p className="text-gray-600 max-w-2xl mx-auto">
						Have questions or want to learn more about our services? Fill out the form
						below and our team will get back to you as soon as possible.
					</p>
				</div>

				<div
					className="bg-white rounded-lg shadow-lg p-8"
					data-aos="fade-up"
					data-aos-duration="1000"
					data-aos-delay="200"
				>
					{submitStatus?.success ? (
						<div className="text-center py-8">
							<div className="mb-4 text-green-500">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-16 w-16 mx-auto"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M5 13l4 4L19 7"
									/>
								</svg>
							</div>
							<h3 className="text-2xl font-semibold text-gray-800 mb-2">
								Message Sent!
							</h3>
							<p className="text-gray-600 mb-6">{submitStatus.message}</p>
							<button
								onClick={() => setSubmitStatus(null)}
								className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md transition duration-300"
							>
								Send Another Message
							</button>
						</div>
					) : (
						<form onSubmit={handleSubmit} className="space-y-6">
							<div>
								<label
									htmlFor="name"
									className="block text-gray-700 font-medium mb-2"
								>
									Full Name <span className="text-red-500">*</span>
								</label>
								<input
									type="text"
									id="name"
									name="name"
									value={formData.name}
									onChange={handleChange}
									className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
										errors.name ? "border-red-500" : "border-gray-300"
									}`}
									placeholder="Your name"
								/>
								{errors.name && (
									<p className="mt-1 text-sm text-red-500">{errors.name}</p>
								)}
							</div>

							<div>
								<label
									htmlFor="email"
									className="block text-gray-700 font-medium mb-2"
								>
									Email Address <span className="text-red-500">*</span>
								</label>
								<input
									type="email"
									id="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
										errors.email ? "border-red-500" : "border-gray-300"
									}`}
									placeholder="your.email@example.com"
								/>
								{errors.email && (
									<p className="mt-1 text-sm text-red-500">{errors.email}</p>
								)}
							</div>

							<div>
								<label
									htmlFor="message"
									className="block text-gray-700 font-medium mb-2"
								>
									Message <span className="text-red-500">*</span>
								</label>
								<textarea
									id="message"
									name="message"
									value={formData.message}
									onChange={handleChange}
									rows="5"
									className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
										errors.message ? "border-red-500" : "border-gray-300"
									}`}
									placeholder="How can we help you?"
								></textarea>
								{errors.message && (
									<p className="mt-1 text-sm text-red-500">{errors.message}</p>
								)}
							</div>

							{submitStatus?.success === false && (
								<div className="p-3 bg-red-50 border border-red-200 rounded-md text-red-600">
									<p>{submitStatus.message}</p>
								</div>
							)}

							<div className="pt-2">
								<button
									type="submit"
									disabled={isLoading}
									className={`w-full py-3 px-4 rounded-md text-white font-medium transition duration-300 ${
										isLoading
											? "bg-blue-400 cursor-not-allowed"
											: "bg-blue-600 hover:bg-blue-700"
									}`}
								>
									{isLoading ? (
										<span className="flex items-center justify-center">
											<svg
												className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
											>
												<circle
													className="opacity-25"
													cx="12"
													cy="12"
													r="10"
													stroke="currentColor"
													strokeWidth="4"
												></circle>
												<path
													className="opacity-75"
													fill="currentColor"
													d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
												></path>
											</svg>
											Sending...
										</span>
									) : (
										"Send Message"
									)}
								</button>
							</div>
						</form>
					)}
				</div>

				<div
					className="mt-12 grid md:grid-cols-3 gap-6 text-center"
					data-aos="fade-up"
					data-aos-duration="800"
					data-aos-delay="400"
				></div>
			</div>

			<Footer />
		</main>
	);
};

export default Contact;
