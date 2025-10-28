export const colors = {
  primary: '#1e3a8a',
  secondary: '#3b82f6',
  accent: '#caa04d',
  accentLight: '#e2c68d',
};

export const commonStyles = {
  glassmorphism: 'backdrop-blur-md bg-white/10 border border-white/10',
  hoverEffect: 'hover:bg-white/20 transition-all duration-300',
  cardBase: 'backdrop-blur-md bg-white/10 p-6 rounded-slight hover:bg-white/20 transition-all duration-300 border border-white/10 group',
  gradientBg: 'bg-gradient-to-br from-[#1e3a8a]/90 to-[#3b82f6]/80',
  patternOverlay: "bg-[url('/patterns/circuit-board.svg')] opacity-5",
  heading: 'text-[#caa04d] font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#caa04d] to-[#e2c68d] filter drop-shadow-lg',
};

export const animations = {
  fadeIn: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  },
  hoverScale: {
    whileHover: { scale: 1.05 }
  }
};
