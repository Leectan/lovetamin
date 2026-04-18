"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AOS from "aos";

const TermsAndPrivacy = () => {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<main className="overflow-x-hidden bg-[#FFFAFA]">
			<Navbar />
			<div className="max-w-4xl mx-auto p-6 text-gray-800">
				<h1 className="text-3xl font-bold text-center text-[rgb(103,41,95)] mb-6">
					Lovetamin Terms of Service
				</h1>
				<section className="mb-8">
					<h2 className="text-xl font-semibold text-gray-900 mb-2">1. Introduction</h2>
					<p>
						<strong>Agreement Overview:</strong> By accessing or using Lovetamin, you
						agree to be bound by these Terms of Service and our Privacy Policy. If you
						do not agree, please do not use the service.
					</p>
					<p>
						<strong>Changes to Terms:</strong> Lovetamin reserves the right to modify
						these Terms at any time. We will notify users of significant changes via the
						service or email.
					</p>
				</section>
				<section className="mb-8">
					<h2 className="text-xl font-semibold text-gray-900 mb-2">
						2. User Eligibility
					</h2>
					<p>
						<strong>Age Requirement:</strong> You must be at least 18 years old to use
						Lovetamin.
					</p>
					<p>
						<strong>User Conduct:</strong> You may not harass others, spam, impersonate
						someone else, or misuse personal information. Hate speech, discrimination,
						and illegal activity are prohibited.
					</p>
				</section>
				<section className="mb-8">
					<h2 className="text-xl font-semibold text-gray-900 mb-2">
						3. Account Registration
					</h2>
					<p>
						<strong>Account Information:</strong> Provide accurate, current, and
						complete details when registering.
					</p>
					<p>
						<strong>Account Security:</strong> Maintain confidentiality of your login
						credentials and notify us of unauthorized use.
					</p>
				</section>
				<section className="mb-8">
					<h2 className="text-xl font-semibold text-gray-900 mb-2">
						4. User Content and AI Features
					</h2>
					<p>
						<strong>Ownership:</strong> You retain ownership of the content you post on
						Lovetamin, but by posting, you grant us a non-exclusive, royalty-free,
						worldwide license to use, store, reproduce, modify, create derivative works,
						communicate, publish, and distribute such content for the purpose of
						operating, promoting, and improving our service.
					</p>
					<p>
						<strong>Optional AI Features:</strong> Some optional Lovetamin features offer
						AI-assisted guidance, reflections, avatar generation, and personalization.
						These Optional AI Features are off unless you explicitly turn them on inside
						the app. Core matching, messaging, and community features do not require
						Optional AI Features.
					</p>
					<p>
						<strong>Content Restrictions:</strong> Prohibited content includes but is
						not limited to nudity, violence, or material that promotes illegal
						activities. Lovetamin may remove or restrict access to such content without
						prior notice.
					</p>
					<p>
						<strong>User Interaction:</strong> Interactions with other users' content
						should respect privacy and consent. Sharing or misusing personal information
						is strictly against our policy.
					</p>
				</section>
				<section className="mb-8">
					<h2 className="text-xl font-semibold text-gray-900 mb-2">
						5. Fees and Payment
					</h2>
					<p>
						<strong>In-App Purchases:</strong> Lovetamin may offer optional premium
						subscriptions or other paid digital features through in-app purchase flows
						inside the mobile app. Availability may vary by build, market, or platform.
					</p>
					<p>
						<strong>Refund Policy:</strong> Refund requests are subject to the applicable
						app store or platform billing rules and any rights required by law.
					</p>
				</section>
				<section className="mb-8">
					<h2 className="text-xl font-semibold text-gray-900 mb-2">6. Termination</h2>
					<p>
						<strong>User Termination:</strong> You may terminate your account at any
						time by following the instructions in your account settings or contacting
						our support team.
					</p>
					<p>
						<strong>Service Termination: </strong> Lovetamin may terminate or suspend
						your account at any time for violations of these Terms, without liability.
					</p>
				</section>
				<section className="mb-8">
					<h2 className="text-xl font-semibold text-gray-900 mb-2">
						7. Disclaimers and Limitation of Liability
					</h2>
					<p>
						<strong>No Guarantees:</strong> Lovetamin does not guarantee matches,
						relationships, or specific outcomes from using the service. Use at your own
						risk.
					</p>
					<p>
						<strong>Liability: </strong> Lovetamin's liability is limited to the maximum
						extent permitted by law. We are not responsible for any indirect,
						incidental, special, or consequential damages.
					</p>
				</section>
				<section className="mb-8">
					<h2 className="text-xl font-semibold text-gray-900 mb-2">8. Governing Law</h2>
					<p>
						These Terms are governed by the laws of the United States, without regard to
						its conflict of law principles.
					</p>
				</section>
				<section className="mb-8">
					<h2 className="text-xl font-semibold text-gray-900 mb-2">
						9. Dispute Resolution
					</h2>
					<p>
						For any dispute, you agree to first try to resolve it informally by
						contacting Lovetamin. If unresolved, disputes will be settled by binding
						arbitration, not in court.
					</p>
				</section>

				<h1 className="text-3xl font-bold text-center text-[rgb(103,41,95)] my-6">
					Lovetamin Privacy Policy
				</h1>
				<section className="mb-8">
					<h2 className="text-xl font-semibold text-gray-900 mb-2">1. Data Collection</h2>
					<p>
						<strong>Types of Data:</strong> We collect personal data such as name, email
						address, profile photos, profile responses, dating preferences, partner-mode
						inputs, and location data that you choose to provide.
					</p>
					<p>
						<strong>Usage Data:</strong> We also collect usage and device information to
						operate the app, improve functionality, prevent abuse, and personalize your
						experience.
					</p>
					<p>
						<strong>Verification Data:</strong> If you choose identity or trust-related
						verification flows, we collect the submitted images and related metadata
						needed to process that request.
					</p>
				</section>
				<section className="mb-8">
					<h2 className="text-xl font-semibold text-gray-900 mb-2">
						2. Use of Information
					</h2>
					<p>
						<strong>Purpose:</strong> We use your information to create and manage your
						account, power matching and partner features, provide safety tooling,
						deliver support, and improve Lovetamin.
					</p>
					<p>
						<strong>Marketing:</strong> We may use your information for product updates
						or marketing only where permitted by law and, when required, with your
						consent.
					</p>
				</section>
				<section className="mb-8">
					<h2 className="text-xl font-semibold text-gray-900 mb-2">
						3. AI Processing and Service Providers
					</h2>
					<p>
						<strong>Explicit In-App Consent:</strong> Lovetamin requires users to
						explicitly consent inside the app before Optional AI Features are enabled.
						If you do not consent, those Optional AI Features remain unavailable, while
						core matching, messaging, and community features continue to work normally.
					</p>
					<p>
						<strong>AI Service Providers:</strong> When you enable Optional AI Features,
						selected user-provided text and limited relevant profile context may be
						processed by service providers that help us operate those features,
						including OpenAI, Pinecone, and Amazon Web Services.
					</p>
					<p>
						<strong>How We Use Those Providers:</strong> These providers support optional
						coaching guidance, optional personalization, AI-assisted avatar generation,
						and related retrieval or infrastructure functions inside Lovetamin. Separate
						verification or trust-and-safety flows may also use Amazon Web Services when
						you choose to use those flows.
					</p>
				</section>
				<section className="mb-8">
					<h2 className="text-xl font-semibold text-gray-900 mb-2">
						4. Sharing and Legal Disclosure
					</h2>
					<p>
						<strong>With Other Users:</strong> Your profile information is shared with
						other Lovetamin users as part of the service experience.
					</p>
					<p>
						<strong>Legal Compliance:</strong> We may disclose information when required
						by law, to enforce our terms, or to protect the rights, safety, or security
						of Lovetamin, our users, or the public.
					</p>
				</section>
				<section className="mb-8">
					<h2 className="text-xl font-semibold text-gray-900 mb-2">
						5. Security and Retention
					</h2>
					<p>
						<strong>Protection Measures:</strong> We use reasonable administrative,
						technical, and organizational safeguards designed to protect your
						information.
					</p>
					<p>
						<strong>Retention:</strong> We retain personal data for as long as your
						account is active or as needed to provide the service, comply with legal
						obligations, resolve disputes, and enforce agreements.
					</p>
				</section>
				<section className="mb-8">
					<h2 className="text-xl font-semibold text-gray-900 mb-2">
						6. User Choices and Rights
					</h2>
					<p>
						<strong>Access and Deletion:</strong> You may request access to, correction
						of, or deletion of your personal data by using in-app settings or
						contacting us.
					</p>
					<p>
						<strong>Consent Choices:</strong> You may decline AI processing, but some
						Optional AI Features will not be available unless consent is provided. You
						may also turn Optional AI Features back off later in Settings &gt; Privacy
						&gt; Optional AI Features.
					</p>
				</section>
				<section className="mb-8">
					<h2 className="text-xl font-semibold text-gray-900 mb-2">
						7. International Transfers
					</h2>
					<p>
						<strong>Data Processing Locations:</strong> Lovetamin is focused on the
						United States, but some service providers may process data in other
						jurisdictions where they operate.
					</p>
				</section>
				<section className="mb-8">
					<h2 className="text-xl font-semibold text-gray-900 mb-2">
						8. Changes to Privacy Policy
					</h2>
					<p>
						We may update this Privacy Policy periodically. We will notify you of any
						changes by posting the new policy on our site or via email. Your continued
						use after changes signifies your acceptance.
					</p>
				</section>
				<section className="mb-8">
					<h2 className="text-xl font-semibold text-gray-900 mb-2">
						9. Contact Information
					</h2>
					<p>
						For any questions or to exercise your data rights, please contact us at{" "}
						<a
							href="mailto:info@lovetamin.love"
							className="text-[rgb(103,41,95)] underline"
						>
							info@lovetamin.love
						</a>
						.
					</p>
				</section>
			</div>
			<Footer />
		</main>
	);
};

export default TermsAndPrivacy;
