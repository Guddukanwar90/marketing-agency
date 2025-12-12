import HeroSection from './(sections)/HeroSection';
import ServicesSection from './(sections)/ServicesSection';
import ResultsSection from './(sections)/ResultsSection';
import CaseStudiesSection from './(sections)/CaseStudiesSection';
import AboutUsSection from './(sections)/AboutUsSection';
import PricingSection from './(sections)/PricingSection';
// import BlogSection from './(sections)/BlogSection';
import ContactSection from './(sections)/ContactSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <ResultsSection />
      <CaseStudiesSection />
      <AboutUsSection />
      <PricingSection />
      {/* <BlogSection /> */}
      <ContactSection />
      {/* We'll add Footer section next */}
    </main>
  );
}