import { Button } from "../ui/button"

const RewardsHero = () => {
  return (
    <section className="text-center py-12 mb-8 bg-primary/5 rounded-lg">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Exclusive Travel Rewards</h1>
      <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
        Transform your travels into extraordinary experiences with our curated collection of premium rewards.
      </p>
      <div className="flex justify-center gap-4">
        <Button size="lg">Browse All Rewards</Button>
        <Button size="lg" variant="outline">View Your Points</Button>
      </div>
    </section>
  );
}

export default RewardsHero;