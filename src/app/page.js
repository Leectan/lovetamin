"use client";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import WorkTogether from "@/components/WorkTogether";
import Footer from "@/components/Footer";
import AOS from "aos";

export default function Home() {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<main className="overflow-x-hidden bg-[#FFFAFA]">
			<Navbar />
			<Hero />
			<Mission />
			<WorkTogether />
			<Footer />
		</main>
	);
}
