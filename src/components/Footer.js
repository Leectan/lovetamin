import Image from "next/image";
import Link from "next/link";

export default function Footer() {
	const sections = [
		{
			title: "Index",
			links: [
				{ text: "Mission", href: "#mission" },
				{ text: "Contact", href: "/contact" },
			],
		},
		{
			title: "Resources",
			links: [
				{ text: "Safe Dating Tips", href: "#" },
				{ text: "FAQ", href: "#" },
				{ text: "Trust & Safety", href: "#" },
			],
		},
		{
			title: "Legal",
			links: [
				{ text: "Security", href: "#" },
				{ text: "Terms and Privacy", href: "/terms-and-privacy" },
				{ text: "Cookie Policy", href: "#" },
				{ text: "Cookie Settings", href: "#" },
			],
		},
	];

	const socialLinks = [
		{ icon: "bi-twitter", href: "#" },
		{ icon: "bi-instagram", href: "#" },
	];

	return (
		<section className="bg-[#FFFAFA] py-5 mt-5 px-4">
			<footer className="mt-5">
				<div className="border-b-2 border-black/20">
					<div className="ms-3 pb-5" data-aos="fade-right" data-aos-duration="1000">
						<button className="mb-5 px-12 py-2 border-gray-950 border-2 text-base font-bold rounded-3xl transition-transform">
							Visit our newsroom
						</button>
					</div>
				</div>

				<div className="container-fluid pt-10">
					<div className="mt-5" id="download_sec">
						<div className="grid md:grid-cols-2 gap-4">
							<div data-aos="fade-right" data-aos-duration="1000">
								<div className="flex flex-col justify-between h-full">
									<Link href="/" className="text-black">
										<div className="w-[200px]">
											<Image
												src="/images/rwlogo.png"
												alt="Logo"
												width={200}
												height={50}
											/>
										</div>
									</Link>
									<div className="mt-5">
										<h3 className="font-semibold text-2xl">Get the app!</h3>
										<div className="my-3 flex items-center">
											<Image
												src="/images/applestoreimg.webp"
												alt="App Store"
												width={150}
												height={50}
												className="me-3 my-3 md:my-0"
											/>
											<Image
												src="/images/playstoreimg.png"
												alt="Play Store"
												width={150}
												height={50}
												className="rounded-lg border-2 border-[#666666]"
											/>
										</div>
									</div>

									<div
										className="hidden md:flex mt-4"
										data-aos="fade-right"
										data-aos-duration="1000"
									>
										<span className="text-black/70 me-4">
											© 2024 LoveTamin Inc.
										</span>
										<span className="text-black">
											<i className="bi bi-globe" /> English (UK)
										</span>
									</div>
								</div>
							</div>

							<div className="grid md:grid-cols-3 gap-4">
								{sections.map((section, i) => (
									<div
										key={i}
										className="py-4 lg:py-0 text-black border-b md:border-0"
									>
										<p className="mb-4">{section.title}</p>
										<div className="font-semibold flex flex-col">
											{section.title === "Index" && (
												<>
													{section.links.map((link, j) => (
														<div key={j} className="flex items-center">
															<Link
																href={link.href}
																className="my-2 text-black hover:text-[rgb(103,41,95)]"
															>
																{link.text}
															</Link>
															{link.text === "Contact" && (
																<div className="flex ml-4">
																	{socialLinks.map(
																		(social, k) => (
																			<Link
																				key={k}
																				href={social.href}
																				className="text-black hover:text-[rgb(103,41,95)] mr-4"
																			>
																				<i
																					className={`bi ${social.icon}`}
																				></i>
																			</Link>
																		)
																	)}
																</div>
															)}
														</div>
													))}
												</>
											)}
											{section.title !== "Index" &&
												section.links.map((link, j) => (
													<Link
														key={j}
														href={link.href}
														className="my-2 text-black hover:text-[rgb(103,41,95)]"
													>
														{link.text}
													</Link>
												))}
										</div>
									</div>
								))}
							</div>
						</div>

						<div className="pt-4 flex md:hidden">
							<span className="text-black/70 me-4">© 2024 LoveTamin Inc.</span>
							<span className="text-black">
								<i className="bi bi-globe" /> English (UK)
							</span>
						</div>
					</div>
				</div>
			</footer>
		</section>
	);
}
