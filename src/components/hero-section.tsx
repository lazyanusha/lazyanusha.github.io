const HeroSection = () => {
	return (
		<div className="h-[70vh] bg-purple-100 flex flex-col justify-center items-center">
			<h1>Anusha Shrestha</h1>
			<span>Junior Full-Stack Web Developer Intern at MedicSewa</span>
			<p>
				Junior Full-Stack Web Developer Intern at MedicSewa, contributing to the
				development of real-world telehealth applications using modern web
				technologies.
			</p>
			<div className="flex">
				<button type="button">Get In Touch</button>
				<a
					href="/resume/Anusha_Full-Stack_Web_Developer_Intern_Resume.pdf"
					target="_blank"
					rel="noopener noreferrer"
				>
					View Resume
				</a>

				<a
					href="/resume/Anusha_Full-Stack_Web_Developer_Intern_Resume.pdf"
					download
				>
					Download PDF
				</a>
			</div>
			<span>Kathmandu, Nepal</span>
		</div>
	);
};
export default HeroSection;
