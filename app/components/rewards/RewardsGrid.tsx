import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"

const rewards = [
  {
    title: "First Class Round-Trip to Paris",
    description: "Experience luxury at 35,000 feet with premium dining and fully-reclining seats",
    points: 150000,
    category: "Flights",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=2074&ixlib=rb-4.0.3",
    featured: true
  },
  {
    title: "5 Nights at Maldives Resort",
    description: "Stay in an overwater villa with direct access to crystal-clear waters",
    points: 200000,
    category: "Hotels",
    image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&q=80&w=2073&ixlib=rb-4.0.3"
  },
  {
    title: "Mediterranean Luxury Cruise",
    description: "7-day cruise visiting the most beautiful ports in the Mediterranean",
    points: 300000,
    category: "Cruises",
    image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&q=80&w=2064&ixlib=rb-4.0.3"
  },
  {
    title: "Fashion Week VIP Access",
    description: "Front-row seats at Paris Fashion Week with exclusive after-party access",
    points: 100000,
    category: "Events",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=2076&ixlib=rb-4.0.3",
    featured: true
  },
  {
    title: "Luxury Shopping Spree",
    description: "Personal shopping experience at designer boutiques in Milan",
    points: 75000,
    category: "Shopping",
    image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&q=80&w=2074&ixlib=rb-4.0.3"
  },
  {
    title: "Private Dining Experience",
    description: "In-villa dining experience with a Michelin-starred chef",
    points: 50000,
    category: "Experiences",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=2077&ixlib=rb-4.0.3"
  }
];

const RewardsGrid = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Available Rewards</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rewards.map((reward, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="relative">
              <img 
                src={reward.image} 
                alt={reward.title} 
                className="w-full h-48 object-cover"
              />
              {reward.featured && (
                <Badge className="absolute top-4 right-4">
                  Featured
                </Badge>
              )}
            </div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">{reward.title}</CardTitle>
                  <Badge variant="secondary" className="mt-2">
                    {reward.category}
                  </Badge>
                </div>
                <span className="font-bold text-lg">
                  {reward.points.toLocaleString()} pts
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>{reward.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Redeem Now</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default RewardsGrid;