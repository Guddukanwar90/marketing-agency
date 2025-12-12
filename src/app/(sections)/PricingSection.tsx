'use client';

import { useState, useEffect } from 'react';
import { 
  Check, 
  X, 
  Star,
  Zap,
  TrendingUp,
  Users,
  Shield,
  Clock,
  ChevronRight,
  HelpCircle,
  Target,
  BarChart3,
  Calendar,
  Award,
  Sparkles,
  Calculator,
  CreditCard,
  Repeat,
  DollarSign,
  ArrowRight,
  Crown,
  Rocket,
  Globe,
  Headphones,
  FileText,
  Video,
  X as XIcon,
  Smartphone,
  CreditCard as CreditCardIcon,
  QrCode,
  ExternalLink,
  Loader2,
  Lock,
  AlertCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'quarterly' | 'yearly'>('monthly');
  const [activePlan, setActivePlan] = useState<string>('growth');
  const [customFeatures, setCustomFeatures] = useState<Record<string, boolean>>({});
  const [estimatedBudget, setEstimatedBudget] = useState<number>(50000);
  const [calculatedROI, setCalculatedROI] = useState<number>(0);
  const [showCalculator, setShowCalculator] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(null);
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Pricing based on billing cycle
  const pricing = {
    monthly: {
      starter: 25000,
      growth: 50000,
      enterprise: 100000
    },
    quarterly: {
      starter: 67500, // 10% discount
      growth: 135000,
      enterprise: 270000
    },
    yearly: {
      starter: 240000, // 20% discount
      growth: 480000,
      enterprise: 960000
    }
  };

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      tagline: 'Perfect for startups & small businesses',
      description: 'Essential marketing services to establish your online presence',
      features: [
        { text: 'Social Media Management', included: true },
        { text: 'Basic SEO Optimization', included: true },
        { text: 'Google/Facebook Ads (₹15k budget)', included: true },
        { text: 'Monthly Performance Report', included: true },
        { text: 'Email Support', included: true },
        { text: 'Content Creation (4 posts/week)', included: true },
        { text: 'Dedicated Account Manager', included: false },
        { text: 'Weekly Strategy Calls', included: false },
        { text: 'Advanced Analytics Dashboard', included: false },
        { text: 'Influencer Marketing', included: false },
        { text: 'Video Production', included: false },
        { text: 'Competitor Analysis', included: false }
      ],
      bestFor: 'Startups with < ₹10L revenue',
      icon: <Rocket className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      id: 'growth',
      name: 'Growth',
      tagline: 'Most Popular - For scaling businesses',
      description: 'Comprehensive marketing to accelerate your growth',
      features: [
        { text: 'Everything in Starter', included: true },
        { text: 'Advanced SEO Strategy', included: true },
        { text: 'Google/Facebook Ads (₹40k budget)', included: true },
        { text: 'Weekly Performance Reports', included: true },
        { text: 'Priority Support', included: true },
        { text: 'Content Creation (8 posts/week)', included: true },
        { text: 'Dedicated Account Manager', included: true },
        { text: 'Weekly Strategy Calls', included: true },
        { text: 'Advanced Analytics Dashboard', included: true },
        { text: 'Influencer Marketing', included: false },
        { text: 'Video Production', included: false },
        { text: 'Competitor Analysis', included: true }
      ],
      bestFor: 'Businesses with ₹10L-₹1Cr revenue',
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      tagline: 'Maximum impact for established brands',
      description: 'Full-service marketing with dedicated resources',
      features: [
        { text: 'Everything in Growth', included: true },
        { text: 'Enterprise SEO & Technical SEO', included: true },
        { text: 'Google/Facebook Ads (₹1L+ budget)', included: true },
        { text: 'Daily Performance Reports', included: true },
        { text: '24/7 Premium Support', included: true },
        { text: 'Content Creation (15+ posts/week)', included: true },
        { text: 'Dedicated Account Manager', included: true },
        { text: 'Daily Strategy Access', included: true },
        { text: 'Custom Analytics Dashboard', included: true },
        { text: 'Influencer Marketing', included: true },
        { text: 'Professional Video Production', included: true },
        { text: 'Advanced Competitor Analysis', included: true }
      ],
      bestFor: 'Established brands > ₹1Cr revenue',
      icon: <Crown className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    }
  ];

  const addOns = [
    {
      id: 'video',
      name: 'Video Production',
      description: 'Professional product videos, testimonials, ads',
      monthly: 25000,
      icon: <Video className="w-5 h-5" />
    },
    {
      id: 'influencer',
      name: 'Influencer Marketing',
      description: 'Strategic influencer partnerships & campaigns',
      monthly: 40000,
      icon: <Users className="w-5 h-5" />
    },
    {
      id: 'ecommerce',
      name: 'E-commerce SEO',
      description: 'Product page optimization & shopping feeds',
      monthly: 20000,
      icon: <ShoppingBag className="w-5 h-5" />
    },
    {
      id: 'local',
      name: 'Local SEO Boost',
      description: 'Google Business optimization & local listings',
      monthly: 15000,
      icon: <MapPin className="w-5 h-5" />
    },
    {
      id: 'email',
      name: 'Email Marketing',
      description: 'Newsletter campaigns & automation',
      monthly: 18000,
      icon: <Mail className="w-5 h-5" />
    },
    {
      id: 'analytics',
      name: 'Advanced Analytics',
      description: 'Custom reports & data visualization',
      monthly: 12000,
      icon: <BarChart3 className="w-5 h-5" />
    }
  ];

  const paymentMethods = [
    {
      id: 'google-pay',
      name: 'Google Pay',
      icon: 'GPay',
      description: 'Fast and secure UPI payments',
      color: 'bg-gray-900 hover:bg-gray-800',
      textColor: 'text-white'
    },
    {
      id: 'phonepe',
      name: 'PhonePe',
      icon: 'PhonePe',
      description: 'UPI, credit/debit cards',
      color: 'bg-purple-600 hover:bg-purple-700',
      textColor: 'text-white'
    },
    {
      id: 'paytm',
      name: 'Paytm',
      icon: 'Paytm',
      description: 'Wallet & UPI payments',
      color: 'bg-blue-600 hover:bg-blue-700',
      textColor: 'text-white'
    },
    {
      id: 'credit-card',
      name: 'Credit/Debit Card',
      icon: 'CreditCard',
      description: 'Visa, Mastercard, RuPay',
      color: 'bg-gray-100 hover:bg-gray-200',
      textColor: 'text-gray-900'
    },
    {
      id: 'netbanking',
      name: 'Net Banking',
      icon: 'Bank',
      description: 'All major Indian banks',
      color: 'bg-green-600 hover:bg-green-700',
      textColor: 'text-white'
    },
    {
      id: 'upi',
      name: 'UPI',
      icon: 'QRCode',
      description: 'Any UPI app (Gpay, PhonePe, etc.)',
      color: 'bg-blue-100 hover:bg-blue-200',
      textColor: 'text-gray-900'
    }
  ];

  // Calculate total price
  const calculateTotal = () => {
    const basePrice = pricing[billingCycle][activePlan as keyof typeof pricing.monthly];
    const addOnsTotal = Object.keys(customFeatures)
      .filter(key => customFeatures[key])
      .reduce((total, addOnId) => {
        const addOn = addOns.find(a => a.id === addOnId);
        return total + (addOn?.monthly || 0);
      }, 0);

    return basePrice + addOnsTotal;
  };

  // Calculate discount percentage
  const getDiscount = () => {
    if (billingCycle === 'quarterly') return '10%';
    if (billingCycle === 'yearly') return '20%';
    return '0%';
  };

  // Calculate savings
  const getSavings = () => {
    const monthlyPrice = pricing.monthly[activePlan as keyof typeof pricing.monthly];
    const currentPrice = pricing[billingCycle][activePlan as keyof typeof pricing.monthly];
    
    if (billingCycle === 'quarterly') {
      return monthlyPrice * 3 - currentPrice;
    }
    if (billingCycle === 'yearly') {
      return monthlyPrice * 12 - currentPrice;
    }
    return 0;
  };

  // ROI Calculator
  const calculateROI = () => {
    // Simplified ROI calculation based on industry averages
    const baseMultiplier = {
      starter: 2.5,
      growth: 3.2,
      enterprise: 4.0
    }[activePlan];

    const addOnMultiplier = Object.keys(customFeatures)
      .filter(key => customFeatures[key])
      .reduce((total, addOnId) => total + 0.2, 0);

    const totalMultiplier = baseMultiplier + addOnMultiplier;
    const monthlyInvestment = calculateTotal();
    const estimatedMonthlyRevenue = monthlyInvestment * totalMultiplier;
    const roi = ((estimatedMonthlyRevenue - monthlyInvestment) / monthlyInvestment) * 100;

    setCalculatedROI(Math.round(roi));
  };

  const handleGetPlanClick = () => {
    setShowPaymentModal(true);
    setPaymentProcessing(false);
    setPaymentSuccess(false);
    setSelectedPaymentMethod(null);
  };

  const handlePaymentMethodSelect = (methodId: string) => {
    setSelectedPaymentMethod(methodId);
  };

  const handleProceedPayment = () => {
    if (!selectedPaymentMethod) return;
    
    setPaymentProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setPaymentProcessing(false);
      setPaymentSuccess(true);
      
      // Reset after 3 seconds
      setTimeout(() => {
        setShowPaymentModal(false);
        setPaymentSuccess(false);
        setSelectedPaymentMethod(null);
      }, 3000);
    }, 2000);
  };

  useEffect(() => {
    calculateROI();
  }, [activePlan, customFeatures, billingCycle]);

  const selectedPlan = plans.find(plan => plan.id === activePlan);
  const totalAmount = calculateTotal();

  return (
    <section id="pricing" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      
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
            <CreditCard className="w-4 h-4" />
            Pricing & Plans
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Transparent Pricing, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">Exceptional Value</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600">
            Choose the perfect plan for your business. All plans include our performance guarantee.
          </p>
        </motion.div>

        {/* Billing Cycle Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col items-center mb-8 md:mb-12"
        >
          <div className="inline-flex bg-white rounded-xl p-1 border border-gray-200 mb-4">
            {(['monthly', 'quarterly', 'yearly'] as const).map((cycle) => (
              <button
                key={cycle}
                onClick={() => setBillingCycle(cycle)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  billingCycle === cycle
                    ? 'bg-gradient-to-r from-blue-500 to-green-500 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {cycle.charAt(0).toUpperCase() + cycle.slice(1)}
                {cycle !== 'monthly' && (
                  <span className="ml-2 text-xs bg-white/20 px-2 py-0.5 rounded-full">
                    Save {getDiscount()}
                  </span>
                )}
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Shield className="w-4 h-4 text-green-500" />
            <span>30-day money-back guarantee on all plans</span>
          </div>
        </motion.div>

        {/* Plans Grid */}
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative ${plan.popular ? 'lg:-mt-4' : ''}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold flex items-center gap-2">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular Choice
                  </div>
                </div>
              )}

              <div className={`h-full rounded-2xl border-2 ${plan.borderColor} ${plan.bgColor} overflow-hidden ${plan.popular ? 'shadow-xl' : 'shadow-lg'}`}>
                {/* Plan Header */}
                <div className={`p-6 md:p-8 bg-gradient-to-r ${plan.color} text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white/20 rounded-lg">
                        {plan.icon}
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold">{plan.name}</h3>
                        <p className="text-white/80 text-sm">{plan.tagline}</p>
                      </div>
                    </div>
                    {plan.popular && (
                      <div className="hidden md:block">
                        <div className="bg-white/20 px-3 py-1 rounded-full text-xs">
                          🔥 Hot Deal
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Price Display */}
                  <div className="mb-2">
                    <div className="flex items-baseline">
                      <span className="text-3xl md:text-4xl font-bold">₹</span>
                      <span className="text-4xl md:text-5xl font-bold">
                        {pricing[billingCycle][plan.id as keyof typeof pricing.monthly].toLocaleString('en-IN')}
                      </span>
                      <span className="text-white/80 ml-2">/month</span>
                    </div>
                    <div className="text-white/80 text-sm">
                      {billingCycle === 'monthly' ? 'Billed monthly' : 
                       billingCycle === 'quarterly' ? 'Billed quarterly (save 10%)' : 
                       'Billed annually (save 20%)'}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-white/90">{plan.description}</p>
                </div>

                {/* Plan Body */}
                <div className="p-6 md:p-8">
                  {/* Best For */}
                  <div className="mb-6 p-3 bg-white rounded-lg border border-gray-200">
                    <div className="flex items-center gap-2 text-sm">
                      <Target className="w-4 h-4 text-blue-500" />
                      <span className="font-medium">Best for:</span>
                      <span className="text-gray-700">{plan.bestFor}</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        ) : (
                          <X className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
                        )}
                        <span className={`text-sm ${feature.included ? 'text-gray-700' : 'text-gray-400'}`}>
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => setActivePlan(plan.id)}
                    className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                      activePlan === plan.id
                        ? 'bg-gradient-to-r from-blue-500 to-green-500 text-white shadow-lg'
                        : plan.popular
                        ? 'bg-white text-gray-900 border-2 border-green-500 hover:bg-green-50'
                        : 'bg-white text-gray-900 border-2 border-gray-200 hover:border-blue-500'
                    }`}
                  >
                    {activePlan === plan.id ? 'Selected Plan' : 'Select Plan'}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ROI Calculator & Customization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12 md:mb-16"
        >
          <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  Customize Your Plan
                </h3>
                <p className="text-gray-600">Add specialized services to your selected plan</p>
              </div>
              <button
                onClick={() => setShowCalculator(!showCalculator)}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                <Calculator className="w-5 h-5" />
                ROI Calculator
              </button>
            </div>

            {/* Add-ons Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {addOns.map((addOn) => (
                <div
                  key={addOn.id}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                    customFeatures[addOn.id]
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setCustomFeatures(prev => ({
                    ...prev,
                    [addOn.id]: !prev[addOn.id]
                  }))}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${
                        customFeatures[addOn.id] ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                      }`}>
                        {addOn.icon}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{addOn.name}</div>
                        <div className="text-sm text-gray-500">₹{addOn.monthly.toLocaleString('en-IN')}/month</div>
                      </div>
                    </div>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      customFeatures[addOn.id]
                        ? 'bg-blue-500 border-blue-500'
                        : 'border-gray-300'
                    }`}>
                      {customFeatures[addOn.id] && (
                        <Check className="w-4 h-4 text-white" />
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{addOn.description}</p>
                </div>
              ))}
            </div>

            {/* Price Summary */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-6 text-white">
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                {/* Selected Plan */}
                <div>
                  <div className="text-sm opacity-80 mb-2">Selected Plan</div>
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${selectedPlan?.color}`}>
                      {selectedPlan?.icon}
                    </div>
                    <div>
                      <div className="text-xl font-bold">{selectedPlan?.name}</div>
                      <div className="text-sm opacity-80">Plan</div>
                    </div>
                  </div>
                </div>

                {/* Add-ons */}
                <div>
                  <div className="text-sm opacity-80 mb-2">Add-ons</div>
                  <div className="text-xl font-bold">
                    {Object.keys(customFeatures).filter(key => customFeatures[key]).length} Services
                  </div>
                  <div className="text-sm opacity-80">
                    {Object.keys(customFeatures)
                      .filter(key => customFeatures[key])
                      .map(key => addOns.find(a => a.id === key)?.name)
                      .join(', ')}
                  </div>
                </div>

                {/* Billing Cycle */}
                <div>
                  <div className="text-sm opacity-80 mb-2">Billing Cycle</div>
                  <div className="text-xl font-bold">
                    {billingCycle.charAt(0).toUpperCase() + billingCycle.slice(1)}
                  </div>
                  <div className="text-sm opacity-80">
                    {getDiscount() !== '0%' ? `Save ${getDiscount()} vs monthly` : 'No discount'}
                  </div>
                </div>
              </div>

              {/* Total & ROI */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <div className="text-sm opacity-80 mb-1">Total Investment</div>
                  <div className="flex items-baseline">
                    <span className="text-4xl md:text-5xl font-bold">
                      ₹{totalAmount.toLocaleString('en-IN')}
                    </span>
                    <span className="opacity-80 ml-2">/month</span>
                  </div>
                  {getSavings() > 0 && (
                    <div className="text-green-400 text-sm mt-1">
                      Save ₹{getSavings().toLocaleString('en-IN')} with {billingCycle} billing
                    </div>
                  )}
                </div>

                <div className="text-center">
                  <div className="text-sm opacity-80 mb-1">Estimated ROI</div>
                  <div className={`text-4xl md:text-5xl font-bold ${
                    calculatedROI > 200 ? 'text-green-400' :
                    calculatedROI > 100 ? 'text-green-300' :
                    'text-yellow-400'
                  }`}>
                    {calculatedROI}%
                  </div>
                  <div className="text-sm opacity-80">
                    Based on similar clients
                  </div>
                </div>

                <div>
                  <button 
                    onClick={handleGetPlanClick}
                    className="px-8 py-4 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-xl font-semibold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  >
                    Get This Plan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12 md:mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Plan <span className="text-blue-600">Comparison</span>
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See how our plans stack up against each other
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-4 font-semibold text-gray-900">Features</th>
                  {plans.map(plan => (
                    <th key={plan.id} className="text-center p-4">
                      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg ${plan.bgColor}`}>
                        {plan.icon}
                        <span className="font-semibold">{plan.name}</span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  'Dedicated Account Manager',
                  'Strategy Calls',
                  'Content Creation',
                  'Ad Budget Management',
                  'SEO Optimization',
                  'Analytics Dashboard',
                  'Support Response Time',
                  'Performance Guarantee'
                ].map((feature, i) => (
                  <tr key={feature} className="hover:bg-gray-50">
                    <td className="p-4 font-medium text-gray-900">{feature}</td>
                    {plans.map(plan => {
                      let value = '';
                      let icon = null;
                      
                      if (feature === 'Dedicated Account Manager') {
                        value = plan.id === 'starter' ? 'Shared' : 'Dedicated';
                        icon = plan.id !== 'starter' ? <Check className="w-5 h-5 text-green-500" /> : null;
                      } else if (feature === 'Strategy Calls') {
                        value = plan.id === 'starter' ? 'Monthly' : plan.id === 'growth' ? 'Weekly' : 'Daily';
                      } else if (feature === 'Content Creation') {
                        value = plan.id === 'starter' ? '4/week' : plan.id === 'growth' ? '8/week' : '15+/week';
                      } else if (feature === 'Ad Budget Management') {
                        value = plan.id === 'starter' ? '₹15k' : plan.id === 'growth' ? '₹40k' : '₹1L+';
                      } else if (feature === 'SEO Optimization') {
                        value = plan.id === 'starter' ? 'Basic' : plan.id === 'growth' ? 'Advanced' : 'Enterprise';
                      } else if (feature === 'Analytics Dashboard') {
                        value = plan.id === 'starter' ? 'Basic' : plan.id === 'growth' ? 'Advanced' : 'Custom';
                      } else if (feature === 'Support Response Time') {
                        value = plan.id === 'starter' ? '24h' : plan.id === 'growth' ? '4h' : '1h';
                      } else if (feature === 'Performance Guarantee') {
                        value = 'Yes';
                        icon = <Shield className="w-5 h-5 text-green-500" />;
                      }
                      
                      return (
                        <td key={`${plan.id}-${feature}`} className="p-4 text-center">
                          <div className="flex items-center justify-center gap-2">
                            {icon}
                            <span className="text-gray-700">{value}</span>
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-12 md:mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked <span className="text-green-600">Questions</span>
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get answers to common questions about our pricing and services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: 'Do you offer custom pricing for unique requirements?',
                a: 'Yes! We understand every business is different. Contact us for a custom quote tailored to your specific needs and goals.'
              },
              {
                q: 'Is there a contract or can I cancel anytime?',
                a: 'No long-term contracts required. You can cancel anytime with 30-day notice. We also offer a 30-day money-back guarantee.'
              },
              {
                q: 'How quickly will I see results?',
                a: 'Most clients see measurable results within 30-60 days. SEO typically takes 3-6 months for significant impact.'
              },
              {
                q: 'Do you work with businesses outside Jaipur?',
                a: 'Absolutely! While we\'re based in Jaipur, we serve clients across India and internationally through virtual collaboration.'
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major credit/debit cards, UPI, Net Banking, and also offer EMI options for Indian clients.'
              },
              {
                q: 'Can I upgrade or downgrade my plan later?',
                a: 'Yes, you can change your plan anytime. We\'ll prorate the difference and make the transition seamless.'
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-500 transition-colors">
                <div className="flex items-start gap-4">
                  <HelpCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{faq.q}</h4>
                    <p className="text-gray-600">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="inline-block bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl p-1">
            <div className="bg-white rounded-xl p-8 md:p-10">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Award className="w-8 h-8 text-blue-500" />
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Ready to Grow Your Business?
                </h3>
              </div>
              
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Join 150+ satisfied clients who trust MarketingPro with their digital growth. 
                Get started with a risk-free 30-day trial.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <button 
                  onClick={handleGetPlanClick}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-xl font-semibold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  Start Free 30-Day Trial
                </button>
                {/* <button className="px-8 py-4 bg-white text-gray-800 rounded-xl font-semibold text-lg border-2 border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all duration-300">
                  Schedule Free Consultation
                </button> */}
              </div>

              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-green-500" />
                  <span>30-Day Money-Back Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-500" />
                  <span>No Setup Fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <Repeat className="w-4 h-4 text-purple-500" />
                  <span>Cancel Anytime</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Payment Modal */}
      <AnimatePresence>
        {showPaymentModal && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => !paymentProcessing && setShowPaymentModal(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              {/* Modal - Compact and scrollable */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-2xl max-w-md w-full overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
              >
                {/* Modal Header */}
                <div className="flex-shrink-0 p-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Complete Your Purchase</h3>
                      <p className="text-gray-600 text-xs mt-1">Secure payment • SSL encrypted</p>
                    </div>
                    <button
                      onClick={() => !paymentProcessing && setShowPaymentModal(false)}
                      disabled={paymentProcessing}
                      className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50"
                    >
                      <XIcon className="w-4 h-4 text-gray-500" />
                    </button>
                  </div>
                </div>

                {/* Scrollable Content Area */}
                <div className="flex-1 overflow-y-auto">
                  {/* Payment Processing / Success States */}
                  {paymentProcessing ? (
                    <div className="p-6 text-center">
                      <div className="inline-flex p-3 bg-blue-100 rounded-full mb-4">
                        <Loader2 className="w-6 h-6 text-blue-600 animate-spin" />
                      </div>
                      <h4 className="text-base font-semibold text-gray-900 mb-2">Processing Payment</h4>
                      <p className="text-sm text-gray-600 mb-3">Please wait while we process your payment...</p>
                      <div className="text-xs text-gray-500">This usually takes 2-3 seconds</div>
                    </div>
                  ) : paymentSuccess ? (
                    <div className="p-6 text-center">
                      <div className="inline-flex p-3 bg-green-100 rounded-full mb-4">
                        <Check className="w-6 h-6 text-green-600" />
                      </div>
                      <h4 className="text-base font-semibold text-gray-900 mb-2">Payment Successful!</h4>
                      <p className="text-sm text-gray-600 mb-3">Thank you for your purchase. Your plan is now active.</p>
                      <div className="text-xs text-gray-500">Redirecting you to the dashboard...</div>
                    </div>
                  ) : (
                    <>
                      {/* Order Summary */}
                      <div className="p-4 bg-gray-50 border-b border-gray-200">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-sm font-semibold text-gray-900">Order Summary</div>
                            <div className="text-xs text-gray-600">Plan: {selectedPlan?.name}</div>
                          </div>
                          <div className="text-right">
                            <div className="text-base font-bold text-gray-900">₹{totalAmount.toLocaleString('en-IN')}</div>
                            <div className="text-xs text-gray-600">
                              {billingCycle === 'monthly' ? 'Monthly' : 
                               billingCycle === 'quarterly' ? 'Quarterly' : 'Yearly'} billing
                            </div>
                          </div>
                        </div>
                        
                        {Object.keys(customFeatures).filter(key => customFeatures[key]).length > 0 && (
                          <div className="mt-3 pt-3 border-t border-gray-200">
                            <div className="text-xs text-gray-600 mb-1">Add-ons included:</div>
                            <div className="text-xs text-gray-500">
                              {Object.keys(customFeatures)
                                .filter(key => customFeatures[key])
                                .map(key => addOns.find(a => a.id === key)?.name)
                                .join(', ')}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Payment Methods - Compact Grid */}
                      <div className="p-4">
                        <h4 className="text-sm font-semibold text-gray-900 mb-3">Select Payment Method</h4>
                        
                        {/* Compact 2x3 Grid */}
                        <div className="grid grid-cols-3 gap-2 mb-4">
                          {paymentMethods.map((method) => (
                            <div
                              key={method.id}
                              onClick={() => handlePaymentMethodSelect(method.id)}
                              className={`p-2 rounded-lg border cursor-pointer transition-all duration-200 flex flex-col items-center justify-center text-center min-h-[80px] ${
                                selectedPaymentMethod === method.id
                                  ? 'border-blue-500 bg-blue-50'
                                  : 'border-gray-200 hover:border-gray-300'
                              }`}
                            >
                              <div className={`w-8 h-8 rounded-md flex items-center justify-center mb-1.5 ${method.color}`}>
                                {method.icon === 'GPay' ? (
                                  <span className="text-white font-bold text-[10px]">GPay</span>
                                ) : method.icon === 'PhonePe' ? (
                                  <span className="text-white font-bold text-xs">P</span>
                                ) : method.icon === 'Paytm' ? (
                                  <span className="text-white font-bold text-xs">P</span>
                                ) : method.icon === 'CreditCard' ? (
                                  <CreditCardIcon className="w-3.5 h-3.5 text-gray-900" />
                                ) : method.icon === 'Bank' ? (
                                  <span className="text-white font-bold text-xs">₹</span>
                                ) : (
                                  <QrCode className="w-3.5 h-3.5 text-gray-900" />
                                )}
                              </div>
                              <div className="space-y-0.5">
                                <div className="font-medium text-gray-900 text-[10px] leading-tight">{method.name}</div>
                                <div className="text-[9px] text-gray-500 leading-tight">{method.description}</div>
                              </div>
                              <div className={`w-3 h-3 rounded-full border flex items-center justify-center mt-1 ${
                                selectedPaymentMethod === method.id
                                  ? 'bg-blue-500 border-blue-500'
                                  : 'border-gray-300'
                              }`}>
                                {selectedPaymentMethod === method.id && (
                                  <Check className="w-2 h-2 text-white" />
                                )}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Security Info */}
                        <div className="flex items-start gap-2 p-3 bg-green-50 rounded-lg mb-4">
                          <Lock className="w-3.5 h-3.5 text-green-600 flex-shrink-0 mt-0.5" />
                          <div className="text-xs">
                            <div className="font-medium text-green-900">Secure Payment</div>
                            <div className="text-green-700">Your payment is encrypted and secure. We never store your card details.</div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* Fixed Footer with Action Buttons */}
                {!paymentProcessing && !paymentSuccess && (
                  <div className="flex-shrink-0 p-4 border-t border-gray-200 bg-white">
                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <button
                        onClick={() => setShowPaymentModal(false)}
                        className="flex-1 py-2.5 bg-white text-gray-700 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors text-sm font-medium"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handleProceedPayment}
                        disabled={!selectedPaymentMethod}
                        className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                          !selectedPaymentMethod
                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            : 'bg-gradient-to-r from-blue-500 to-green-500 text-white hover:shadow-md'
                        }`}
                      >
                        Pay ₹{totalAmount.toLocaleString('en-IN')}
                      </button>
                    </div>

                    {/* Note */}
                    <div className="mt-3 text-center">
                      <div className="flex items-center justify-center gap-1.5 text-[10px] text-gray-500">
                        <AlertCircle className="w-2.5 h-2.5" />
                        <span>Demo payment simulation. No real transaction will occur.</span>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

// Add missing icon components
const ShoppingBag = ({ className }: { className: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
  </svg>
);

const MapPin = ({ className }: { className: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const Mail = ({ className }: { className: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

export default PricingSection;