import { FaBuilding, FaHome, FaTools, FaChartLine, FaPaintRoller, FaWrench } from 'react-icons/fa';
import { motion } from 'framer-motion';

const services = [
	{
		icon: FaBuilding,
		title: 'Construction',
		description: 'Expert construction services with modern engineering solutions.',
		gradient: 'from-blue-600 to-blue-400',
	},
	{
		icon: FaHome,
		title: 'Real Estate',
		description: 'Professional real estate management and development.',
		gradient: 'from-indigo-600 to-indigo-400',
	},
	{
		icon: FaTools,
		title: 'Hardware',
		description: 'Quality tools and construction materials supply.',
		gradient: 'from-purple-600 to-purple-400',
	},
];

const Services = () => {
	return (
		<section className="relative py-24 overflow-hidden">
			{/* Decorative Background */}
			<div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100/50" />
			<div className="absolute inset-0 bg-[url('/patterns/circuit-board.svg')] opacity-[0.02]" />

			<div className="container mx-auto px-4 relative">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl font-bold bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] bg-clip-text text-transparent mb-4">
						Our Services
					</h2>
					<p className="text-neutral-600 max-w-2xl mx-auto">
						Comprehensive solutions in Construction, Real Estate, and Hardware,
						tailored for Rwanda's growth.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{services.map((service, index) => (
						<motion.div
							key={service.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: index * 0.2 }}
						>
							<div className="group relative">
								{/* Hover Glow Effect */}
								<div
									className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
								/>

								{/* Card Content */}
								<div className="relative bg-white/40 backdrop-blur-xl p-8 rounded-slight border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
									{/* Icon Container */}
									<div
										className={`w-16 h-16 rounded-none bg-gradient-to-r ${service.gradient} text-white flex items-center justify-center mb-6 transform -rotate-6 group-hover:rotate-0 transition-transform duration-300`}
									>
										<service.icon className="w-8 h-8" />
									</div>

									<h3 className="text-2xl font-bold text-neutral-800 mb-4">
										{service.title}
									</h3>

									<p className="text-neutral-600 mb-6">
										{service.description}
									</p>

									<button className="text-[#1e3a8a] font-medium flex items-center group-hover:text-[#3b82f6] transition-colors duration-300 border border-[#1e3a8a] px-4 py-2 hover:bg-[#1e3a8a] hover:text-white">
										Learn More
										<svg
											className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M9 5l7 7-7 7"
											/>
										</svg>
									</button>

									{/* Bottom Gradient Line */}
									<div
										className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${service.gradient} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}
									/>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
