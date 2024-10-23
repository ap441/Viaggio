import Hero from './components/Hero';
import FeaturedRewards from './components/FeaturedRewards';
import PartnerShowcase from './components/PartnerShowcase';
import HowItWorks from './components/HowItWorks';

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Hero />
      <FeaturedRewards />
      <PartnerShowcase />
      <HowItWorks />
    </div>
  );
}