'use client';

import { useState } from 'react';
import { 
  Users, 
  Target, 
  Heart, 
  MapPin, 
  Calendar, 
  Award, 
  Star, 
  Quote,
  TrendingUp,
  Globe,
  Coffee,
  Sparkles,
  Play,
  ChevronRight,
  Mail,
  Phone,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  Facebook,
  HeartHandshake,
  Lightbulb,
  Rocket,
  Shield,
  Trophy,
  ExternalLink,
  Briefcase,
  UserPlus
} from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutUsSection = () => {
  const [activeTab, setActiveTab] = useState('story');
  const [hoveredTeamMember, setHoveredTeamMember] = useState<string | null>(null);
  const [showMap, setShowMap] = useState(false);

  // Team member images from your local public folder
  const teamMemberImages = {
    founder: '/images/team/founder.jpg',
    cto: '/images/team/cto.jpg',
    creative: '/images/team/creative.jpg',
    marketing: '/images/team/marketing.jpg',
    seo: '/images/team/seo.jpg',
    client: '/images/team/client.jpg'
  };

  // Team circles images for the stats section
  const teamCircleImages = [
    '/images/team/client.jpg',
    '/images/team/seo.jpg',
    '/images/team/marketing.jpg',
    '/images/team/creative.jpg',
    '/images/team/cto.jpg',
    '/images/team/founder.jpg'
  ];

  // Culture images from local folder
  const cultureImages = [
    '/images/team/culture1.jpg',
    '/images/team/culture2.jpg',
    '/images/team/culture3.jpg',
    '/images/team/culture4.jpg'
  ];

  const teamMembers = [
    {
      id: 'founder',
      name: 'Pradeep Singh Shekhawat',
      role: 'Founder & CEO',
      expertise: 'Digital Strategy & Growth',
      experience: '12+ Years',
      bio: 'Ex-Google marketing lead turned entrepreneur. Passionate about helping Jaipur businesses thrive online.',
      imageColor: 'from-blue-500 to-cyan-500',
      skills: ['Google Ads', 'SEO', 'Marketing Strategy'],
      certifications: ['Google Ads Certified', 'HubSpot Expert'],
      funFact: 'Coffee enthusiast & marathon runner',
      social: {
        linkedin: 'https://www.linkedin.com/in/pradeep-singh-shekhawat/',
        twitter: 'https://x.com/pintubanna5994',
        instagram: 'https://www.instagram.com/pradeep.singh.shekhawat/'
      }
    },
    {
      id: 'cto',
      name: 'Guddu Kanwar',
      role: 'CTO & Head of Development',
      expertise: 'Tech & Web Solutions',
      experience: '8+ Years',
      bio: 'Full-stack developer with a passion for creating high-converting websites and scalable tech solutions.',
      imageColor: 'from-purple-500 to-pink-500',
      skills: ['Next.js', 'React', 'Node.js', 'AWS'],
      certifications: ['AWS Certified', 'React Expert'],
      funFact: 'Loves hiking in Rajasthan hills',
      social: {
        linkedin: 'https://www.linkedin.com/in/guddu-kanwar-30a6922a4/',
        github: 'https://github.com/Guddukanwar90',
        twitter: 'https://x.com/GudduRatho12540',
        instagram: 'https://www.instagram.com/its_twirl_girl_10/?next=%2F'
      }
    },
    {
      id: 'creative',
      name: 'Chanchal Kanwar',
      role: 'Creative Director',
      expertise: 'Branding & Design',
      experience: '6+ Years',
      bio: 'Award-winning designer helping brands tell compelling stories through visual design and content.',
      imageColor: 'from-orange-500 to-amber-500',
      skills: ['UI/UX Design', 'Brand Identity', 'Video Production'],
      certifications: ['Adobe Certified', 'Design Thinking'],
      funFact: 'Amateur wildlife photographer',
      social: {
        linkdin: 'https://www.linkedin.com/in/chanchal-kanwar-a7b864273/',
        instagram: 'https://www.instagram.com/mumal__kanwar_/',
        
      }
    },
    {
      id: 'marketing',
      name: 'Ananya Verma',
      role: 'Head of Marketing',
      expertise: 'Social Media & Content',
      experience: '7+ Years',
      bio: 'Content strategist who creates viral campaigns that drive engagement and conversions.',
      imageColor: 'from-green-500 to-emerald-500',
      skills: ['Social Media', 'Content Strategy', 'Influencer Marketing'],
      certifications: ['Meta Blueprint', 'Content Marketing'],
      funFact: 'Food blogger on weekends',
      social: {
        instagram: '#',
        pinterest: '#',
        linkedin: '#'
      }
    },
    {
      id: 'seo',
      name: 'Vikram Patel',
      role: 'SEO Director',
      expertise: 'Search & Analytics',
      experience: '9+ Years',
      bio: 'SEO specialist helping businesses rank #1 on Google with data-driven optimization strategies.',
      imageColor: 'from-indigo-500 to-blue-500',
      skills: ['Technical SEO', 'Analytics', 'Local SEO'],
      certifications: ['Google Analytics', 'SEO Certified'],
      funFact: 'Collects rare books',
      social: {
        linkedin: '#',
        twitter: '#',
        medium: '#'
      }
    },
    {
      id: 'client',
      name: 'Sanya Kapoor',
      role: 'Client Success Head',
      expertise: 'Account Management',
      experience: '5+ Years',
      bio: 'Ensures every client achieves their goals with personalized support and regular strategy reviews.',
      imageColor: 'from-rose-500 to-pink-500',
      skills: ['Account Management', 'Strategy', 'Client Relations'],
      certifications: ['Customer Success', 'Project Management'],
      funFact: 'Travels to 1 new country every year',
      social: {
        linkedin: '#',
        instagram: '#'
      }
    }
  ];

  const companyJourney = [
    {
      year: '2020',
      title: 'The Beginning',
      description: 'Started as a small team of 3 in Jaipur, helping local businesses with basic digital marketing.',
      icon: <Sparkles className="w-6 h-6" />,
      milestone: 'First 10 clients'
    },
    {
      year: '2021',
      title: 'Growth Phase',
      description: 'Expanded team to 12 members. Launched specialized services in SEO and Paid Advertising.',
      icon: <TrendingUp className="w-6 h-6" />,
      milestone: '50+ clients'
    },
    {
      year: '2022',
      title: 'Recognition',
      description: 'Awarded "Best Digital Marketing Agency in Rajasthan" by State Business Awards.',
      icon: <Award className="w-6 h-6" />,
      milestone: 'Industry awards'
    },
    {
      year: '2023',
      title: 'Expansion',
      description: 'Opened new office in Jaipur. Started serving clients across India and internationally.',
      icon: <Globe className="w-6 h-6" />,
      milestone: 'Pan-India presence'
    },
    {
      year: '2024',
      title: 'Innovation',
      description: 'Launched proprietary marketing automation tools and AI-powered analytics platform.',
      icon: <Rocket className="w-6 h-6" />,
      milestone: 'Tech innovation'
    }
  ];

  const coreValues = [
    {
      icon: <HeartHandshake className="w-8 h-8" />,
      title: "Client Partnership",
      description: "We work WITH you, not FOR you. Your success is our success.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation First",
      description: "Always testing, always learning, always implementing the latest strategies.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Transparency",
      description: "No hidden costs, no surprises. Complete visibility into your campaigns.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Excellence",
      description: "We don't settle for good. We aim for exceptional in everything we do.",
      color: "from-amber-500 to-orange-500"
    }
  ];

  const officeHours = [
    { day: 'Monday - Friday', time: '9:00 AM - 7:00 PM' },
    { day: 'Saturday', time: '10:00 AM - 4:00 PM' },
    { day: 'Sunday', time: 'Emergency Support Only' },
  ];

  // Function to handle Work With Us button click
  const handleWorkWithUs = () => {
    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Function to handle View Careers button click
  const handleViewCareers = () => {
    // Since you don't have a Careers section yet, we'll create a simple modal
    alert('Career opportunities coming soon! Check back later or email your resume to careers@marketingpro.com');
  };

  // Function to handle Visit Office button click
  const handleVisitOffice = () => {
    setShowMap(!showMap);
  };

  // Office location coordinates (Jaipur, Rajasthan)
  const officeLocation = {
    lat: 26.9124,
    lng: 75.7873,
    address: "MarketingPro, Civil Lines, Jaipur, Rajasthan 302006"
  };

  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
      
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
            <Users className="w-4 h-4" />
            About Us
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            More Than An Agency. Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">Growth Partner</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600">
            Based in Jaipur, serving businesses across India with passion, expertise, and proven results.
          </p>
        </motion.div>

        {/* Company Story & Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16 md:mb-20"
        >
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-3xl p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left Column - Story */}
              <div>
                <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  <Sparkles className="w-4 h-4 text-blue-500" />
                  Our Story
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  From Jaipur Garage to <span className="text-blue-600">India's Trusted Partner</span>
                </h3>
                
                <div className="space-y-4 text-gray-700">
                  <p>
                    MarketingPro was born in 2020 from a simple idea: help Jaipur businesses compete and win in the digital world. 
                    What started as three friends working from a small office has grown into a team of 25+ experts serving clients across India.
                  </p>
                  <p>
                    Our journey is defined by our commitment to Jaipur - the city that gave us our start. 
                    We understand the unique challenges and opportunities of businesses in Rajasthan and across India.
                  </p>
                  <p>
                    Today, we're proud to be one of Jaipur's fastest-growing digital marketing agencies, 
                    but we've never lost our local touch and personal approach.
                  </p>
                </div>

                {/* Mission & Vision */}
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-white p-6 rounded-xl border border-gray-200">
                    <div className="inline-flex p-3 bg-blue-100 rounded-lg mb-4">
                      <Target className="w-6 h-6 text-blue-600" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Our Mission</h4>
                    <p className="text-gray-600 text-sm">
                      Empower businesses with data-driven marketing strategies that deliver measurable growth and sustainable success.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl border border-gray-200">
                    <div className="inline-flex p-3 bg-green-100 rounded-lg mb-4">
                      <Globe className="w-6 h-6 text-green-600" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Our Vision</h4>
                    <p className="text-gray-600 text-sm">
                      Be the most trusted digital growth partner for businesses across India, starting from our roots in Jaipur.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column - Stats */}
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 border border-gray-200">
                  <div className="text-center mb-6">
                    <div className="text-5xl font-bold text-gray-900 mb-2">25+</div>
                    <div className="text-gray-600">Expert Team Members</div>
                  </div>
                  
                  <div className="flex justify-center -space-x-3 mb-4">
                    {teamCircleImages.map((image, index) => (
                      <div 
                        key={index}
                        className="relative w-10 h-10 rounded-full border-2 border-white overflow-hidden"
                      >
                        <Image
                          src={image}
                          alt={`Team member ${index + 1}`}
                          width={40}
                          height={40}
                          className="object-cover"
                        />
                      </div>
                    ))}
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-800 flex items-center justify-center text-white font-bold">
                      +19
                    </div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-xl border border-gray-200 text-center">
                    <div className="text-2xl font-bold text-blue-600">150+</div>
                    <div className="text-sm text-gray-600">Clients Served</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-gray-200 text-center">
                    <div className="text-2xl font-bold text-green-600">₹8.2Cr+</div>
                    <div className="text-sm text-gray-600">Revenue Generated</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-gray-200 text-center">
                    <div className="text-2xl font-bold text-purple-600">92%</div>
                    <div className="text-sm text-gray-600">Client Retention</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-gray-200 text-center">
                    <div className="text-2xl font-bold text-amber-600">4.9/5</div>
                    <div className="text-sm text-gray-600">Rating</div>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-6 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="w-5 h-5" />
                    <div>
                      <div className="font-semibold">Jaipur Office</div>
                      <div className="text-sm opacity-80">Rajasthan, India</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {officeHours.map((schedule, i) => (
                      <div key={i} className="flex items-center justify-between text-sm">
                        <span className="opacity-80">{schedule.day}</span>
                        <span className="font-medium">{schedule.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 md:mb-20"
        >
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Meet Our <span className="text-blue-600">Dream Team</span>
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A diverse team of experts united by one goal: your success.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
                onMouseEnter={() => setHoveredTeamMember(member.id)}
                onMouseLeave={() => setHoveredTeamMember(null)}
              >
                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden h-full hover:border-blue-500 transition-all duration-300 hover:shadow-xl">
                  {/* Team Member Header */}
                  <div className="relative">
                    <div className={`h-32 bg-gradient-to-r ${member.imageColor} relative overflow-hidden`}>
                      {/* Pattern overlay */}
                      <div className="absolute inset-0 opacity-10 bg-[url('/pattern.svg')]" />
                      
                      {/* Social Links (Show on hover) */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ 
                          opacity: hoveredTeamMember === member.id ? 1 : 0,
                          y: hoveredTeamMember === member.id ? 0 : 10
                        }}
                        className="absolute bottom-4 right-4 flex gap-2"
                      >
                        {Object.entries(member.social).map(([platform, link]) => {
                          const Icon = platform === 'linkedin' ? Linkedin :
                                     platform === 'twitter' ? Twitter :
                                     platform === 'instagram' ? Instagram :
                                     platform === 'github' ? Github :
                                     platform === 'behance' ? Behance :
                                     platform === 'dribbble' ? Dribbble :
                                     platform === 'pinterest' ? Pinterest :
                                     platform === 'medium' ? Medium : Twitter;
                          
                          return (
                            <a
                              key={platform}
                              href={link}
                              className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Icon className="w-4 h-4 text-gray-700" />
                            </a>
                          );
                        })}
                      </motion.div>
                    </div>
                    
                    {/* Profile Image with actual photo */}
                    <div className="absolute top-24 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full border-4 border-white overflow-hidden bg-white">
                      <Image
                        src={teamMemberImages[member.id as keyof typeof teamMemberImages] || '/images/default-profile.jpg'}
                        alt={member.name}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Team Member Info */}
                  <div className="pt-12 pb-6 px-6 text-center">
                    <h4 className="text-xl font-bold text-gray-900">{member.name}</h4>
                    <div className="text-blue-600 font-medium mb-2">{member.role}</div>
                    <div className="text-sm text-gray-500 mb-4">
                      <span className="flex items-center justify-center gap-1">
                        <Award className="w-4 h-4" />
                        {member.expertise} • {member.experience}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {member.bio}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                      {member.skills.slice(0, 3).map((skill, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Fun Fact */}
                    <div className="text-xs text-gray-500 flex items-center justify-center gap-1">
                      <Coffee className="w-3 h-3" />
                      <span>{member.funFact}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Company Journey Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16 md:mb-20"
        >
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our <span className="text-green-600">Journey</span>
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From humble beginnings in Jaipur to becoming a trusted name across India
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-green-500 to-purple-500 -translate-y-1/2 z-0" />
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8 relative z-10">
              {companyJourney.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  {/* Year */}
                  <div className="text-4xl font-bold text-gray-300 mb-2">{milestone.year}</div>
                  
                  {/* Milestone Card */}
                  <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-lg h-full">
                    {/* Icon */}
                    <div className="inline-flex p-3 bg-gradient-to-r from-blue-500 to-green-500 rounded-xl text-white mb-4">
                      {milestone.icon}
                    </div>
                    
                    {/* Title */}
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{milestone.title}</h4>
                    
                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-4">{milestone.description}</p>
                    
                    {/* Milestone Tag */}
                    <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full">
                      {milestone.milestone}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16 md:mb-20"
        >
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our <span className="text-purple-600">Core Values</span>
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide every decision we make and every campaign we run
            </p>
          </div>

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
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Culture & Community */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-r from-blue-500 to-green-500 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Column */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Heart className="w-4 h-4" />
                Our Culture
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                More Than Colleagues. A <span className="text-yellow-300">Family</span>
              </h3>
              
              <div className="space-y-4 text-white/90 mb-6">
                <p>
                  At MarketingPro, we believe that great work comes from happy teams. 
                  That's why we prioritize work-life balance, continuous learning, and a supportive environment.
                </p>
                <p>
                  From team retreats in Rajasthan's beautiful landscapes to weekly knowledge-sharing sessions, 
                  we invest in our team's growth and well-being.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-300 rounded-full" />
                  <span className="text-sm">Flexible Work Hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-300 rounded-full" />
                  <span className="text-sm">Learning Budget</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-300 rounded-full" />
                  <span className="text-sm">Team Retreats</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-300 rounded-full" />
                  <span className="text-sm">Health Insurance</span>
                </div>
              </div>
            </div>

            {/* Right Column - Culture Gallery */}
            <div className="grid grid-cols-2 gap-4">
              {cultureImages.map((image, index) => (
                <div 
                  key={index} 
                  className="aspect-square rounded-xl overflow-hidden border border-white/20 relative group"
                >
                  <Image
                    src={image}
                    alt={`Company culture ${index + 1}`}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="text-white text-sm">Team Culture</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Final CTA with Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Want to Join Our Team or Work With Us?
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Whether you're looking to grow your career or grow your business, we'd love to connect.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button 
                onClick={handleWorkWithUs}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-xl font-semibold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Briefcase className="w-5 h-5" />
                Work With Us
              </button>
              <button 
                onClick={handleViewCareers}
                className="px-8 py-4 bg-white text-gray-800 rounded-xl font-semibold text-lg border-2 border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <UserPlus className="w-5 h-5" />
                View Careers
              </button>
              <button 
                onClick={handleVisitOffice}
                className="px-8 py-4 bg-white text-gray-800 rounded-xl font-semibold text-lg border-2 border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <MapPin className="w-5 h-5" />
                Visit Our Jaipur Office
              </button>
            </div>

            {/* Map Section */}
            {showMap && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.5 }}
                className="mt-8 bg-white rounded-2xl border border-gray-200 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-bold text-gray-900">Our Jaipur Office</h4>
                    <a
                      href={`https://www.google.com/maps?q=${officeLocation.lat},${officeLocation.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
                    >
                      Open in Google Maps
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                  
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3 space-y-4">
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Address</h5>
                        <p className="text-gray-600">{officeLocation.address}</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Contact</h5>
                        <p className="text-gray-600">Phone: +91 1234 567890</p>
                        <p className="text-gray-600">Email: info@marketingpro.com</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Working Hours</h5>
                        {officeHours.map((schedule, i) => (
                          <div key={i} className="flex justify-between text-gray-600">
                            <span>{schedule.day}:</span>
                            <span>{schedule.time}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="md:w-2/3">
                      <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden relative">
                        {/* Google Maps Embed */}
                        <iframe
                          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.1027058729285!2d75.7873!3d26.9124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db4a65a4c1c23%3A0x1e6c72e7a6e9f7b5!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1647582345678!5m2!1sen!2sin`}
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          className="absolute inset-0"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Quick Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-500 rounded-lg">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">For Businesses</h4>
                  <p className="text-sm text-gray-600">Looking to grow?</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm">
                Schedule a free consultation to discuss your digital marketing needs and goals.
              </p>
              <button 
                onClick={handleWorkWithUs}
                className="mt-4 text-blue-600 font-semibold text-sm hover:text-blue-700 flex items-center gap-1"
              >
                Book Consultation
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-green-500 rounded-lg">
                  <UserPlus className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">For Job Seekers</h4>
                  <p className="text-sm text-gray-600">Join our team</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm">
                Explore current openings and opportunities to grow your career with us.
              </p>
              <button 
                onClick={handleViewCareers}
                className="mt-4 text-green-600 font-semibold text-sm hover:text-green-700 flex items-center gap-1"
              >
                View Open Positions
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-purple-500 rounded-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Visit Us</h4>
                  <p className="text-sm text-gray-600">Meet in person</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm">
                Come visit our Jaipur office for a face-to-face discussion about your requirements.
              </p>
              <button 
                onClick={handleVisitOffice}
                className="mt-4 text-purple-600 font-semibold text-sm hover:text-purple-700 flex items-center gap-1"
              >
                View Location & Directions
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Add missing icon components
const Github = ({ className }: { className: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const Behance = ({ className }: { className: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M8.84 10.835h-2.965v-1.859h2.783c.749 0 1.172.355 1.172.936 0 .593-.403.923-1.99.923zm-2.965 1.855h2.854c1.183 0 1.855.481 1.855 1.404 0 .947-.672 1.418-1.9 1.418h-2.809v-2.822zm15.064-5.331c-2.604.177-5.404.188-8.29.014-1.031.02-2.143.035-3.352.035-1.714 0-3.282.014-4.712.014v14.341h4.712c2.604 0 4.293-.317 5.586-1.349 1.293-1.032 1.939-2.629 1.939-4.791 0-1.406-.355-2.625-1.066-3.659-.711-1.033-1.777-1.788-3.198-2.263 1.421-.474 2.487-1.229 3.198-2.263.711-1.033 1.066-2.252 1.066-3.659 0-2.162-.646-3.759-1.939-4.791-1.293-1.032-2.982-1.349-5.586-1.349h-4.712v5.331c1.43 0 2.998.015 4.712.015 1.209 0 2.321.015 3.352.035 2.886-.174 5.686-.163 8.29.014v7.929h-8.29c-1.031.02-2.143.035-3.352.035-1.714 0-3.282.015-4.712.015v2.822h4.712c.749 0 1.172.355 1.172.936 0 .593-.403.923-1.99.923h-2.854v2.822h2.809c1.228 0 1.9.471 1.9 1.418 0 .923-.672 1.404-1.855 1.404h-2.854v2.822h4.712c2.604 0 4.293-.317 5.586-1.349 1.293-1.032 1.939-2.629 1.939-4.791 0-1.406-.355-2.625-1.066-3.659-.711-1.033-1.777-1.788-3.198-2.263 1.421-.474 2.487-1.229 3.198-2.263.711-1.033 1.066-2.252 1.066-3.659 0-2.162-.646-3.759-1.939-4.791-1.293-1.032-2.982-1.349-5.586-1.349h-4.712v5.331c1.43 0 2.998.015 4.712.015 1.209 0 2.321.015 3.352.035 2.886-.174 5.686-.163 8.29.014z"/>
  </svg>
);

const Dribbble = ({ className }: { className: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.628 0-12 5.373-12 12s5.372 12 12 12 12-5.373 12-12-5.372-12-12-12zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073-.244-.563-.497-1.125-.767-1.68 2.31-1 4.165-2.358 5.548-4.082 1.35 1.594 2.197 3.619 2.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68-1.016-1.861-2.178-3.676-3.488-5.438.779-.197 1.591-.314 2.431-.314 2.275 0 4.368.779 6.043 2.072zm-10.516-.993c1.331 1.742 2.511 3.538 3.537 5.381-2.43.715-5.331 1.082-8.684 1.105.692-2.835 2.601-5.193 5.147-6.486zm-5.44 8.834l.013-.256c3.849-.005 7.169-.448 9.95-1.322.233.475.456.952.67 1.432-3.38 1.057-6.165 3.222-8.337 6.48-1.432-1.719-2.296-3.927-2.296-6.334zm3.829 7.81c1.969-3.088 4.482-5.098 7.598-6.027.928 2.42 1.609 4.91 2.043 7.46-3.349 1.291-6.953.666-9.641-1.433zm11.586.43c-.438-2.353-1.08-4.653-1.92-6.897 1.876-.265 3.94-.196 6.199.196-.437 2.786-2.028 5.192-4.279 6.701z"/>
  </svg>
);

const Pinterest = ({ className }: { className: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
  </svg>
);

const Medium = ({ className }: { className: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
  </svg>
);

export default AboutUsSection;
