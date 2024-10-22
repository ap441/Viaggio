import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"

const rewards = [
  {
    title: "Luxury Hotel Stay",
    description: "3 nights at a 5-star hotel of your choice",
    points: 50000,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3"
  },
  {
    title: "First Class Flight",
    description: "Round-trip first class tickets to any destination",
    points: 100000,
    image: "https://images.unsplash.com/photo-1540339832862-474599807836?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3"
  },
  {
    title: "Exclusive Fashion Show",
    description: "VIP access to a high-end fashion show",
    points: 75000,
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=2076&ixlib=rb-4.0.3"
  }
];

const FeaturedRewards = () => {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Featured Rewards</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {rewards.map((reward, index) => (
          <Card key={index} className="overflow-hidden">
            <img src={reward.image} alt={reward.title} className="w-full h-48 object-cover" />
            <CardHeader>
              <CardTitle>{reward.title}</CardTitle>
              <CardDescription>{reward.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{reward.points.toLocaleString()} points</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Redeem Now</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default FeaturedRewards;