import { Navbar } from "@/components/Navbar"
import { FaTwitter, FaDiscord, FaGithub, FaMusic, FaYoutube } from 'react-icons/fa'
import { motion } from "framer-motion"

// Add a gradient animation component
const GradientBackground = () => (
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10 animate-gradient" />
    <div className="absolute inset-0 bg-[url('/grid.png')] opacity-20" />
  </div>
)

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-100 relative overflow-hidden">
      <GradientBackground />
      <Navbar />
      
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            {/* Hero Section with enhanced styling */}
            <div className="relative">
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" 
              />
              <h1 className="text-6xl sm:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                SPIFFY Rewards
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                The next generation of social engagement rewards on the XRPL. 
                <span className="block mt-2 text-purple-400">Connect, engage, and earn - no ads required.</span>
              </p>
              <div className="relative mb-12">
                <div className="text-2xl font-bold text-purple-500 animate-pulse">
                  Coming Soon
                </div>
              </div>
            </div>

            {/* Features Section with hover effects */}
            <div className="grid md:grid-cols-3 gap-8 mt-16 text-left">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="group bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]"
              >
                <FaMusic className="text-purple-500 text-3xl mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2">Stream & Earn</h3>
                <p className="text-gray-400">
                  Listen to your favorite music and earn rewards. Hold SPIFFY tokens to unlock exclusive earning opportunities.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="group bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]"
              >
                <FaTwitter className="text-purple-500 text-3xl mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2">Social Engagement</h3>
                <p className="text-gray-400">
                  Engage with content on X (Twitter) and earn rewards. Quality interactions lead to better rewards.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="group bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]"
              >
                <FaYoutube className="text-purple-500 text-3xl mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2">YouTube Interaction</h3>
                <p className="text-gray-400">
                  Comment and engage with YouTube content to earn rewards. Meaningful interactions are valued.
                </p>
              </motion.div>
            </div>

            {/* How It Works Section with enhanced steps */}
            <div className="mt-24 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-blue-500/5 rounded-3xl" />
              <h2 className="text-4xl font-bold mb-12 relative">How It Works</h2>
              <div className="grid md:grid-cols-4 gap-6 relative">
                <div className="relative group">
                  <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]">
                    <span className="absolute -top-4 left-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm group-hover:scale-110 transition-transform">
                      Step 1
                    </span>
                    <h3 className="text-lg font-bold mb-2 mt-2">Connect Wallet</h3>
                    <p className="text-gray-400">Connect your XRPL wallet and verify SPIFFY token holdings</p>
                  </div>
                </div>

                <div className="relative group">
                  <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]">
                    <span className="absolute -top-4 left-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm group-hover:scale-110 transition-transform">
                      Step 2
                    </span>
                    <h3 className="text-lg font-bold mb-2 mt-2">Choose Activity</h3>
                    <p className="text-gray-400">Select from various engagement activities</p>
                  </div>
                </div>

                <div className="relative group">
                  <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]">
                    <span className="absolute -top-4 left-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm group-hover:scale-110 transition-transform">
                      Step 3
                    </span>
                    <h3 className="text-lg font-bold mb-2 mt-2">Engage</h3>
                    <p className="text-gray-400">Participate in meaningful interactions</p>
                  </div>
                </div>

                <div className="relative group">
                  <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]">
                    <span className="absolute -top-4 left-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm group-hover:scale-110 transition-transform">
                      Step 4
                    </span>
                    <h3 className="text-lg font-bold mb-2 mt-2">Earn Rewards</h3>
                    <p className="text-gray-400">Receive reward tokens for your engagement</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Social Links */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-24 flex justify-center space-x-8"
            >
              <a href="#" className="group">
                <div className="p-3 rounded-full bg-gray-800/50 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]">
                  <FaTwitter size={24} className="text-gray-400 group-hover:text-purple-500 transition-colors" />
                </div>
              </a>
              <a href="#" className="group">
                <div className="p-3 rounded-full bg-gray-800/50 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]">
                  <FaDiscord size={24} className="text-gray-400 group-hover:text-purple-500 transition-colors" />
                </div>
              </a>
              <a href="#" className="group">
                <div className="p-3 rounded-full bg-gray-800/50 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]">
                  <FaGithub size={24} className="text-gray-400 group-hover:text-purple-500 transition-colors" />
                </div>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
