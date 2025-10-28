import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaTrophy, FaBuilding, FaUsers, FaMedal } from 'react-icons/fa';

const stats = [
	{ number: 15, label: 'Years of Experience', icon: FaTrophy },
	{ number: 200, label: 'Completed Projects', icon: FaBuilding },
	{ number: 50, label: 'Satisfied Clients', icon: FaUsers },
	{ number: 10, label: 'Awards & Recognitions', icon: FaMedal },
];

const Counter = ({ target }) => {
	const [count, setCount] = useState(0);
	const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
	const controls = useAnimation();

	useEffect(() => {
		if (inView) {
			let start = 0;
			const step = target / 50; // Adjust speed here
			const timer = setInterval(() => {
				start += step;
				if (start > target) {
					setCount(target);
					clearInterval(timer);
				} else {
					setCount(Math.floor(start));
				}
			}, 30);
			return () => clearInterval(timer);
		}
	}, [inView, target]);

	return <span ref={ref}>{count}+</span>;
};

const Stats = () => (
	<section className="relative py-24 overflow-hidden bg-[#1e3a8a]">
		{/* Background layers */}
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

		<div className="container mx-auto px-4 relative">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
			>
				{stats.map(({ number, label, icon: Icon }) => (
					<motion.div
						key={label}
						whileHover={{ scale: 1.05 }}
						className="backdrop-blur-md bg-white/10 p-6 rounded-slight hover:bg-white/20 transition-all duration-300 border border-white/10 group"
					>
						<div className="flex items-center justify-center mb-4">
							<Icon className="w-10 h-10 text-[#caa04d] group-hover:scale-110 transition-transform duration-300" />
						</div>

						<h3 className="text-4xl font-bold text-[#caa04d] mb-2 text-center">
							<Counter target={number} />
						</h3>

						<p className="text-white text-sm font-medium text-center">
							{label}
						</p>
					</motion.div>
				))}
			</motion.div>
		</div>

		{/* Enhanced Decorative Elements */}
		<div className="absolute -top-20 -right-20 w-64 h-64 bg-[#caa04d]/20 rounded-full blur-3xl" />
		<div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
	</section>
);

export default Stats;
