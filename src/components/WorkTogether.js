import Image from "next/image";
import Link from "next/link";

export default function WorkTogether() {
	return (
		<section className="pt-3 md:pt-5 md:mt-5" id="misson">
			<div
				className="w-full mb-5 flex justify-center items-center"
				data-aos="fade-up"
				data-aos-duration="500"
			>
				<div className="px-4 md:px-0 my-5 md:ps-5 md:mt-0 pt-5 md:pt-0 text-center">
					<p className="font-semibold text-[rgb(103,41,95)] text-base">
						Let's Work Together
					</p>
					<h1 className="font-serif text-[27px] md:text-[50px] font-semibold leading-tight">
						Lovetamin encourages you to share your secrets to a joyful relationship
					</h1>
					<p className="font-semibold text-xl text-[rgb(72,72,72,0.69)] my-4">
						Not designed to be deleted. Lovetamin aims to be with you every journey of
						your happy relationship
					</p>
					<Link href="#download_sec">
						<button className="px-6 bg-black text-white border-0 rounded-3xl py-2.5 text-sm font-bold hover:scale-105 transition-transform">
							Join Us
						</button>
					</Link>
				</div>
			</div>

			<div className="container mx-auto px-0 my-5">
				<div className="flex justify-center">
					<div className="md:w-2/3 px-3 flex justify-between items-center gap-3">
						{["/images/r2.jpg", "/images/r3.jpg", "/images/r4.jpg"].map((src, i) => (
							<div
								key={i}
								data-aos="fade-up"
								data-aos-duration={i === 1 ? 600 : 1500}
							>
								<Image
									src={src}
									alt={`Image ${i + 2}`}
									width={300}
									height={429}
									className="rounded w-full h-[214px] md:h-[429px] object-cover"
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
