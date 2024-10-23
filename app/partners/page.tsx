import PartnersHero from '../components/partners/PartnersHero';
import PartnerCategories from '../components/partners/PartnerCategories';
import FeaturedPartners from '../components/partners/FeaturedPartners';
import PartnerBenefits from '../components/partners/PartnerBenefits';
import BecomePartner from '../components/partners/BecomePartner';

export default function PartnersPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <PartnersHero />
      <PartnerCategories />
      <FeaturedPartners />
      <PartnerBenefits />
      <BecomePartner />
    </div>
  );
}