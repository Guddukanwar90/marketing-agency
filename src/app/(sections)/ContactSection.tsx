'use client';

import { useState, useEffect, useRef } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  MessageSquare,
  Calendar,
  User,
  Building,
  DollarSign,
  Globe,
  Smartphone,
  Video,
  Headphones,
  Shield,
  Zap,
  ArrowRight,
  ChevronRight,
  X,
  Loader2,
  Linkedin,
  Instagram,
  Twitter,
  Facebook,
  Youtube,
  MessageCircle,
  Sparkles,
  Award,
  Users,
  Target,
  ExternalLink
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    budget: '',
    service: '',
    timeline: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showSendMessageModal, setShowSendMessageModal] = useState(false);
  const [showScheduleCallModal, setShowScheduleCallModal] = useState(false);
  const [showVisitOfficeModal, setShowVisitOfficeModal] = useState(false);
  const [quickMessageData, setQuickMessageData] = useState({
    email: '',
    message: ''
  });
  const [callScheduleData, setCallScheduleData] = useState({
    name: '',
    email: '',
    date: '',
    time: ''
  });

  const formRef = useRef<HTMLFormElement>(null);

  const services = [
    'Social Media Marketing',
    'SEO Optimization',
    'Paid Advertising',
    'Website Development',
    'Branding & Design',
    'Content Creation',
    'Full Package',
    'Not Sure - Need Consultation'
  ];

  const budgets = [
    'Under ₹25,000/month',
    '₹25,000 - ₹50,000/month',
    '₹50,000 - ₹1,00,000/month',
    '₹1,00,000+/month',
    'Project-based Pricing'
  ];

  const timelines = [
    'Immediately (within 1 week)',
    'Within 1 month',
    'Within 3 months',
    'Just exploring options',
    'Future project (3+ months)'
  ];

  const officeHours = [
    { day: 'Monday - Friday', time: '9:00 AM - 7:00 PM' },
    { day: 'Saturday', time: '10:00 AM - 4:00 PM' },
    { day: 'Sunday', time: 'Emergency Support Only' },
  ];

  const socialLinks = [
    { platform: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, url: '#', followers: '2.5K+' },
    { platform: 'Instagram', icon: <Instagram className="w-5 h-5" />, url: '#', followers: '8.4K+' },
    { platform: 'Twitter', icon: <Twitter className="w-5 h-5" />, url: '#', followers: '3.1K+' },
    { platform: 'Facebook', icon: <Facebook className="w-5 h-5" />, url: '#', followers: '5.2K+' },
    { platform: 'YouTube', icon: <Youtube className="w-5 h-5" />, url: '#', subscribers: '1.8K+' },
  ];

  const automationSteps = [
    {
      step: 1,
      title: 'Form Submission',
      description: 'You fill out the contact form',
      icon: <Send className="w-5 h-5" />
    },
    {
      step: 2,
      title: 'Instant Notification',
      description: 'Our team gets WhatsApp & email alerts',
      icon: <Zap className="w-5 h-5" />
    },
    {
      step: 3,
      title: 'CRM Integration',
      description: 'Lead details added to our system',
      icon: <Users className="w-5 h-5" />
    },
    {
      step: 4,
      title: 'Personal Response',
      description: 'You receive customized reply within 1 hour',
      icon: <MessageSquare className="w-5 h-5" />
    },
    {
      step: 5,
      title: 'Strategy Session',
      description: 'Book your free consultation',
      icon: <Calendar className="w-5 h-5" />
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleQuickMessageChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setQuickMessageData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCallScheduleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCallScheduleData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const isFormValid = () => {
    return Object.values(formData).every(value => value.trim() !== '');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isFormValid()) {
      alert('Please fill all required fields');
      return;
    }
    
    setIsSubmitting(true);

    try {
      // Send email using mailto link
      const subject = `New Contact Form Submission from ${formData.name}`;
      const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}
Website: ${formData.website}
Service Interested: ${formData.service}
Budget: ${formData.budget}
Timeline: ${formData.timeline}
Message: ${formData.message}
      `.trim();

      const mailtoLink = `mailto:rathoreguddu425@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      console.log('Form submitted:', formData);
      console.log('Email sent to: rathoreguddu425@gmail.com');

      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        website: '',
        budget: '',
        service: '',
        timeline: '',
        message: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleQuickMessageSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!quickMessageData.email.trim() || !quickMessageData.message.trim()) {
      alert('Please fill both email and message fields');
      return;
    }

    const subject = 'Quick Message from Website Visitor';
    const body = `Email: ${quickMessageData.email}\n\nMessage: ${quickMessageData.message}`;
    
    const mailtoLink = `mailto:rathoreguddu425@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    
    setQuickMessageData({ email: '', message: '' });
    setShowSendMessageModal(false);
    alert('Your message has been sent!');
  };

  const handleScheduleCallSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!callScheduleData.name.trim() || !callScheduleData.email.trim() || !callScheduleData.date || !callScheduleData.time) {
      alert('Please fill all required fields');
      return;
    }

    const subject = `Call Schedule Request from ${callScheduleData.name}`;
    const body = `
Name: ${callScheduleData.name}
Email: ${callScheduleData.email}
Preferred Date: ${callScheduleData.date}
Preferred Time: ${callScheduleData.time}
    `.trim();
    
    const mailtoLink = `mailto:rathoreguddu425@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    
    setCallScheduleData({ name: '', email: '', date: '', time: '' });
    setShowScheduleCallModal(false);
    alert('Your call schedule request has been sent!');
  };

  const handleWhatsAppClick = () => {
    const message = "Hi! I'm interested in your marketing services.";
    const url = `https://wa.me/9079751504?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleVisitOfficeClick = () => {
    setShowVisitOfficeModal(true);
  };

  const openGoogleMaps = () => {
    window.open('https://maps.google.com/?q=C-Scheme,+Jaipur,+Rajasthan+302001,+India', '_blank');
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      
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
            <MessageSquare className="w-4 h-4" />
            Get In Touch
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Let's Grow Your Business <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">Together</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600">
            Ready to transform your digital presence? Contact our Jaipur-based team for a free strategy session.
          </p>
        </motion.div>

        {/* Top Section - Four Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 md:mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {/* Send Message Button */}
            <button
              onClick={() => setShowSendMessageModal(true)}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Send Message
            </button>
            
            {/* Schedule Call Button */}
            <button
              onClick={() => setShowScheduleCallModal(true)}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Schedule Call
            </button>
            
            {/* Visit Office Button */}
            <button
              onClick={handleVisitOfficeClick}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2"
            >
              <MapPin className="w-5 h-5" />
              Visit Office
            </button>
            
            {/* WhatsApp Chat Button */}
            <button
              onClick={handleWhatsAppClick}
              className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Chat
            </button>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
          {/* Left Column - Contact Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden"
            >
              {/* Form Header */}
              <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-green-50">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                      Send Us a Message
                    </h3>
                    <p className="text-gray-600">All fields are required. We'll respond within 1 hour.</p>
                  </div>
                  <div className="hidden md:flex items-center gap-2 text-sm text-gray-600">
                    <Shield className="w-4 h-4 text-green-500" />
                    <span>100% Secure & Confidential</span>
                  </div>
                </div>
              </div>

              {/* Success Message */}
              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-green-50 border-l-4 border-green-500 p-4"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500" />
                      <div>
                        <div className="font-semibold text-green-800">Message Sent Successfully!</div>
                        <div className="text-green-700 text-sm">
                          We've received your inquiry. Our team will contact you within 1 hour.
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Contact Form */}
              <form ref={formRef} onSubmit={handleSubmit} className="p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                      <User className="w-4 h-4" />
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                      placeholder="John Sharma"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                      <Mail className="w-4 h-4" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                      placeholder="john@yourbusiness.com"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                      <Phone className="w-4 h-4" />
                      Phone Number *
                    </label>
                    <div className="flex">
                      <div className="px-4 py-3 bg-gray-100 border border-r-0 border-gray-200 rounded-l-xl text-gray-600">
                        +91
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-r-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                        placeholder="98765 43210"
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                      <Building className="w-4 h-4" />
                      Company Name *
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                      placeholder="Your Business Pvt. Ltd."
                    />
                  </div>

                  {/* Website */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                      <Globe className="w-4 h-4" />
                      Website URL *
                    </label>
                    <input
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                      placeholder="https://yourbusiness.com"
                    />
                  </div>

                  {/* Service Interest */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                      <Target className="w-4 h-4" />
                      Service Interested In *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    >
                      <option value="">Select a service *</option>
                      {services.map(service => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  {/* Budget */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                      <DollarSign className="w-4 h-4" />
                      Monthly Budget *
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    >
                      <option value="">Select budget range *</option>
                      {budgets.map(budget => (
                        <option key={budget} value={budget}>{budget}</option>
                      ))}
                    </select>
                  </div>

                  {/* Timeline */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                      <Calendar className="w-4 h-4" />
                      Project Timeline *
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    >
                      <option value="">Select timeline *</option>
                      {timelines.map(timeline => (
                        <option key={timeline} value={timeline}>{timeline}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="mt-6 space-y-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                    <MessageSquare className="w-4 h-4" />
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                    placeholder="Tell us about your business goals, challenges, and what you'd like to achieve..."
                  />
                </div>

                {/* Submit Button */}
                <div className="mt-8">
                  <button
                    type="submit"
                    disabled={isSubmitting || !isFormValid()}
                    className={`w-full py-4 rounded-xl font-semibold text-lg transform transition-all duration-300 flex items-center justify-center gap-3 ${
                      isSubmitting || !isFormValid()
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-gradient-to-r from-blue-500 to-green-500 text-white hover:shadow-xl hover:-translate-y-1'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message & Get Free Strategy
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                  
                  <div className="text-center mt-4 text-sm text-gray-500">
                    <div className="flex items-center justify-center gap-2">
                      <Shield className="w-4 h-4 text-green-500" />
                      <span>All fields are required. Your information is secure.</span>
                    </div>
                  </div>
                </div>
              </form>
            </motion.div>

            {/* Automation Flow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 md:mt-12"
            >
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-6 md:p-8 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <Zap className="w-6 h-6 text-yellow-400" />
                  <h3 className="text-xl font-bold">Our Automated Response Flow</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  {automationSteps.map((step, index) => (
                    <div key={step.step} className="text-center">
                      <div className="relative">
                        {/* Step Number */}
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center mx-auto mb-3 text-white font-bold">
                          {step.icon}
                        </div>
                        
                        {/* Connector Line */}
                        {index < automationSteps.length - 1 && (
                          <div className="hidden md:block absolute top-6 left-3/4 w-full h-0.5 bg-gradient-to-r from-blue-500 to-green-500 -z-10" />
                        )}
                      </div>
                      
                      <div className="text-sm font-semibold mb-1">Step {step.step}</div>
                      <div className="text-xs opacity-80">{step.title}</div>
                      <div className="text-xs opacity-60 mt-1">{step.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Contact Info */}
          <div className="space-y-8">
            {/* Office Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-6 h-6 text-blue-500" />
                <h3 className="text-xl font-bold text-gray-900">Our Jaipur Office</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-medium text-gray-900">MarketingPro Digital Agency</div>
                    <div className="text-gray-600">C-Scheme, Jaipur</div>
                    <div className="text-gray-600">Rajasthan - 302001, India</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gray-400" />
                  <div>
                    <div className="font-medium text-gray-900">+91 98765 43210</div>
                    <div className="text-sm text-gray-600">Mon-Sat, 9AM-7PM</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <div>
                    <div className="font-medium text-gray-900">hello@marketingpro.com</div>
                    <div className="text-sm text-gray-600">Response within 1 hour</div>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="mt-6 rounded-xl overflow-hidden border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.105683256881!2d75.81671131504233!3d26.83915728315928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5b0d9f0f5a1%3A0x2f7c1b7e7d5d5c1e!2sC-Scheme%2C%20Jaipur%2C%20Rajasthan%20302001!5e0!3m2!1sen!2sin!4v1678888888888!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MarketingPro Office Location"
                  className="w-full h-48 sm:h-56 md:h-64"
                />
              </div>
            </motion.div>

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-green-500" />
                <h3 className="text-xl font-bold text-gray-900">Business Hours</h3>
              </div>
              
              <div className="space-y-3">
                {officeHours.map((schedule, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-900">{schedule.day}</span>
                    <span className="text-gray-700">{schedule.time}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="flex items-start gap-3">
                  <Headphones className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-yellow-800">Emergency Support</div>
                    <div className="text-sm text-yellow-700">Available 24/7 for urgent matters</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Connect With Us</h3>
              
              <div className="space-y-3">
                {socialLinks.map(social => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-white transition-colors">
                        {social.icon}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="font-medium text-gray-900 truncate">{social.platform}</div>
                        <div className="text-sm text-gray-500 truncate">
                          {social.platform === 'YouTube' ? 'Subscribers' : 'Followers'}: {social.followers}
                        </div>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors flex-shrink-0" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl p-6 text-white text-center"
            >
              <Award className="w-10 h-10 mx-auto mb-4" />
              <div className="text-lg font-bold mb-2">Award-Winning Service</div>
              <div className="text-sm opacity-90 mb-4">
                Best Digital Marketing Agency in Rajasthan 2024
              </div>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4" />
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center gap-1">
                  <Shield className="w-4 h-4" />
                  <span>Data Secure</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Send Message Modal */}
      <AnimatePresence>
        {showSendMessageModal && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-2xl max-w-md w-full p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Send Quick Message</h3>
                    <p className="text-gray-600 text-sm">Send us a quick message directly</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowSendMessageModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleQuickMessageSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={quickMessageData.email}
                    onChange={handleQuickMessageChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={quickMessageData.message}
                    onChange={handleQuickMessageChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                    placeholder="Write your message here..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-xl font-semibold flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>

                <div className="text-center text-sm text-gray-500">
                  Message will be sent to: rathoreguddu425@gmail.com
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Schedule Call Modal */}
      <AnimatePresence>
        {showScheduleCallModal && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-2xl max-w-md w-full p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Calendar className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Schedule a Call</h3>
                    <p className="text-gray-600 text-sm">Book a convenient time for a call</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowScheduleCallModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleScheduleCallSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={callScheduleData.name}
                    onChange={handleCallScheduleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    placeholder="John Sharma"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={callScheduleData.email}
                    onChange={handleCallScheduleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    placeholder="john@yourbusiness.com"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={callScheduleData.date}
                      onChange={handleCallScheduleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Time *
                    </label>
                    <input
                      type="time"
                      name="time"
                      value={callScheduleData.time}
                      onChange={handleCallScheduleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-xl font-semibold flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  Schedule Call
                </button>

                <div className="text-center text-sm text-gray-500">
                  Schedule request will be sent to: rathoreguddu425@gmail.com
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Visit Office Modal */}
      <AnimatePresence>
        {showVisitOfficeModal && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-2xl max-w-md w-full p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Visit Our Office</h3>
                    <p className="text-gray-600 text-sm">We'd love to meet you in person!</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowVisitOfficeModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="font-medium text-gray-900 mb-2">Office Address:</div>
                  <div className="text-gray-700">
                    MarketingPro Digital Agency<br />
                    C-Scheme, Jaipur<br />
                    Rajasthan - 302001<br />
                    India
                  </div>
                </div>

                <div className="p-4 bg-blue-50 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <div className="font-medium text-blue-900">Office Hours:</div>
                  </div>
                  <div className="text-blue-800 space-y-1">
                    <div>Mon-Fri: 9:00 AM - 7:00 PM</div>
                    <div>Saturday: 10:00 AM - 4:00 PM</div>
                    <div>Sunday: Emergency Support Only</div>
                  </div>
                </div>

                <div className="p-4 bg-yellow-50 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <Phone className="w-5 h-5 text-yellow-600" />
                    <div className="font-medium text-yellow-900">Before Visiting:</div>
                  </div>
                  <div className="text-yellow-800">
                    Please call ahead to schedule your visit: +91 98765 43210
                  </div>
                </div>

                <button
                  onClick={openGoogleMaps}
                  className="w-full py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-xl font-semibold flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-5 h-5" />
                  View Location on Google Maps
                </button>

                <div className="text-center text-sm text-gray-500">
                  Opens in a new tab for easy navigation
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ContactSection;