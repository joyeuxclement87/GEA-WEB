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
	<section className="relative py-24 overflow-hidden">
		{/* Decorative Background */}
		<div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100/50" />
		<div className="absolute inset-0 bg-[url('/patterns/circuit-board.svg')] opacity-[0.02]" />

		<div className="container mx-auto px-4 relative">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
			>
				{stats.map(({ number, label, icon: Icon }) => (
					<motion.div
						key={label}
						whileHover={{ scale: 1.02 }}
						className="relative group"
					>
						<div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" />

						<div className="relative bg-white/40 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
							<div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] text-white mb-6 transform -rotate-6 group-hover:rotate-0 transition-transform duration-300">
								<Icon className="w-6 h-6" />
							</div>

							<h3 className="text-4xl font-bold bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] bg-clip-text text-transparent mb-2">
								<Counter target={number} />
							</h3>

							<p className="text-neutral-600 font-medium">{label}</p>

							<div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
						</div>
					</motion.div>
				))}
			</motion.div>
		</div>
	</section>
);

export default Stats;
