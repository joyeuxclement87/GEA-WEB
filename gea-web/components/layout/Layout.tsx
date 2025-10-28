import { motion } from 'framer-motion';
import TopBar from '../header/TopBar';
import Navbar from '../header/Navbar';
import Footer from '../footer/Footer';
import { commonStyles } from '../../constants/styles';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <div className="min-h-screen bg-[#1e3a8a] relative">
    <div className={`absolute inset-0 ${commonStyles.gradientBg}`}>
      <div className={`absolute inset-0 ${commonStyles.patternOverlay}`} />
      <motion.div
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
          opacity: [0.3, 0.5]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"
      />
    </div>
    <div className="relative z-10">
      <TopBar />
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
    
    {/* Common Decorative Elements */}
    <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#caa04d]/20 rounded-full blur-3xl" />
    <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
  </div>
);

export default Layout;
