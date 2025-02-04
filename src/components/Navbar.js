"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
	return (
		<>
			<nav className="bg-[#FFFAFA] p-3">
				<div className="container-fluid">
					{/* Desktop Menu */}
					<div className="flex justify-between items-center">
						<ul className=" navbar-nav hidden lg:flex">
							<li className="nav-item font-semibold text-xl">
								<Link
									href="/#misson"
									className="text-black hover:text-[#67295F] transition-colors duration-300"
								>
									Missions
								</Link>
							</li>
						</ul>

						<Link href="/" className="m-0">
							<Image
								src="/images/rwlogo.png"
								width={200}
								height={50}
								alt="Logo"
								className="object-contain"
							/>
						</Link>

						<Link href="/#download_sec">
							<button className="border-2 border-black px-6 py-2 bg-black text-white rounded-3xl text-sm font-bold hover:scale-105 transition-all duration-500">
								Join Us
							</button>
						</Link>
					</div>
				</div>
			</nav>
		</>
	);
}
