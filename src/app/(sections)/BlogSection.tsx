'use client';

import { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  TrendingUp,
  Search,
  Filter,
  BookOpen,
  ArrowRight,
  ChevronRight,
  Tag,
  Share2,
  Bookmark,
  Eye,
  MessageCircle,
  ThumbsUp,
  TrendingUp as TrendingIcon,
  Sparkles,
  Target,
  Globe,
  Video,
  PenTool,
  BarChart3,
  Coffee,
  Mail,
  ChevronLeft,
  ChevronDown,
  X,
  ExternalLink,
  Download,
  Award
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const BlogSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('latest');
  const [selectedPost, setSelectedPost] = useState<string | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const categories = [
    { id: 'all', label: 'All Articles', count: 24, icon: <BookOpen className="w-4 h-4" /> },
    { id: 'seo', label: 'SEO', count: 8, icon: <Globe className="w-4 h-4" /> },
    { id: 'social', label: 'Social Media', count: 6, icon: <TrendingIcon className="w-4 h-4" /> },
    { id: 'ads', label: 'Paid Ads', count: 5, icon: <Target className="w-4 h-4" /> },
    { id: 'content', label: 'Content Marketing', count: 4, icon: <PenTool className="w-4 h-4" /> },
    { id: 'analytics', label: 'Analytics', count: 3, icon: <BarChart3 className="w-4 h-4" /> },
    { id: 'jaipur', label: 'Jaipur Business', count: 5, icon: <Coffee className="w-4 h-4" /> }
  ];

  const featuredPosts = [
    {
      id: 'seo-2025',
      title: 'SEO Trends 2025: What Jaipur Businesses Need to Know',
      excerpt: 'Discover the latest SEO strategies that will dominate 2025 and how Rajasthan businesses can stay ahead of the competition.',
      category: 'seo',
      readTime: '8 min',
      author: 'Rajesh Sharma',
      date: 'Dec 15, 2024',
      views: '2.4K',
      likes: 128,
      comments: 24,
      featured: true,
      tags: ['SEO', '2025 Trends', 'Jaipur', 'Digital Strategy'],
      imageColor: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'instagram-reels',
      title: 'How We Got 50K Followers in 30 Days Using Instagram Reels',
      excerpt: 'Exact step-by-step strategy we used for a Jaipur fashion brand to explode their Instagram growth.',
      category: 'social',
      readTime: '6 min',
      author: 'Ananya Verma',
      date: 'Dec 10, 2024',
      views: '3.1K',
      likes: 156,
      comments: 42,
      featured: true,
      tags: ['Instagram', 'Social Media', 'Growth', 'Case Study'],
      imageColor: 'from-pink-500 to-rose-500'
    },
    {
      id: 'google-ads-roi',
      title: 'Increase Google Ads ROI by 300%: Our Proven Framework',
      excerpt: 'Learn the exact framework we use to maximize ROAS for our Jaipur-based e-commerce clients.',
      category: 'ads',
      readTime: '10 min',
      author: 'Vikram Patel',
      date: 'Dec 5, 2024',
      views: '1.8K',
      likes: 94,
      comments: 18,
      featured: true,
      tags: ['Google Ads', 'ROI', 'PPC', 'E-commerce'],
      imageColor: 'from-green-500 to-emerald-500'
    }
  ];

  const blogPosts = [
    {
      id: 'local-seo-jaipur',
      title: 'Local SEO for Jaipur Businesses: Dominate Your Neighborhood',
      excerpt: 'Complete guide to ranking #1 in Jaipur local searches and Google Maps.',
      category: 'seo',
      readTime: '7 min',
      author: 'Rajesh Sharma',
      date: 'Nov 28, 2024',
      views: '1.2K',
      likes: 86,
      comments: 12,
      tags: ['Local SEO', 'Jaipur', 'Google My Business'],
      imageColor: 'from-purple-500 to-violet-500'
    },
    {
      id: 'content-calendar',
      title: 'Free 2025 Social Media Content Calendar Template',
      excerpt: 'Download our professionally designed content calendar used by top brands.',
      category: 'content',
      readTime: '5 min',
      author: 'Ananya Verma',
      date: 'Nov 22, 2024',
      views: '2.8K',
      likes: 142,
      comments: 31,
      tags: ['Content Calendar', 'Template', 'Social Media'],
      imageColor: 'from-amber-500 to-orange-500',
      hasDownload: true
    },
    {
      id: 'facebook-ads-funnel',
      title: 'Building High-Converting Facebook Ad Funnels for Indian Audiences',
      excerpt: 'Step-by-step guide to creating ad funnels that actually convert in the Indian market.',
      category: 'ads',
      readTime: '9 min',
      author: 'Vikram Patel',
      date: 'Nov 18, 2024',
      views: '1.5K',
      likes: 78,
      comments: 15,
      tags: ['Facebook Ads', 'Funnel', 'Conversion'],
      imageColor: 'from-blue-600 to-indigo-500'
    },
    {
      id: 'video-marketing',
      title: 'Video Marketing on a Budget: Tips for Jaipur Small Businesses',
      excerpt: 'How to create compelling video content without Hollywood-level budgets.',
      category: 'content',
      readTime: '6 min',
      author: 'Arjun Singh',
      date: 'Nov 12, 2024',
      views: '1.9K',
      likes: 103,
      comments: 22,
      tags: ['Video Marketing', 'Budget', 'Small Business'],
      imageColor: 'from-red-500 to-pink-500'
    },
    {
      id: 'analytics-dashboard',
      title: 'Build Your Free Marketing Analytics Dashboard in Google Sheets',
      excerpt: 'Template included! Track all your marketing metrics in one place.',
      category: 'analytics',
      readTime: '11 min',
      author: 'Priya Mehta',
      date: 'Nov 8, 2024',
      views: '2.3K',
      likes: 118,
      comments: 28,
      tags: ['Analytics', 'Dashboard', 'Google Sheets'],
      imageColor: 'from-teal-500 to-cyan-500',
      hasDownload: true
    },
    {
      id: 'influencer-marketing',
      title: 'Influencer Marketing in Rajasthan: Finding the Right Partners',
      excerpt: 'How to identify and collaborate with influencers who actually drive sales.',
      category: 'social',
      readTime: '8 min',
      author: 'Ananya Verma',
      date: 'Nov 3, 2024',
      views: '1.7K',
      likes: 91,
      comments: 19,
      tags: ['Influencer Marketing', 'Rajasthan', 'Collaboration'],
      imageColor: 'from-fuchsia-500 to-pink-500'
    },
    {
      id: 'website-speed',
      title: 'Website Speed Optimization: Why Your Jaipur Customers Are Leaving',
      excerpt: 'How loading speed impacts conversions and how to fix it immediately.',
      category: 'seo',
      readTime: '7 min',
      author: 'Priya Mehta',
      date: 'Oct 29, 2024',
      views: '1.4K',
      likes: 76,
      comments: 14,
      tags: ['Website Speed', 'Technical SEO', 'Conversion'],
      imageColor: 'from-rose-500 to-red-500'
    },
    {
      id: 'email-marketing',
      title: 'Email Marketing That Actually Gets Opened: Indian Audience Edition',
      excerpt: 'Cultural nuances and timing strategies for Indian email subscribers.',
      category: 'content',
      readTime: '8 min',
      author: 'Sanya Kapoor',
      date: 'Oct 25, 2024',
      views: '1.6K',
      likes: 82,
      comments: 16,
      tags: ['Email Marketing', 'Indian Audience', 'Strategy'],
      imageColor: 'from-indigo-500 to-blue-500'
    },
    {
      id: 'linkedin-b2b',
      title: 'B2B Lead Generation on LinkedIn: Jaipur Edition',
      excerpt: 'How Rajasthan businesses can use LinkedIn to find high-value clients.',
      category: 'social',
      readTime: '9 min',
      author: 'Rajesh Sharma',
      date: 'Oct 20, 2024',
      views: '1.3K',
      likes: 68,
      comments: 11,
      tags: ['LinkedIn', 'B2B', 'Lead Generation'],
      imageColor: 'from-blue-500 to-cyan-500'
    }
  ];

  const trendingTags = [
    { name: 'Jaipur Business', count: 12, color: 'bg-blue-100 text-blue-700' },
    { name: 'SEO 2025', count: 8, color: 'bg-green-100 text-green-700' },
    { name: 'Instagram Growth', count: 15, color: 'bg-pink-100 text-pink-700' },
    { name: 'Google Ads', count: 9, color: 'bg-red-100 text-red-700' },
    { name: 'Content Strategy', count: 11, color: 'bg-purple-100 text-purple-700' },
    { name: 'Analytics', count: 7, color: 'bg-amber-100 text-amber-700' },
    { name: 'Local Marketing', count: 10, color: 'bg-teal-100 text-teal-700' },
    { name: 'ROI', count: 14, color: 'bg-emerald-100 text-emerald-700' }
  ];

  const resources = [
    {
      title: 'MarketingPro SEO Checklist 2025',
      description: 'Complete SEO audit checklist for Indian websites',
      type: 'PDF Guide',
      downloads: '2.4K',
      icon: <BookOpen className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Social Media Content Calendar Template',
      description: 'Ready-to-use calendar for 2025',
      type: 'Excel Template',
      downloads: '3.1K',
      icon: <Calendar className="w-6 h-6" />,
      color: 'from-pink-500 to-rose-500'
    },
    {
      title: 'Google Ads Performance Calculator',
      description: 'Calculate your potential ROI from Google Ads',
      type: 'Tool',
      downloads: '1.8K',
      icon: <Calculator className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Website Speed Optimization Guide',
      description: 'Step-by-step technical SEO guide',
      type: 'PDF Guide',
      downloads: '1.2K',
      icon: <Zap className="w-6 h-6" />,
      color: 'from-purple-500 to-violet-500'
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  // Sort posts
  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (sortBy === 'latest') {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    } else if (sortBy === 'popular') {
      return b.views - a.views;
    } else if (sortBy === 'engagement') {
      return (b.likes + b.comments) - (a.likes + a.comments);
    }
    return 0;
  });

  const selectedPostData = selectedPost 
    ? [...featuredPosts, ...blogPosts].find(post => post.id === selectedPost)
    : null;

  return (
    <section id="blog" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-50 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      
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
            <BookOpen className="w-4 h-4" />
            Marketing Resources
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Learn & Grow with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">Expert Insights</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600">
            Actionable marketing tips, strategies, and resources to help your business thrive in Jaipur and beyond.
          </p>
        </motion.div>

        {/* Search & Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 md:mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Input */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles, guides, and resources..."
                  className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex gap-3">
              <div className="relative flex-1">
                <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl appearance-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                  value={activeCategory}
                  onChange={(e) => setActiveCategory(e.target.value)}
                >
                  {categories.map(cat => (
                    <option key={cat.id} value={cat.id}>
                      {cat.label} ({cat.count})
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>

              {/* Sort By */}
              <div className="relative">
                <select
                  className="pl-4 pr-10 py-3 bg-white border border-gray-200 rounded-xl appearance-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="latest">Latest</option>
                  <option value="popular">Most Viewed</option>
                  <option value="engagement">Most Engaged</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap gap-2 mt-4">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-blue-500 to-green-500 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat.icon}
                {cat.label}
                <span className="ml-1 px-1.5 py-0.5 rounded-full text-xs bg-white/20">
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Featured Posts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 md:mb-16"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-yellow-500" />
              Featured Articles
            </h3>
            <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
              View All Featured
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedPost(post.id)}
              >
                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden h-full hover:border-blue-500 transition-all duration-300 hover:shadow-xl">
                  {/* Post Image */}
                  <div className={`h-48 bg-gradient-to-r ${post.imageColor} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <div className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-900">
                        {categories.find(c => c.id === post.category)?.label}
                      </div>
                    </div>
                    
                    {/* Read Time */}
                    <div className="absolute bottom-4 right-4 flex items-center gap-1 text-white/90 bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{post.readTime} read</span>
                    </div>
                  </div>

                  {/* Post Content */}
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {post.title}
                    </h4>
                    
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        <span>{post.views}</span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                          {tag}
                        </span>
                      ))}
                      {post.tags.length > 2 && (
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                          +{post.tags.length - 2}
                        </span>
                      )}
                    </div>

                    {/* Engagement Stats */}
                    <div className="flex items-center gap-4 text-sm text-gray-500 pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-1">
                        <ThumbsUp className="w-4 h-4" />
                        <span>{post.likes} likes</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" />
                        <span>{post.comments} comments</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Main Content Area */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Blog Posts */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Latest Articles
                <span className="text-gray-400 font-normal text-base ml-2">
                  ({sortedPosts.length} articles)
                </span>
              </h3>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {sortedPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden h-full hover:border-blue-500 transition-all duration-300 hover:shadow-lg">
                    {/* Post Header */}
                    <div className={`h-40 bg-gradient-to-r ${post.imageColor} relative`}>
                      {/* Category Badge */}
                      <div className="absolute top-3 left-3">
                        <div className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-900">
                          {categories.find(c => c.id === post.category)?.label}
                        </div>
                      </div>
                      
                      {/* Download Badge */}
                      {post.hasDownload && (
                        <div className="absolute top-3 right-3">
                          <div className="px-3 py-1 bg-green-500 text-white rounded-full text-sm font-medium flex items-center gap-1">
                            <Download className="w-3 h-3" />
                            Free
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Post Content */}
                    <div className="p-5">
                      <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2 cursor-pointer" onClick={() => setSelectedPost(post.id)}>
                        {post.title}
                      </h4>
                      
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>

                      {/* Meta Info */}
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            <span>{post.views}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <ThumbsUp className="w-3 h-3" />
                            <span>{post.likes}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageCircle className="w-3 h-3" />
                            <span>{post.comments}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Load More Button */}
            {sortedPosts.length > 0 && (
              <div className="text-center mt-8">
                <button className="px-6 py-3 bg-white text-gray-800 rounded-xl font-semibold border-2 border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all duration-300">
                  Load More Articles
                </button>
              </div>
            )}

            {/* No Results */}
            {sortedPosts.length === 0 && (
              <div className="text-center py-12">
                <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h4>
                <p className="text-gray-600 mb-4">Try adjusting your search or filter</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('all');
                  }}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">
            {/* Newsletter Signup */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl p-6 text-white"
            >
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-6 h-6" />
                <h4 className="text-xl font-bold">Join Our Newsletter</h4>
              </div>
              
              <p className="text-white/90 mb-6">
                Get weekly marketing tips, case studies, and exclusive resources delivered to your inbox.
              </p>
              
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-white/30"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                />
                <button className="w-full py-3 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                  Subscribe Now
                </button>
              </div>
              
              <div className="text-xs text-white/70 mt-4">
                Join 5,000+ marketers. No spam, unsubscribe anytime.
              </div>
            </motion.div>

            {/* Trending Tags */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl border border-gray-200 p-6"
            >
              <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <TrendingIcon className="w-5 h-5 text-orange-500" />
                Trending Topics
              </h4>
              
              <div className="flex flex-wrap gap-2">
                {trendingTags.map(tag => (
                  <button
                    key={tag.name}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all hover:scale-105 ${tag.color}`}
                    onClick={() => setSearchQuery(tag.name)}
                  >
                    {tag.name}
                    <span className="ml-1 text-xs opacity-80">({tag.count})</span>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Free Resources */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white rounded-2xl border border-gray-200 p-6"
            >
              <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Download className="w-5 h-5 text-green-500" />
                Free Resources
              </h4>
              
              <div className="space-y-4">
                {resources.map((resource, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${resource.color} text-white`}>
                      {resource.icon}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">{resource.title}</div>
                      <div className="text-sm text-gray-500">{resource.description}</div>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs text-gray-500">{resource.type}</span>
                        <span className="text-xs text-gray-500">{resource.downloads} downloads</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="w-full mt-4 py-2.5 text-blue-600 hover:text-blue-700 font-medium text-sm border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors">
                View All Resources
              </button>
            </motion.div>

            {/* Popular Authors */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white rounded-2xl border border-gray-200 p-6"
            >
              <h4 className="text-lg font-bold text-gray-900 mb-4">Top Authors</h4>
              
              <div className="space-y-4">
                {[
                  { name: 'Rajesh Sharma', role: 'SEO Expert', articles: 24 },
                  { name: 'Ananya Verma', role: 'Social Media Lead', articles: 18 },
                  { name: 'Vikram Patel', role: 'PPC Specialist', articles: 15 },
                  { name: 'Priya Mehta', role: 'Tech & Analytics', articles: 12 }
                ].map((author, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center text-white font-bold">
                      {author.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">{author.name}</div>
                      <div className="text-sm text-gray-500">{author.role}</div>
                    </div>
                    <div className="text-sm text-gray-500">
                      {author.articles} articles
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-10 text-white">
            <div className="text-center mb-6">
              <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Level Up Your Marketing?
              </h3>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Subscribe to our premium newsletter for advanced strategies, exclusive webinars, 
                and personalized consulting opportunities.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300">
                Upgrade to Premium
              </button>
              <button className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
                View All Webinars
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Article Modal */}
      <AnimatePresence>
        {selectedPostData && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto my-auto"
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-white border-b border-gray-200 p-6 z-10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${selectedPostData.imageColor}`}>
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-500">
                        {categories.find(c => c.id === selectedPostData.category)?.label}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{selectedPostData.title}</h3>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedPost(null)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 md:p-8">
                {/* Article Meta */}
                <div className="flex flex-wrap items-center gap-4 mb-8 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span className="font-medium">{selectedPostData.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{selectedPostData.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{selectedPostData.readTime} read</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    <span>{selectedPostData.views} views</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedPostData.tags.map(tag => (
                    <span key={tag} className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Article Content (Placeholder) */}
                <div className="prose max-w-none mb-8">
                  <div className={`h-64 mb-8 rounded-xl bg-gradient-to-r ${selectedPostData.imageColor} flex items-center justify-center`}>
                    <div className="text-center text-white">
                      <div className="text-4xl font-bold mb-2">📄</div>
                      <div className="text-xl font-semibold">Article Preview</div>
                      <div className="text-sm opacity-80">Full article content would appear here</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4">
                    This is where the full article content would appear. In a real implementation, 
                    this would be fetched from your CMS or markdown files.
                  </p>
                  
                  <p className="text-gray-700 mb-4">
                    The article would include detailed insights, strategies, case studies, and 
                    actionable tips related to the topic.
                  </p>
                  
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Key Takeaways:</h4>
                  <ul className="space-y-2 mb-6">
                    {[1, 2, 3].map(i => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Important point number {i} from the article</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-200">
                  <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all">
                    <Download className="w-5 h-5" />
                    Download PDF Version
                  </button>
                  <button className="flex items-center gap-2 px-6 py-3 bg-white text-gray-800 rounded-xl font-semibold border-2 border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all">
                    <Share2 className="w-5 h-5" />
                    Share Article
                  </button>
                  <button className="flex items-center gap-2 px-6 py-3 bg-white text-gray-800 rounded-xl font-semibold border-2 border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all">
                    <Bookmark className="w-5 h-5" />
                    Save for Later
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

// Add missing icon components
const Zap = ({ className }: { className: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const Calculator = ({ className }: { className: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>
);

const Check = ({ className }: { className: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export default BlogSection;