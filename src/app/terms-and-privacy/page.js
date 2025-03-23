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
						<strong>User Conduct:</strong> No harassment, spamming, or unauthorized
						disclosure of personal information. Hate speech and discrimination are
						prohibited.
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
					<h2 className="text-xl font-semibold text-gray-900 mb-2">4. User Content</h2>
					<p>
						<strong>Ownership:</strong> You retain ownership of the content you post on
						Lovetamin, but by posting, you grant us a non-exclusive, royalty-free,
						worldwide license to use, store, reproduce, modify, create derivative works,
						communicate, publish, and distribute such content for the purpose of
						operating, promoting, and improving our service.
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
						<strong>Subscription Models:</strong> Lovetamin offers premium features
						through subscription. Details on pricing, billing cycles, and auto-renewal
						are available in our subscription section.
					</p>
					<p>
						<strong>Refund Policy:</strong> Refunds are typically not available for
						subscriptions unless required by law or in cases of billing errors.
						Exceptions will be handled on a case-by-case basis.
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
						These Terms are governed by the laws of [Your Jurisdiction], without regard
						to its conflict of law principles.
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
						<strong>Types of Data:</strong> We collect personal data such as names,
						photos, dating preferences, and location data.
					</p>
					<p>
						<strong>Usage Data:</strong> Helps improve functionality and personalize
						user experience.
					</p>
				</section>
				<section className="mb-8">
					<h2 className="text-xl font-semibold text-gray-900 mb-2">
						2. Use of Information
					</h2>
					<p>
						<strong>Purpose:</strong> Used for matchmaking, service enhancements, and
						marketing (with user consent).
					</p>
					<p>
						<strong>Third Parties:</strong> Data may be shared with service providers
						for payment processing or legal compliance.
					</p>
				</section>
				<section className="mb-8">
					<h2 className="text-xl font-semibold text-gray-900 mb-2">3. Data Sharing</h2>
					<p>
						<strong>With Consent:</strong> We might share your profile information with
						other users or for social media integration with your consent.
					</p>
					<p>
						<strong> Legal Compliance:</strong> We may disclose your information in
						response to subpoenas or when required by law enforcement.
					</p>
				</section>
				<section className="mb-8">
					<h2 className="text-xl font-semibold text-gray-900 mb-2">4.Security</h2>
					<p>
						<strong>Protection Measures:</strong> We employ industry-standard security
						measures to protect your data, including encryption and secure server
						storage.
					</p>
					<p>
						<strong> Data Breach:</strong> In case of a breach, we will notify you
						promptly and take appropriate steps to mitigate risks.
					</p>
				</section>
				<section className="mb-8">
					<h2 className="text-xl font-semibold text-gray-900 mb-2">5.User Rights</h2>
					<p>
						<strong> Access and Correction:</strong> You can request access, correction,
						or deletion of your personal data at any time through your account settings
						or by contacting us.
					</p>
					<p>
						<strong> Opt-Out:</strong>You can opt out of marketing emails, and we
						provide controls over how your data is used for matching.
					</p>
				</section>
				<section className="mb-8">
					<h2 className="text-xl font-semibold text-gray-900 mb-2">6. Data Retention</h2>
					<p>
						<strong> Policy:</strong>
						We retain your data for as long as your account is active or as needed to
						provide our services. Post-account deletion, data is anonymized or deleted
						within 30 days, unless legally required to retain.
					</p>
				</section>
				<section className="mb-8">
					<h2 className="text-xl font-semibold text-gray-900 mb-2">
						7.International Transfers
					</h2>
					<p>
						<strong> Data Storage: </strong>
						Your data might be processed in countries outside your jurisdiction. We
						ensure this data transfer complies with applicable data protection laws,
						using mechanisms like Standard Contractual Clauses or Privacy Shield.
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
						For any questions or to exercise your data rights, please contact us at
						[email@lovetamin.com (mailto:email@lovetamin.com)].
					</p>
				</section>
			</div>
			<Footer />
		</main>
	);
};

export default TermsAndPrivacy;
