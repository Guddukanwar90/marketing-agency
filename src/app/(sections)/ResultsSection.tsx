
'use client';

import { useState, useEffect } from 'react';
import { 
  Award, 
  Clock, 
  TrendingUp, 
  Users, 
  Shield, 
  Zap,
  CheckCircle,
  BarChart3,
  Target,
  Globe,
  Star,
  Rocket,
  ChevronRight
} from 'lucide-react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef } from 'react';

const ResultsSection = () => {
  const [metrics, setMetrics] = useState({
    revenueGenerated: 0,
    roi: 0,
    clientRetention: 0,
    campaignsManaged: 0
  });

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  // Handle Book Free Strategy Session button click
  const handleBookStrategySession = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
      // Animate counters
      const duration = 2000; // 2 seconds
      const steps = 60;
      
      const animateValue = (start: number, end: number, callback: (value: number) => void) => {
        const increment = (end - start) / steps;
        let current = start;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= end) {
            current = end;
            clearInterval(timer);
          }
          callback(current);
        }, duration / steps);
      };

      animateValue(0, 2.1, (value) => setMetrics(prev => ({ ...prev, revenueGenerated: value })));
      animateValue(0, 92, (value) => setMetrics(prev => ({ ...prev, clientRetention: value })));
      animateValue(0, 320, (value) => setMetrics(prev => ({ ...prev, roi: value })));
      animateValue(0, 150, (value) => setMetrics(prev => ({ ...prev, campaignsManaged: value })));
    }
  }, [isInView, controls]);

  const coreValues = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Data-Driven Strategy",
      description: "Every decision backed by analytics and market research for maximum ROI",
      color: "from-blue-500 to-cyan-500",
      points: ["A/B Testing", "Market Analysis", "Competitor Research", "ROI Tracking"]
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Rapid Execution",
      description: "Campaigns live within 48 hours. Fast results, faster growth",
      color: "from-orange-500 to-amber-500",
      points: ["48-Hour Setup", "Weekly Optimization", "24/7 Monitoring", "Quick Pivots"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Transparent Reporting",
      description: "Real-time dashboards. See exactly where every rupee is spent",
      color: "from-green-500 to-emerald-500",
      points: ["Live Dashboards", "Weekly Reports", "Direct Access", "No Hidden Costs"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Dedicated Team",
      description: "Your own account manager, strategist, and creative team in Jaipur",
      color: "from-purple-500 to-pink-500",
      points: ["Account Manager", "Creative Team", "Analytics Expert", "24/7 Support"]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Audit",
      description: "Deep dive into your business, goals, and current marketing",
      duration: "1-2 Days",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "bg-blue-100 text-blue-600"
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Custom marketing blueprint with clear KPIs and timeline",
      duration: "2-3 Days",
      icon: <Target className="w-6 h-6" />,
      color: "bg-green-100 text-green-600"
    },
    {
      step: "03",
      title: "Execution & Launch",
      description: "Campaign deployment across all channels with precision",
      duration: "1-2 Days",
      icon: <Rocket className="w-6 h-6" />,
      color: "bg-orange-100 text-orange-600"
    },
    {
      step: "04",
      title: "Optimization & Growth",
      description: "Continuous testing, analysis, and scaling of successful tactics",
      duration: "Ongoing",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "bg-purple-100 text-purple-600"
    }
  ];

  const certifications = [
    { name: "Google Ads Certified", logo: "G", color: "bg-blue-500" },
    { name: "Meta Blueprint", logo: "M", color: "bg-blue-600" },
    { name: "HubSpot Certified", logo: "H", color: "bg-orange-500" },
    { name: "SEO Certified", logo: "SEO", color: "bg-green-500" },
    { name: "Microsoft Advertising", logo: "MS", color: "bg-teal-500" },
  ];

  return (
    <section id="why-choose-us" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-transparent rounded-full filter blur-3xl opacity-30" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-green-100 to-transparent rounded-full filter blur-3xl opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Award className="w-4 h-4" />
            Why Choose MarketingPro
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Results That <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">Speak Louder</span> Than Words
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600">
            We don't just promise growth—we deliver measurable, data-backed results. 
            See the numbers that make us Jaipur's most trusted marketing partner.
          </p>
        </motion.div>

        {/* Live Metrics Dashboard */}
        <div ref={ref} className="mb-16 md:mb-20">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.2 }
              }
            }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
          >
            {/* Revenue Generated */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div className="text-sm font-medium text-gray-500">Revenue Generated</div>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
                ₹{metrics.revenueGenerated.toFixed(1)}Cr+
              </div>
              <div className="text-sm text-green-600 font-medium">For our clients</div>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Clock className="w-3 h-3" />
                  <span>Last 12 months</span>
                </div>
              </div>
            </motion.div>

            {/* Average ROI */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { delay: 0.1 } }
              }}
              className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="text-sm font-medium text-gray-500">Average ROI</div>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
                {Math.floor(metrics.roi)}%
              </div>
              <div className="text-sm text-green-600 font-medium">Across all campaigns</div>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${metrics.roi / 3.2}%` }}
                    transition={{ duration: 2, delay: 0.5 }}
                    className="h-full bg-gradient-to-r from-green-500 to-emerald-500"
                  />
                </div>
              </div>
            </motion.div>

            {/* Client Retention */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { delay: 0.2 } }
              }}
              className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="text-sm font-medium text-gray-500">Client Retention</div>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
                {Math.floor(metrics.clientRetention)}%
              </div>
              <div className="text-sm text-green-600 font-medium">Year-over-year</div>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                  <span className="text-xs text-gray-500 ml-2">4.9/5 rating</span>
                </div>
              </div>
            </motion.div>

            {/* Campaigns Managed */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { delay: 0.3 } }
              }}
              className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div className="text-sm font-medium text-gray-500">Campaigns Managed</div>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
                {Math.floor(metrics.campaignsManaged)}+
              </div>
              <div className="text-sm text-green-600 font-medium">Active & completed</div>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Shield className="w-3 h-3" />
                  <span>100% success rate</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Core Values */}
        <div className="mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 md:mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Core <span className="text-blue-600">Values</span>
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              What makes us different from other agencies in Jaipur and across India
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 h-full hover:border-blue-500 transition-all duration-300 hover:shadow-xl">
                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${value.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {value.icon}
                  </div>

                  {/* Title & Description */}
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600 mb-6">{value.description}</p>

                  {/* Points */}
                  <div className="space-y-2">
                    {value.points.map((point, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Timeline */}
        <div className="mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 md:mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our <span className="text-green-600">4-Step</span> Process
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A proven framework that delivers consistent results for every client
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-green-500 to-purple-500 -translate-y-1/2" />
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                    {/* Step number */}
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${step.color} font-bold text-lg mb-4`}>
                      {step.step}
                    </div>

                    {/* Icon */}
                    <div className={`p-3 rounded-lg ${step.color.split(' ')[0]} ${step.color.split(' ')[1].replace('text-', 'bg-opacity-20')} w-fit mb-4`}>
                      {step.icon}
                    </div>

                    {/* Title & Description */}
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h4>
                    <p className="text-gray-600 mb-6">{step.description}</p>

                    {/* Duration */}
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Clock className="w-4 h-4" />
                        <span>{step.duration}</span>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>

                  {/* Connector for mobile */}
                  {index < processSteps.length - 1 && (
                    <div className="lg:hidden flex justify-center my-4">
                      <div className="h-8 w-0.5 bg-gradient-to-b from-blue-500 to-green-500" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications & Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Shield className="w-4 h-4" />
              Industry Recognized
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Certified <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Experts</span>
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our team holds certifications from industry leaders, ensuring you get cutting-edge strategies
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 md:p-6 text-center hover:bg-white/10 transition-all duration-300">
                  <div className={`${cert.color} w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                    {cert.logo}
                  </div>
                  <div className="text-sm font-medium">{cert.name}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-8 pt-8 border-t border-white/10">
            <p className="text-gray-300 mb-6">
              Ready to work with certified marketing experts?
            </p>
            <button 
              onClick={handleBookStrategySession}
              className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Book Free Strategy Session
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsSection;
