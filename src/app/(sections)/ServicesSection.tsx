
'use client';

import { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  Target, 
  Globe, 
  Code, 
  PenTool, 
  BarChart3,
  ArrowRight,
  Check,
  X,
  Sparkles,
  MessageSquare,
  ShoppingCart,
  Video,
  Mail,
  Users,
  Search
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ServicesSection = () => {
  const [activeService, setActiveService] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const services = [
    {
      id: 'social-media',
      title: 'Social Media Marketing',
      description: 'Grow your brand presence across Instagram, Facebook, LinkedIn, and YouTube with engaging content and strategic campaigns.',
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-50',
      features: [
        'Content Strategy & Calendar',
        'Community Management',
        'Influencer Partnerships',
        'Paid Social Advertising',
        'Analytics & Reporting'
      ],
      results: 'Avg. 200% engagement increase in 3 months',
      category: 'growth',
      price: '₹25,000/month'
    },
    {
      id: 'paid-ads',
      title: 'Paid Advertising',
      description: 'Maximize ROI with data-driven Google Ads, Facebook Ads, and Instagram Ads campaigns that convert.',
      icon: <Target className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      features: [
        'Google Search & Display Ads',
        'Facebook/Instagram Ads',
        'LinkedIn Advertising',
        'Remarketing Campaigns',
        'Conversion Optimization'
      ],
      results: 'Average 5x ROAS for e-commerce clients',
      category: 'performance',
      price: '₹30,000/month'
    },
    {
      id: 'seo',
      title: 'SEO Optimization',
      description: 'Increase organic traffic and dominate search rankings with comprehensive on-page and off-page SEO strategies.',
      icon: <Globe className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      features: [
        'Keyword Research & Strategy',
        'On-Page Optimization',
        'Technical SEO Audit',
        'Link Building',
        'Local SEO (Jaipur Focus)'
      ],
      results: '300% organic traffic growth in 6 months',
      category: 'visibility',
      price: '₹35,000/month'
    },
    {
      id: 'web-dev',
      title: 'Website Development',
      description: 'Convert visitors into customers with fast, responsive, and high-converting websites built with modern technologies.',
      icon: <Code className="w-8 h-8" />,
      color: 'from-purple-500 to-violet-500',
      bgColor: 'bg-purple-50',
      features: [
        'Responsive Web Design',
        'E-commerce Solutions',
        'WordPress Development',
        'Speed Optimization',
        'Conversion Rate Optimization'
      ],
      results: '40% average conversion rate increase',
      category: 'conversion',
      price: '₹50,000+'
    },
    {
      id: 'branding',
      title: 'Branding & Design',
      description: 'Create a memorable brand identity that resonates with your audience and stands out in the market.',
      icon: <PenTool className="w-8 h-8" />,
      color: 'from-amber-500 to-orange-500',
      bgColor: 'bg-amber-50',
      features: [
        'Logo & Visual Identity',
        'Brand Guidelines',
        'Marketing Collateral',
        'Packaging Design',
        'Brand Strategy'
      ],
      results: '92% brand recognition improvement',
      category: 'identity',
      price: '₹20,000+'
    },
    {
      id: 'content',
      title: 'Content Creation',
      description: 'Tell your brand story with compelling content that engages audiences and drives action.',
      icon: <BarChart3 className="w-8 h-8" />,
      color: 'from-indigo-500 to-blue-500',
      bgColor: 'bg-indigo-50',
      features: [
        'Blog Writing & Strategy',
        'Video Production',
        'Email Marketing',
        'Social Media Content',
        'Case Studies & Whitepapers'
      ],
      results: '4x more qualified leads through content',
      category: 'engagement',
      price: '₹15,000/month'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Services', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'growth', label: 'Growth', icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'performance', label: 'Performance', icon: <Target className="w-4 h-4" /> },
    { id: 'visibility', label: 'Visibility', icon: <Search className="w-4 h-4" /> },
    { id: 'conversion', label: 'Conversion', icon: <ShoppingCart className="w-4 h-4" /> },
    { id: 'identity', label: 'Identity', icon: <Users className="w-4 h-4" /> },
    { id: 'engagement', label: 'Engagement', icon: <MessageSquare className="w-4 h-4" /> }
  ];

  // Handle modal open/close
  const handleOpenModal = (serviceId: string) => {
    setActiveService(serviceId);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setActiveService(null);
    // Restore body scroll when modal is closed
    document.body.style.overflow = 'unset';
  };

  // Handle Get This Service button click - scroll to pricing section
  const handleGetServiceClick = () => {
    handleCloseModal();
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      setTimeout(() => {
        pricingSection.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  };

  // Handle Download PDF button click
  const handleDownloadPDF = (serviceTitle: string) => {
    // Create a mock PDF file name
    const fileName = `MarketingPro-${serviceTitle.replace(/\s+/g, '-')}-Service-Details.pdf`;
    
    // Create a blob with mock PDF content (in real app, this would be your actual PDF)
    const pdfContent = `
      MarketingPro Digital Agency
      ${serviceTitle} Service Details
      
      Includes:
      ${services.find(s => s.id === activeService)?.features.join('\n      ')}
      
      Price: ${services.find(s => s.id === activeService)?.price}
      Results: ${services.find(s => s.id === activeService)?.results}
      
      Contact us for more details:
      📞 +91 98765 43210
      📧 hello@marketingpro.com
      🌐 www.marketingpro.com
      
      © 2024 MarketingPro. All rights reserved.
    `;
    
    const blob = new Blob([pdfContent], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    
    // Create a temporary link and trigger download
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    // Show success message
    alert(`Downloading ${fileName}`);
  };

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && activeService) {
        handleCloseModal();
      }
    };

    // Handle clicking outside modal
    const handleClickOutside = (event: MouseEvent) => {
      const modal = document.querySelector('.modal-container');
      if (modal && !modal.contains(event.target as Node) && activeService) {
        handleCloseModal();
      }
    };

    if (activeService) {
      document.addEventListener('keydown', handleEscapeKey);
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [activeService]);

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <section id="services" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      
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
            <Sparkles className="w-4 h-4" />
            Our Services
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Full-Service <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">Digital Marketing</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600">
            End-to-end solutions to grow your business online. From strategy to execution, we handle everything.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-blue-500 to-green-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.icon}
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className={`${service.bgColor} rounded-2xl p-6 md:p-8 h-full border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-xl`}>
                {/* Service Icon */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.color} text-white mb-4`}>
                  {service.icon}
                </div>

                {/* Service Title */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 mb-4">
                  {service.features.slice(0, 3).map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                  {service.features.length > 3 && (
                    <div className="text-sm text-gray-500">
                      +{service.features.length - 3} more features
                    </div>
                  )}
                </div>

                {/* Results & Price */}
                <div className="flex items-center justify-between mb-6">
                  <div className="inline-flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-gray-200">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium text-gray-700">{service.results}</span>
                  </div>
                  <div className="text-lg font-bold text-gray-900">{service.price}</div>
                </div>

                {/* CTA Button */}
                <button 
                  onClick={() => handleOpenModal(service.id)}
                  className="w-full group/btn flex items-center justify-between p-3 rounded-lg bg-white border border-gray-200 hover:border-blue-500 transition-all duration-300"
                >
                  <span className="font-semibold text-gray-900 group-hover/btn:text-blue-600">
                    View Details
                  </span>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover/btn:text-blue-500 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Modal */}
      <AnimatePresence>
        {activeService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="modal-container bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col"
            >
              {(() => {
                const service = services.find(s => s.id === activeService);
                if (!service) return null;
                
                return (
                  <>
                    {/* Modal Header - Non-sticky, scrolls with content */}
                    <div className="border-b border-gray-200 p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className={`p-3 rounded-xl bg-gradient-to-r ${service.color} text-white`}>
                            {service.icon}
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                            <p className="text-gray-600">{service.results}</p>
                          </div>
                        </div>
                        <button
                          onClick={handleCloseModal}
                          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                          <X className="w-6 h-6" />
                        </button>
                      </div>
                    </div>

                    {/* Scrollable Modal Content */}
                    <div className="flex-1 overflow-y-auto">
                      <div className="p-6 md:p-8">
                        <div className="grid md:grid-cols-2 gap-8">
                          {/* Left Column */}
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-4">What's Included</h4>
                            <div className="space-y-3">
                              {service.features.map((feature, i) => (
                                <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                                  <span className="text-gray-800">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Right Column */}
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-4">Process & Timeline</h4>
                            <div className="space-y-4">
                              <div className="p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                                <div className="text-sm font-semibold text-blue-800 mb-1">Phase 1: Strategy</div>
                                <div className="text-sm text-blue-700">Week 1-2</div>
                              </div>
                              <div className="p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors">
                                <div className="text-sm font-semibold text-green-800 mb-1">Phase 2: Implementation</div>
                                <div className="text-sm text-green-700">Week 3-8</div>
                              </div>
                              <div className="p-4 bg-amber-50 rounded-xl hover:bg-amber-100 transition-colors">
                                <div className="text-sm font-semibold text-amber-800 mb-1">Phase 3: Optimization</div>
                                <div className="text-sm text-amber-700">Ongoing</div>
                              </div>
                            </div>

                            {/* Pricing Info */}
                            <div className="mt-8 p-6 bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl text-white hover:from-gray-800 hover:to-gray-700 transition-all">
                              <div className="text-sm opacity-80 mb-2">Starting from</div>
                              <div className="text-3xl font-bold mb-2">{service.price}</div>
                              <div className="text-sm opacity-80">Custom packages available based on your needs</div>
                            </div>
                          </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-gray-200">
                          <button 
                            onClick={handleGetServiceClick}
                            className="flex-1 bg-gradient-to-r from-blue-500 to-green-500 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
                          >
                            <span>Get This Service</span>
                            <ArrowRight className="w-5 h-5" />
                          </button>
                          <button 
                            onClick={() => handleDownloadPDF(service.title)}
                            className="flex-1 bg-white text-gray-800 py-4 rounded-xl font-semibold text-lg border-2 border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                          >
                            <span>Download Service PDF</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ServicesSection;
