'use client';

import { useState, useRef, useEffect } from 'react';
import { 
  TrendingUp, 
  Target, 
  Users, 
  DollarSign,
  Calendar,
  MapPin,
  Eye,
  Download,
  ChevronLeft,
  ChevronRight,
  Filter,
  X,
  ShoppingBag,
  Building,
  Camera,
  Coffee,
  Heart,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Image as ImageIcon
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const CaseStudiesSection = () => {
  const [selectedCase, setSelectedCase] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedCase) {
      // Disable body scroll
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      // Enable body scroll
      document.body.style.overflow = 'auto';
      document.body.style.position = 'static';
      document.body.style.width = 'auto';
    }

    // Cleanup
    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.position = 'static';
      document.body.style.width = 'auto';
    };
  }, [selectedCase]);

  const caseStudies = [
    {
      id: 'fashion-brand',
      client: 'Jaipur Fashion House',
      industry: 'Fashion & Retail',
      industryIcon: <ShoppingBag className="w-4 h-4" />,
      duration: '3 Months',
      budget: '₹1,50,000',
      location: 'Jaipur, Rajasthan',
      challenge: 'Low online visibility and declining sales despite having premium products. Struggling to compete with national brands.',
      solution: 'Comprehensive Instagram + Google Shopping strategy with influencer collaborations and targeted retargeting.',
      results: {
        revenue: '₹42L',
        roas: '450%',
        leads: '1200+',
        followers: '15K+'
      },
      metrics: [
        { label: 'Revenue Generated', value: '₹42L', change: '+320%' },
        { label: 'Return on Ad Spend', value: '450%', change: '+280%' },
        { label: 'Cost per Lead', value: '₹89', change: '-65%' },
        { label: 'Website Traffic', value: '25K', change: '+400%' }
      ],
      services: ['Social Media Marketing', 'Google Ads', 'Influencer Marketing'],
      testimonial: 'MarketingPro transformed our online presence. From struggling to sell 10 items a day to now doing 50+ orders daily. Their Jaipur-based team understood our local audience perfectly.',
      clientName: 'Priya Sharma',
      clientRole: 'Owner, Jaipur Fashion House',
      images: [
        '/images/case-studies/1.jpg',
        '/images/case-studies/2.jpg',
        '/images/case-studies/3.jpg'
      ],
      category: 'ecommerce'
    },
    {
      id: 'real-estate',
      client: 'Royal Properties',
      industry: 'Real Estate',
      industryIcon: <Building className="w-4 h-4" />,
      duration: '6 Months',
      budget: '₹2,75,000',
      location: 'Jaipur, Rajasthan',
      challenge: 'Low lead quality and high cost per acquisition. Needed to target premium clients for luxury properties.',
      solution: 'LinkedIn B2B strategy combined with high-quality video tours and targeted Facebook ads for lookalike audiences.',
      results: {
        revenue: '₹3.2Cr',
        roas: '520%',
        leads: '240',
        followers: '8K+'
      },
      metrics: [
        { label: 'Property Inquiries', value: '240', change: '+180%' },
        { label: 'Average Deal Size', value: '₹1.2Cr', change: '+40%' },
        { label: 'Lead to Close Rate', value: '12%', change: '+300%' },
        { label: 'Brand Authority Score', value: '8.9/10', change: '+3.2' }
      ],
      services: ['LinkedIn Marketing', 'Video Production', 'Facebook Ads'],
      testimonial: 'As a luxury real estate developer in Jaipur, we needed someone who understood high-value marketing. MarketingPro delivered qualified leads that actually converted into sales.',
      clientName: 'Rajesh Mehta',
      clientRole: 'Director, Royal Properties',
      images: [
        '/images/case-studies/1.jpg',
        '/images/case-studies/2.jpg'
      ],
      category: 'b2b'
    },
    {
      id: 'cafe-chain',
      client: 'Rajasthan Brew Co.',
      industry: 'Food & Beverage',
      industryIcon: <Coffee className="w-4 h-4" />,
      duration: '2 Months',
      budget: '₹85,000',
      location: 'Jaipur & Udaipur',
      challenge: 'New cafe chain struggling to attract footfall. Needed to create buzz and loyal customer base quickly.',
      solution: 'Hyper-local Instagram strategy with user-generated content campaigns and targeted geo-fencing ads.',
      results: {
        revenue: '₹18L',
        roas: '380%',
        leads: '850+',
        followers: '22K+'
      },
      metrics: [
        { label: 'Footfall Increase', value: '320%', change: '+220%' },
        { label: 'Instagram Engagement', value: '8.2%', change: '+650%' },
        { label: 'Customer Retention', value: '45%', change: '+280%' },
        { label: 'Online Orders', value: '1.2K', change: '+500%' }
      ],
      services: ['Local SEO', 'Instagram Marketing', 'Content Creation'],
      testimonial: 'We went from empty tables to waiting lines in just 60 days. Their understanding of Jaipur food culture was exceptional. Still working with them 1 year later!',
      clientName: 'Ananya Verma',
      clientRole: 'Founder, Rajasthan Brew Co.',
      images: [
        '/images/case-studies/1.jpg',
        '/images/case-studies/2.jpg'
      ],
      category: 'local'
    },
    {
      id: 'photography',
      client: 'Studio Rajasthan',
      industry: 'Photography',
      industryIcon: <Camera className="w-4 h-4" />,
      duration: '4 Months',
      budget: '₹1,20,000',
      location: 'Jaipur, Rajasthan',
      challenge: 'Premium photography studio not getting enough high-value wedding and portfolio clients.',
      solution: 'Pinterest + Instagram visual strategy showcasing premium work, combined with targeted Facebook ads for wedding season.',
      results: {
        revenue: '₹65L',
        roas: '540%',
        leads: '180',
        followers: '18K+'
      },
      metrics: [
        { label: 'Booking Rate', value: '78%', change: '+220%' },
        { label: 'Average Package Value', value: '₹1.8L', change: '+60%' },
        { label: 'Website Bookings', value: '95', change: '+380%' },
        { label: 'Social Media Reach', value: '2.1M', change: '+420%' }
      ],
      services: ['Visual Marketing', 'Facebook Ads', 'Website Optimization'],
      testimonial: 'MarketingPro helped us position as Jaipur premium photographers. Now 80% of our bookings come through their campaigns. The ROI has been incredible.',
      clientName: 'Vikram Singh',
      clientRole: 'Lead Photographer, Studio Rajasthan',
      images: [
        '/images/case-studies/1.jpg',
        '/images/case-studies/2.jpg'
      ],
      category: 'creative'
    },
    {
      id: 'healthcare',
      client: 'Aarogya Healthcare',
      industry: 'Healthcare',
      industryIcon: <Heart className="w-4 h-4" />,
      duration: '5 Months',
      budget: '₹2,00,000',
      location: 'Jaipur, Rajasthan',
      challenge: 'New healthcare startup needing to build trust and attract patients for specialized treatments.',
      solution: 'Educational content strategy with doctor testimonials, combined with Google Ads for treatment-specific keywords.',
      results: {
        revenue: '₹1.8Cr',
        roas: '490%',
        leads: '420',
        followers: '12K+'
      },
      metrics: [
        { label: 'Patient Inquiries', value: '420', change: '+280%' },
        { label: 'Consultation Bookings', value: '310', change: '+320%' },
        { label: 'Brand Trust Score', value: '4.8/5', change: '+2.1' },
        { label: 'Organic Search Traffic', value: '8.5K', change: '+450%' }
      ],
      services: ['Content Marketing', 'Google Ads', 'Reputation Management'],
      testimonial: 'In healthcare, trust is everything. MarketingPro built our online reputation so effectively that we now get referrals from other doctors. Exceptional work.',
      clientName: 'Dr. Alok Mehta',
      clientRole: 'Director, Aarogya Healthcare',
      images: [
        '/images/case-studies/3.jpg',
        '/images/case-studies/4.jpg',
        '/images/case-studies/5.jpg'
      ],
      category: 'service'
    },
    {
      id: 'handicrafts',
      client: 'Rajasthan Heritage Crafts',
      industry: 'Handicrafts',
      industryIcon: <Sparkles className="w-4 h-4" />,
      duration: '3 Months',
      budget: '₹95,000',
      location: 'Jaipur, Rajasthan',
      challenge: 'Traditional handicraft business struggling to reach international buyers and compete with mass-produced items.',
      solution: 'E-commerce optimization with storytelling content, targeted Pinterest ads, and Amazon integration strategy.',
      results: {
        revenue: '₹1.2Cr',
        roas: '510%',
        leads: '650',
        followers: '25K+'
      },
      metrics: [
        { label: 'International Orders', value: '320', change: '+420%' },
        { label: 'Average Order Value', value: '₹18K', change: '+85%' },
        { label: 'Social Media Sales', value: '₹42L', change: '+380%' },
        { label: 'Export Inquiries', value: '85', change: '+280%' }
      ],
      services: ['E-commerce SEO', 'Social Commerce', 'International Marketing'],
      testimonial: 'They helped us take our Jaipur handicrafts global! From local shop to international brand in 90 days. The team truly understands Rajasthani culture and products.',
      clientName: 'Geeta Devi',
      clientRole: 'Owner, Rajasthan Heritage Crafts',
      images: [
        '/images/case-studies/6.jpg',
        '/images/case-studies/5.jpg'
      ],
      category: 'ecommerce'
    }
  
   
  ];

  const filters = [
    { id: 'all', label: 'All Industries', count: caseStudies.length },
    { id: 'ecommerce', label: 'E-commerce', count: caseStudies.filter(c => c.category === 'ecommerce').length },
    { id: 'b2b', label: 'B2B Services', count: caseStudies.filter(c => c.category === 'b2b').length },
    { id: 'local', label: 'Local Business', count: caseStudies.filter(c => c.category === 'local').length },
    { id: 'creative', label: 'Creative', count: caseStudies.filter(c => c.category === 'creative').length },
    { id: 'service', label: 'Service Based', count: caseStudies.filter(c => c.category === 'service').length },
  ];

  const filteredCaseStudies = activeFilter === 'all' 
    ? caseStudies 
    : caseStudies.filter(caseStudy => caseStudy.category === activeFilter);

  const selectedCaseStudy = selectedCase 
    ? caseStudies.find(c => c.id === selectedCase)
    : null;

  const nextImage = () => {
    if (selectedCaseStudy) {
      setCurrentImageIndex((prev) => 
        prev === selectedCaseStudy.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedCaseStudy) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedCaseStudy.images.length - 1 : prev - 1
      );
    }
  };

  // Handle Get Similar Results button click
  const handleGetSimilarResults = () => {
    setSelectedCase(null);
    setCurrentImageIndex(0);
    
    // Scroll to pricing section
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Handle Download PDF button click
  const handleDownloadPDF = () => {
    if (selectedCaseStudy) {
      // Create a mock PDF download
      const fileName = `${selectedCaseStudy.client.replace(/\s+/g, '-').toLowerCase()}-case-study.pdf`;
      const blob = new Blob([`Case Study: ${selectedCaseStudy.client}\n\nChallenge: ${selectedCaseStudy.challenge}\n\nSolution: ${selectedCaseStudy.solution}\n\nResults: ${JSON.stringify(selectedCaseStudy.results, null, 2)}`], {
        type: 'application/pdf'
      });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    }
  };

  // Handle backdrop click
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setSelectedCase(null);
      setCurrentImageIndex(0);
    }
  };

  return (
    <section id="case-studies" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      
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
            <TrendingUp className="w-4 h-4" />
            Case Studies
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Real Results for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">Jaipur Businesses</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600">
            See how we've helped local businesses in Rajasthan grow revenue, increase visibility, and dominate their markets.
          </p>
        </motion.div>

        {/* Results Summary Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl p-6 md:p-8 text-white mb-8 md:mb-12"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-sm font-medium opacity-90 mb-2">Collective Impact</div>
              <div className="text-3xl md:text-4xl font-bold">₹8.2Cr+ Generated</div>
              <div className="text-sm opacity-80">For Jaipur-based clients in 2024</div>
            </div>
            <div className="flex flex-wrap gap-4 md:gap-6">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold">92%</div>
                <div className="text-sm opacity-80">Client Retention</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold">4.9/5</div>
                <div className="text-sm opacity-80">Satisfaction Score</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold">48h</div>
                <div className="text-sm opacity-80">Avg. Setup Time</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${activeFilter === filter.id
                  ? 'bg-gradient-to-r from-blue-500 to-green-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-500 hover:shadow-md'
                }`}
            >
              <Filter className="w-4 h-4" />
              {filter.label}
              <span className={`ml-1 px-2 py-0.5 rounded-full text-xs ${activeFilter === filter.id ? 'bg-white/20' : 'bg-gray-100 text-gray-600'}`}>
                {filter.count}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence>
            {filteredCaseStudies.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                layout
                className="group"
              >
                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-blue-500 transition-all duration-300 hover:shadow-xl h-full">
                  {/* Case Study Header */}
                  <div className="p-6 border-b border-gray-100">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          {caseStudy.industryIcon}
                          <span className="text-sm font-medium text-gray-500">{caseStudy.industry}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">{caseStudy.client}</h3>
                      </div>
                      <button
                        onClick={() => setSelectedCase(caseStudy.id)}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <Eye className="w-5 h-5 text-gray-400" />
                      </button>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {caseStudy.services.slice(0, 2).map((service, i) => (
                        <span key={i} className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full">
                          {service}
                        </span>
                      ))}
                      {caseStudy.services.length > 2 && (
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                          +{caseStudy.services.length - 2} more
                        </span>
                      )}
                    </div>

                    <p className="text-gray-600 text-sm line-clamp-2">{caseStudy.challenge}</p>
                  </div>

                  {/* Results Preview */}
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center p-3 bg-gray-50 rounded-xl">
                        <div className="text-lg font-bold text-gray-900">{caseStudy.results.revenue}</div>
                        <div className="text-xs text-gray-500">Revenue</div>
                      </div>
                      <div className="text-center p-3 bg-green-50 rounded-xl">
                        <div className="text-lg font-bold text-green-600">{caseStudy.results.roas}</div>
                        <div className="text-xs text-gray-500">ROAS</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{caseStudy.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSign className="w-4 h-4" />
                        <span>{caseStudy.budget}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>Jaipur</span>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="px-6 pb-6">
                    <button
                      onClick={() => setSelectedCase(caseStudy.id)}
                      className="w-full py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                    >
                      View Full Case Study
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredCaseStudies.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-gray-400 mb-4">No case studies found for this filter</div>
            <button
              onClick={() => setActiveFilter('all')}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              View all case studies
            </button>
          </motion.div>
        )}
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedCaseStudy && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-[100]"
              onClick={handleBackdropClick}
            />
            
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed inset-0 flex items-center justify-center p-4 z-[101] overflow-y-auto"
              onClick={handleBackdropClick}
            >
              <div 
                className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="sticky top-0 bg-white border-b border-gray-200 p-6 z-10">
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{selectedCaseStudy.client}</h2>
                      <div className="flex flex-wrap items-center gap-4 mt-2 text-gray-600">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{selectedCaseStudy.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{selectedCaseStudy.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <DollarSign className="w-4 h-4" />
                          <span>{selectedCaseStudy.budget}</span>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        setSelectedCase(null);
                        setCurrentImageIndex(0);
                      }}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="p-6">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left Column - Challenge & Solution */}
                    <div className="lg:col-span-2 space-y-8">
                      {/* Challenge */}
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">The Challenge</h3>
                        <div className="bg-red-50 rounded-xl p-6">
                          <p className="text-gray-800">{selectedCaseStudy.challenge}</p>
                        </div>
                      </div>

                      {/* Solution */}
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Our Solution</h3>
                        <div className="bg-blue-50 rounded-xl p-6">
                          <p className="text-gray-800 mb-6">{selectedCaseStudy.solution}</p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {selectedCaseStudy.services.map((service, i) => (
                              <div key={i} className="flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-blue-500" />
                                <span className="font-medium text-gray-800">{service}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Image Gallery */}
                      {selectedCaseStudy.images.length > 0 && (
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-4">Campaign Visuals</h3>
                          <div className="relative rounded-xl overflow-hidden bg-gray-100 aspect-video">
                            {selectedCaseStudy.images[currentImageIndex] ? (
                              <div className="relative w-full h-full">
                                {/* Next.js Image component for optimization */}
                                <Image
                                  src={selectedCaseStudy.images[currentImageIndex]}
                                  alt={`${selectedCaseStudy.client} campaign visual ${currentImageIndex + 1}`}
                                  fill
                                  className="object-cover"
                                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                  priority
                                />
                              </div>
                            ) : (
                              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-green-100">
                                <div className="text-center">
                                  <ImageIcon className="w-12 h-12 text-gray-300 mx-auto mb-2" />
                                  <div className="text-gray-400">Image not available</div>
                                </div>
                              </div>
                            )}
                            
                            {/* Navigation Arrows */}
                            {selectedCaseStudy.images.length > 1 && (
                              <>
                                <button
                                  onClick={prevImage}
                                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                                >
                                  <ChevronLeft className="w-5 h-5" />
                                </button>
                                <button
                                  onClick={nextImage}
                                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                                >
                                  <ChevronRight className="w-5 h-5" />
                                </button>
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                  {selectedCaseStudy.images.map((_, idx) => (
                                    <button
                                      key={idx}
                                      onClick={() => setCurrentImageIndex(idx)}
                                      className={`w-2 h-2 rounded-full ${idx === currentImageIndex ? 'bg-white' : 'bg-white/50'}`}
                                    />
                                  ))}
                                </div>
                              </>
                            )}
                          </div>
                          <p className="text-sm text-gray-500 mt-2 text-center">
                            Image {currentImageIndex + 1} of {selectedCaseStudy.images.length}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Right Column - Results & CTA */}
                    <div className="space-y-8">
                      {/* Results Metrics */}
                      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 text-white">
                        <h3 className="text-xl font-bold mb-6">Results Achieved</h3>
                        <div className="space-y-4">
                          {selectedCaseStudy.metrics.map((metric, i) => (
                            <div key={i} className="p-4 bg-white/5 rounded-lg">
                              <div className="text-sm opacity-80 mb-1">{metric.label}</div>
                              <div className="flex items-end justify-between">
                                <div className="text-xl font-bold">{metric.value}</div>
                                <div className={`px-2 py-1 rounded-full text-xs font-medium ${metric.change.startsWith('+') ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'}`}>
                                  {metric.change}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA Buttons */}
                      <div className="space-y-3">
                        <button 
                          onClick={handleGetSimilarResults}
                          className="w-full py-4 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                        >
                          Get Similar Results
                          <ArrowRight className="w-5 h-5" />
                        </button>
                        <button 
                          onClick={handleDownloadPDF}
                          className="w-full py-4 bg-white text-gray-800 rounded-xl font-semibold border-2 border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                        >
                          <Download className="w-5 h-5" />
                          Download Case Study PDF
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CaseStudiesSection;