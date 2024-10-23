import RewardsHero from '../components/rewards/RewardsHero';
import RewardsGrid from '../components/rewards/RewardsGrid';
import RewardsCategories from '../components/rewards/RewardsCategories';
import RewardsProgress from '../components/rewards/RewardsProgress';

export default function RewardsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <RewardsProgress />
      <RewardsHero />
      <RewardsCategories />
      <RewardsGrid />
    </div>
  );
}