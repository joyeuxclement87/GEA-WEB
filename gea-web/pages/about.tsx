import { FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const values = [
	{ title: 'Professionalism', description: 'Delivering excellence in every project' },
	{ title: 'Integrity', description: 'Building trust through transparent operations' },
	{ title: 'Innovation', description: 'Embracing modern solutions and technologies' },
	{ title: 'Sustainability', description: 'Creating lasting impact for future generations' },
];

const milestones = [
	{ year: '2018', title: 'Company Founded', description: 'Started operations in Kigali' },
	{ year: '2020', title: 'Market Expansion', description: 'Extended services across Rwanda' },
	{ year: '2022', title: 'Major Projects', description: 'Completed 50+ successful projects' },
	{ year: '2023', title: 'Innovation Award', description: 'Recognized for excellence in engineering' },
];

const team = [
	{
		name: 'John Doe',
		position: 'CEO & Founder',
		image: '/team/ceo.jpg',
		linkedin: 'https://linkedin.com/in/johndoe',
	},
	// Add more team members...
];

const AboutPage = () => {
	return (
		<div className="relative bg-[#1e3a8a] pt-[88px]"> {/* Added pt-[88px] for navbar height */}
			{/* Background Elements */}
			<div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a]/90 to-[#3b82f6]/80">
				<div className="absolute inset-0 bg-[url('/patterns/circuit-board.svg')] opacity-5" />
				<motion.div
					animate={{
						backgroundPosition: ['0% 0%', '100% 100%'],
						opacity: [0.3, 0.5],
					}}
					transition={{
						duration: 20,
						repeat: Infinity,
						repeatType: 'reverse',
					}}
					className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"
				/>
			</div>

			{/* Hero Section */}
			<div className="relative pt-12 pb-20"> {/* Changed py-20 to pt-12 pb-20 */}
				<div className="container mx-auto px-4">
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						className="text-4xl lg:text-5xl font-bold text-center font-title mb-4"
					>
						<span className="block text-[#caa04d] font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#caa04d] to-[#e2c68d] filter drop-shadow-lg">
							About Global Engineering Agency
						</span>
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
						className="text-lg lg:text-xl text-white/80 text-center max-w-3xl mx-auto"
					>
						Delivering professional construction, real estate, and hardware solutions across Rwanda.
					</motion.p>
				</div>
			</div>

			{/* Company Overview */}
			<div className="container mx-auto px-4 py-16 relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="backdrop-blur-md bg-white/10 rounded-slight border border-white/10 p-8 space-y-8"
				>
					{/* Mission & Vision */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div>
							<h2 className="text-2xl font-bold text-[#caa04d] mb-4">Our Mission</h2>
							<p className="text-white/80">
								To provide high-quality, reliable, and innovative engineering solutions for Rwanda's growth.
							</p>
						</div>
						<div>
							<h2 className="text-2xl font-bold text-[#caa04d] mb-4">Our Vision</h2>
							<p className="text-white/80">
								To be Rwanda's leading engineering, construction, real estate, and hardware provider.
							</p>
						</div>
					</div>

					{/* Values */}
					<div>
						<h2 className="text-2xl font-bold text-[#caa04d] mb-6">Our Values</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
							{values.map((value) => (
								<motion.div
									key={value.title}
									whileHover={{ scale: 1.05 }}
									className="backdrop-blur-md bg-white/10 p-6 rounded-slight hover:bg-white/20 transition-all duration-300 border border-white/10 group"
								>
									<h3 className="font-bold text-[#caa04d] mb-2">{value.title}</h3>
									<p className="text-white/80 text-sm">{value.description}</p>
								</motion.div>
							))}
						</div>
					</div>
				</motion.div>
			</div>

			{/* Timeline */}
			<div className="container mx-auto px-4 py-16 relative z-10">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-3xl font-bold text-[#caa04d] text-center mb-12"
				>
					Our Journey
				</motion.h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{milestones.map((milestone) => (
						<motion.div
							key={milestone.year}
							whileHover={{ scale: 1.05 }}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className="backdrop-blur-md bg-white/10 p-6 rounded-slight hover:bg-white/20 transition-all duration-300 border border-white/10 group"
						>
							<span className="text-[#caa04d] text-2xl font-bold">{milestone.year}</span>
							<h3 className="text-white text-lg font-bold mt-2">{milestone.title}</h3>
							<p className="text-white/80 mt-2 text-sm">{milestone.description}</p>
						</motion.div>
					))}
				</div>
			</div>

			{/* Team Section */}
			<div className="container mx-auto px-4 py-16 relative z-10">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-3xl font-bold text-[#caa04d] text-center mb-12"
				>
					Our Leadership
				</motion.h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{team.map((member) => (
						<motion.div
							key={member.name}
							whileHover={{ scale: 1.05 }}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className="backdrop-blur-md bg-white/10 p-6 rounded-slight hover:bg-white/20 transition-all duration-300 border border-white/10 group text-center"
						>
							<img
								src={member.image}
								alt={member.name}
								className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-2 border-[#caa04d]"
							/>
							<h3 className="text-xl font-bold text-[#caa04d]">{member.name}</h3>
							<p className="text-white/80 mb-4">{member.position}</p>
							<a
								href={member.linkedin}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-block text-white/60 hover:text-[#caa04d] transition-colors"
							>
								<FaLinkedin className="w-6 h-6" />
							</a>
						</motion.div>
					))}
				</div>
			</div>

			{/* Decorative Elements */}
			<div className="absolute -top-20 -right-20 w-64 h-64 bg-[#caa04d]/20 rounded-full blur-3xl" />
			<div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
		</div>
	);
};

export default AboutPage;
