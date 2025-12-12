
'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, Play, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [currentHeadline, setCurrentHeadline] = useState(0);
  
  const headlines = [
    "Drive 300% More Qualified Leads",
    "Increase Your ROAS by 5X",
    "Grow Your Brand Authority",
    "Outrank Your Competition"
  ];

  // Rotate headlines every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadline((prev) => (prev + 1) % headlines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [headlines.length]);

  const stats = [
    { value: "150+", label: "Brands Trusted" },
    { value: "₹2.1Cr", label: "Revenue Generated" },
    { value: "320%", label: "Average ROI" },
    { value: "92%", label: "Client Retention" }
  ];

  // Handle CTA button click - scroll to contact section
  const handleBookCallClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle video button click
  const handleWatchVideoClick = () => {
    // Assuming you have a video named "success-story.mp4" in public/videos/
    const videoUrl = '/videos/success-story.mp4';
    
    // You can implement different video handling strategies:
    
    // Option 1: Open video in a modal
    // This would require creating a video modal component
    
    // Option 2: Open video in new tab
    window.open(videoUrl, '_blank');
    
    // Option 3: Create a video player inline
    // You might want to create a separate modal component for this
    
    // For now, I'll show an alert with instructions
    alert("Video functionality would open: " + videoUrl + "\n\nIn production, this would open a modal or new tab with the success story video.");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-emerald-50 overflow-hidden pt-16 md:pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm mb-8">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-blue-100 border-2 border-white" />
                ))}
              </div>
              <span className="text-xs md:text-sm font-medium text-gray-700">
                Trusted by 150+ brands across India
              </span>
              <Check className="w-3 h-3 md:w-4 md:h-4 text-green-500" />
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              <span className="block">Digital Marketing</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
                That Actually
              </span>
            </h1>
            
            {/* Animated Headlines Container */}
            <div className="h-16 md:h-20 mb-6 overflow-hidden relative">
              <div className="relative h-full">
                {headlines.map((headline, index) => (
                  <motion.div
                    key={headline}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ 
                      y: index === currentHeadline ? 0 : -30,
                      opacity: index === currentHeadline ? 1 : 0 
                    }}
                    transition={{ 
                      duration: 0.6, 
                      ease: "easeInOut",
                      delay: index === currentHeadline ? 0 : 0.1 
                    }}
                    className="absolute inset-0 flex items-center"
                  >
                    <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                      {headline}
                    </span>
                  </motion.div>
                ))}
              </div>
              
              {/* Animated underline */}
              <motion.div
                key={currentHeadline}
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mt-2"
              />
            </div>

            {/* Sub-headline */}
            <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-10 max-w-2xl">
              We help businesses in Jaipur and across India grow revenue with data-driven 
              marketing strategies. Get measurable results or your money back.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-12">
              <button 
                onClick={handleBookCallClick}
                className="group bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold text-base md:text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 md:gap-3"
              >
                Book Free Strategy Call
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform" />
              </button>
              
              <button 
                onClick={handleWatchVideoClick}
                className="bg-white text-gray-800 px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold text-base md:text-lg border-2 border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 md:gap-3"
              >
                <Play className="w-4 h-4 md:w-5 md:h-5" />
                <span>Watch Success Story (2 min)</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  className="text-center bg-white/50 backdrop-blur-sm p-3 md:p-4 rounded-xl border border-gray-100"
                >
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Dashboard Mockup */}
            <div className="relative bg-white rounded-2xl shadow-2xl p-4 md:p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500" />
                  <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-500" />
                  <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500" />
                </div>
                <div className="text-xs md:text-sm text-gray-500">Live Campaign Dashboard</div>
              </div>
              
              {/* Chart Animation */}
              <div className="h-48 md:h-64 bg-gradient-to-b from-blue-50 to-white rounded-xl p-3 md:p-4">
                <div className="flex items-end h-32 md:h-40 gap-1 md:gap-2">
                  {[40, 60, 80, 100, 85, 95, 120].map((height, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className="flex-1 bg-gradient-to-t from-blue-500 to-blue-300 rounded-t-lg"
                    />
                  ))}
                </div>
                <div className="flex justify-between mt-3 md:mt-4 text-xs md:text-sm text-gray-500">
                  <span>Before</span>
                  <span className="font-semibold text-blue-600">+450% Growth</span>
                  <span>After 3 Months</span>
                </div>
              </div>
              
              {/* Metrics */}
              <div className="grid grid-cols-3 gap-2 md:gap-4 mt-4 md:mt-6">
                <div className="text-center p-2 md:p-3 bg-blue-50 rounded-lg">
                  <div className="text-lg md:text-xl font-bold text-blue-600">3.2M</div>
                  <div className="text-xs text-gray-600">Impressions</div>
                </div>
                <div className="text-center p-2 md:p-3 bg-green-50 rounded-lg">
                  <div className="text-lg md:text-xl font-bold text-green-600">₹42L</div>
                  <div className="text-xs text-gray-600">Revenue</div>
                </div>
                <div className="text-center p-2 md:p-3 bg-orange-50 rounded-lg">
                  <div className="text-lg md:text-xl font-bold text-orange-500">520%</div>
                  <div className="text-xs text-gray-600">ROI</div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-4 -left-4 md:-top-6 md:-left-6 bg-white p-3 md:p-4 rounded-xl shadow-lg border"
            >
              <div className="text-xs md:text-sm font-semibold text-gray-900">Client Results</div>
              <div className="text-xl md:text-2xl font-bold text-green-600">+320%</div>
            </motion.div>
            
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
              className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-white p-3 md:p-4 rounded-xl shadow-lg border"
            >
              <div className="text-xs md:text-sm font-semibold text-gray-900">Jaipur Based</div>
              <div className="text-base md:text-lg font-bold text-blue-600">Since 2023</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="text-xs md:text-sm text-gray-400">Scroll to explore</div>
        <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-gray-300 rounded-full mx-auto mt-1 md:mt-2">
          <div className="w-1 h-2 md:w-1 md:h-3 bg-gray-400 rounded-full mx-auto mt-1 md:mt-2" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
