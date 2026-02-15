'use client';

import { motion } from 'framer-motion';
import { Download, Tv, Shield, Zap, Globe, Smartphone, CheckCircle2, ChevronRight } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const features = [
    {
      icon: <Tv className="w-6 h-6 text-red-500" />,
      title: "HD Live Streaming",
      desc: "Watch every Manchester United match in high definition without buffering."
    },
    {
      icon: <Shield className="w-6 h-6 text-red-500" />,
      title: "Ad-Free Experience",
      desc: "Enjoy matches without annoying pop-ups or redirect ads during streams."
    },
    {
      icon: <Zap className="w-6 h-6 text-red-500" />,
      title: "Live Scores & Updates",
      desc: "Get real-time match stats, lineups, and goal alerts instantly."
    },
    {
      icon: <Globe className="w-6 h-6 text-red-500" />,
      title: "Multiple Servers",
      desc: "Choose from various server options to ensure the best viewing experience."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-900 selection:text-white overflow-x-hidden">

      {/* Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-red-900/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[128px]" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-4">
            <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
            <span className="text-sm font-medium text-gray-300">v1.0.0 Now Available</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            The Ultimate App for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
              Manchester United Fans
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Watch live matches, check scores, and get updates. All in one place. Free forever.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.mediafire.com/file/r4nn1rhuiakd86v/GGMULIVE.apk/file"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-red-800 rounded-2xl font-bold text-lg shadow-lg shadow-red-900/30 hover:shadow-red-900/50 transition-all"
            >
              <Download className="w-6 h-6" />
              <span>Download APK</span>
              <div className="absolute inset-0 rounded-2xl ring-2 ring-white/20 group-hover:ring-white/40 transition-all" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#features"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-2xl font-medium text-lg transition-all backdrop-blur-sm"
            >
              <span>Learn More</span>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </motion.a>
          </div>

          <div className="pt-12 flex justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>Free Forever</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>No Registration</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>Safe & Secure</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section id="features" className="relative z-10 py-24 px-6 bg-black/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-red-500/30 hover:bg-white/10 transition-all group"
              >
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-red-500/20 to-transparent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Phone Mockup Section */}
      <section className="relative z-10 py-24 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Designed for <br />
              <span className="text-red-500">Match Day</span>
            </h2>
            <p className="text-xl text-gray-400">
              Never miss a moment. GGMULIVE brings the stadium atmosphere directly to your pocket with an intuitive interface designed specifically for United fans.
            </p>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex gap-4 items-center">
                <div className="h-10 w-10 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 font-bold">1</div>
                <div>
                  <h4 className="font-bold">Download & Install</h4>
                  <p className="text-sm text-gray-400">Get the APK file and install it on your Android device.</p>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex gap-4 items-center">
                <div className="h-10 w-10 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 font-bold">2</div>
                <div>
                  <h4 className="font-bold">Setup DNS (Critical)</h4>
                  <p className="text-sm text-gray-400">Enable Private DNS in settings to bypass ISP blocks.</p>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex gap-4 items-center">
                <div className="h-10 w-10 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 font-bold">3</div>
                <div>
                  <h4 className="font-bold">Enjoy the Match</h4>
                  <p className="text-sm text-gray-400">Open the app 15 mins before kick-off and start watching.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 relative flex justify-center">
            <div className="relative w-[300px] h-[600px] bg-black border-8 border-gray-800 rounded-[3rem] shadow-2xl shadow-red-900/50 overflow-hidden">
              {/* Screen Content Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="relative w-20 h-20 mx-auto mb-4 shadow-lg shadow-red-500/50 rounded-2xl overflow-hidden">
                    <Image
                      src="/logo.png"
                      alt="GGMULIVE Logo"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold">GGMULIVE</h3>
                  <p className="text-xs text-gray-500 mt-2">Live Match Preview</p>

                  <div className="mt-8 space-y-3">
                    <div className="h-20 bg-white/5 rounded-xl animate-pulse"></div>
                    <div className="h-20 bg-white/5 rounded-xl animate-pulse delay-75"></div>
                    <div className="h-20 bg-white/5 rounded-xl animate-pulse delay-150"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-6 border-t border-white/5 bg-black">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="relative h-10 w-10">
              <Image
                src="/logo.png"
                alt="GGMULIVE Logo"
                fill
                className="object-contain rounded-lg"
              />
            </div>
            <span className="font-bold text-lg">GGMULIVE</span>
          </div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} GGMULIVE. Made for fans by fans.
          </p>
          <div className="flex gap-6">
            <a href="https://t.me/ggmulive" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Telegram Channel</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
