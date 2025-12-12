'use client';

import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  ArrowUp,
  Shield,
  Award,
  CheckCircle,
  Instagram,
  Linkedin,
  Twitter,
  Facebook,
  Youtube,
  MessageCircle,
  Send,
  Heart,
  Coffee,
  Globe,
  Download,
  FileText,
  Users,
  TrendingUp,
  Target,
  PenTool,
  BarChart3,
  Sparkles
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Back to top functionality
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '#services' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'About Us', href: '#about' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' }
  ];

  const services = [
    { label: 'Social Media Marketing', icon: <TrendingUp className="w-4 h-4" /> },
    { label: 'SEO Optimization', icon: <Globe className="w-4 h-4" /> },
    { label: 'Paid Advertising', icon: <Target className="w-4 h-4" /> },
    { label: 'Website Development', icon: <BarChart3 className="w-4 h-4" /> },
    { label: 'Branding & Design', icon: <PenTool className="w-4 h-4" /> },
    { label: 'Content Creation', icon: <FileText className="w-4 h-4" /> }
  ];

  const resources = [
    { label: 'Marketing Blog', href: '#blog' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Free Tools', href: '#' },
    { label: 'Templates', href: '#' },
    { label: 'Webinars', href: '#' },
    { label: 'E-books', href: '#' }
  ];

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const message = "Hi! I'm interested in your marketing services from your website.";
    const url = `https://wa.me/9079751504?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full mix-blend-screen filter blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500/5 rounded-full mix-blend-screen filter blur-3xl" />
      
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
        {/* Top Section - Newsletter & CTA */}
        

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">MP</span>
                </div>
                <div>
                  <div className="text-2xl font-bold">MarketingPro</div>
                  <div className="text-gray-400">Jaipur Digital Marketing Agency</div>
                </div>
              </div>
              
              <p className="text-gray-400 mb-6">
                Helping businesses in Jaipur and across India grow revenue with 
                data-driven marketing strategies since 2020.
              </p>
              
              
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-medium">Jaipur Office</div>
                  <div className="text-gray-400 text-sm">
                    C-Scheme, Jaipur<br />
                    Rajasthan - 302001, India
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-400" />
                <div>
                  <div className="font-medium">+91 98765 43210</div>
                  <div className="text-gray-400 text-sm">Mon-Sat, 9AM-7PM</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-purple-400" />
                <div>
                  <div className="font-medium">hello@marketingpro.com</div>
                  <div className="text-gray-400 text-sm">Response within 1 hour</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-blue-400" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <ArrowUp className="w-3 h-3 rotate-45 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <Target className="w-5 h-5 text-green-400" />
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    {service.icon}
                    <span>{service.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Company */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <FileText className="w-5 h-5 text-purple-400" />
              Resources
            </h4>
            <ul className="space-y-3 mb-8">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a
                    href={resource.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {resource.label}
                  </a>
                </li>
              ))}
            </ul>
            
        
          </div>
        </div>

    
        
      </div>

      {/* Copyright Bar */}
      <div className="bg-black/50 backdrop-blur-sm border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} MarketingPro Digital Marketing Agency. All rights reserved.
              <span className="mx-2">•</span>
               in Jaipur, Rajasthan
            </div>
            
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
              
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: showBackToTop ? 1 : 0,
          scale: showBackToTop ? 1 : 0.8
        }}
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-40 w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-xl shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center"
        aria-label="Back to top"
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>

      {/* WhatsApp Floating Button */}
      <motion.button
        onClick={handleWhatsAppClick}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-24 right-6 z-40 w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center whatsapp-pulse"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        <style jsx>{`
          .whatsapp-pulse {
            position: relative;
          }
          .whatsapp-pulse::before {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background: linear-gradient(to right, #25D366, #128C7E);
            animation: pulse-ring 1.5s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
            z-index: -1;
          }
          @keyframes pulse-ring {
            0% {
              transform: scale(0.95);
              opacity: 0.8;
            }
            50% {
              transform: scale(1.1);
              opacity: 0.4;
            }
            100% {
              transform: scale(1.2);
              opacity: 0;
            }
          }
        `}</style>
      </motion.button>
    </footer>
  );
};

export default Footer;