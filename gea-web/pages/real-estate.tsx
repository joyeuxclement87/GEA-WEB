import { motion } from 'framer-motion';
import { FaHome, FaSearch, FaChartLine, FaHandshake, FaKey, FaClipboardCheck } from 'react-icons/fa';

const services = [
	{
		icon: FaHome,
		title: 'Property Development',
		description:
			'Modern residential and commercial property development projects with sustainable designs.',
	},
	{
		icon: FaSearch,
		title: 'Property Search',
		description:
			'Customized property search services to match your specific requirements and preferences.',
	},
	{
		icon: FaHandshake,
		title: 'Property Management',
		description:
			'Comprehensive property management services for residential and commercial properties.',
	},
	{
		icon: FaChartLine,
		title: 'Investment Advisory',
		description:
			'Expert guidance on real estate investments and market opportunities in Rwanda.',
	},
	{
		icon: FaKey,
		title: 'Sales & Rentals',
		description: 'Professional assistance in buying, selling, and renting properties.',
	},
	{
		icon: FaClipboardCheck,
		title: 'Property Valuation',
		description: 'Accurate property valuation services and market analysis reports.',
	},
];

const RealEstatePage = () => {
	return (
		<div className="relative bg-[#1e3a8a] pt-[88px]">
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
			<div className="relative pt-12 pb-20">
				<div className="container mx-auto px-4">
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						className="text-4xl lg:text-5xl font-bold text-center font-title mb-4"
					>
						<span className="block text-[#caa04d] font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#caa04d] to-[#e2c68d] filter drop-shadow-lg">
							Real Estate Services
						</span>
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
						className="text-lg lg:text-xl text-white/80 text-center max-w-3xl mx-auto"
					>
						Premium real estate solutions for residential and commercial
						properties in Rwanda.
					</motion.p>
				</div>
			</div>

			{/* Services Grid */}
			<div className="container mx-auto px-4 py-16 relative z-10">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{services.map((service, index) => (
						<motion.div
							key={service.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
							whileHover={{ scale: 1.05 }}
							className="backdrop-blur-md bg-white/10 p-6 rounded-slight hover:bg-white/20 transition-all duration-300 border border-white/10 group"
						>
							<service.icon className="w-12 h-12 text-[#caa04d] mb-4 group-hover:scale-110 transition-transform duration-300" />
							<h3 className="text-xl font-bold text-[#caa04d] mb-3">
								{service.title}
							</h3>
							<p className="text-white/80 text-sm">
								{service.description}
							</p>
						</motion.div>
					))}
				</div>
			</div>

			{/* CTA Section */}
			<div className="container mx-auto px-4 py-16 relative z-10 text-center">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="backdrop-blur-md bg-white/10 p-8 rounded-slight border border-white/10 max-w-3xl mx-auto"
				>
					<h2 className="text-2xl font-bold text-[#caa04d] mb-4">
						Looking for Your Perfect Property?
					</h2>
					<p className="text-white/80 mb-6">
						Contact us today to explore our available properties and investment
						opportunities.
					</p>
					<button className="bg-[#caa04d] text-white px-8 py-4 rounded-slight hover:bg-[#caa04d]/80 transition-all duration-300">
						Schedule Consultation
					</button>
				</motion.div>
			</div>

			{/* Decorative Elements */}
			<div className="absolute -top-20 -right-20 w-64 h-64 bg-[#caa04d]/20 rounded-full blur-3xl" />
			<div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
		</div>
	);
};

export default RealEstatePage;
