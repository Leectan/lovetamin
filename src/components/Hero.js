"use client";
import { useState } from "react";

export default function Hero() {
	const [isPlaying, setIsPlaying] = useState(true);

	const toggleVideo = () => {
		const video = document.getElementById("videoPlayer");
		if (video.paused) {
			video.play();
			setIsPlaying(true);
		} else {
			video.pause();
			setIsPlaying(false);
		}
	};

	return (
		<section
			className="p-0 rounded-[20px] overflow-hidden"
			data-aos="fade-up"
			data-aos-duration="1200"
		>
			<div className="container-fluid">
				<div className="flex flex-col md:flex-row md:h-[500px]">
					<div
						className="md:w-1/2 bg-[#FFF3FE] text-center p-4"
						data-aos="fade-right"
						data-aos-duration="1200"
					>
						<div className="relative h-full w-full flex justify-center items-center lg:px-10">
							<div>
								<h1 className="text-center text-black font-semibold text-[27px] md:text-[50px] mb-2">
									Beyond swiping, Discover love redefined
								</h1>
								<a href="#download_sec" className="text-decoration-none">
									<button className="border-0 px-4 bg-black text-white rounded-3xl py-2 text-sm font-bold mt-3 md:mt-5 hover:scale-105 transition-transform">
										Download now
									</button>
								</a>
							</div>
						</div>
					</div>

					<div
						className="md:w-1/2 p-0 h-full"
						data-aos="fade-left"
						data-aos-duration="1200"
					>
						<div className="relative">
							<video
								id="videoPlayer"
								className="h-full w-full object-cover"
								loop
								muted
								autoPlay
							>
								<source src="/videos/r1-demo.mp4" type="video/mp4" />
							</video>
							<button
								onClick={toggleVideo}
								className="absolute bottom-0 left-0 m-3 text-white text-3xl"
							>
								<i className={`bi bi-${isPlaying ? "pause" : "play"}`}></i>
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
