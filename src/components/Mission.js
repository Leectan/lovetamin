import Image from "next/image";

export default function Mission() {
	return (
		<section className="py-10 my-10">
			<div className="container mx-auto px-3 md:px-0">
				<div className="flex justify-center flex-col md:flex-row gap-4">
					<div data-aos="fade-right" data-aos-duration="1000" className="w-full md:w-1/2 flex justify-center items-center">
						<Image
							src="/images/r1.jpg"
							alt="Mission"
							width={400}
							height={400}
							className="rounded-full object-cover w-[250px] h-[250px] md:w-[400px] md:h-[400px]"
						/>
					</div>

					<div
						data-aos="fade-left"
						data-aos-duration="1200"
						className="flex items-center w-full md:w-1/2"
					>
						<div className="md:pl-4 pt-3 lg:pt-0 text-center md:text-left">
							<p className="font-semibold text-[rgb(103,41,95)] text-base">
								Our Mission
							</p>
							<h1 className="font-semibold text-[27px] md:text-[50px] font-serif leading-tight">
								Redefine dating & healthy relationships
							</h1>
							<p className="font-semibold text-xl text-[rgb(72,72,72,0.69)] mt-2">
								No more mind-numbing swiping. Return to the core values of dating by
								meeting someone you like in real life with common interests and
								goals, and to foster a healthy relationship.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
