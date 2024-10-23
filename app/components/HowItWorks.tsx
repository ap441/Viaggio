import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Plane, Hotel, MapPin, Gift } from 'lucide-react'

const steps = [
  { title: "Book Your Travel", description: "Reserve flights, hotels, or attractions with our partners", icon: Plane },
  { title: "Stay in Style", description: "Enjoy luxurious accommodations and experiences", icon: Hotel },
  { title: "Explore Destinations", description: "Discover new places and earn points for local activities", icon: MapPin },
  { title: "Redeem Rewards", description: "Use your points for exclusive fashion-forward travel perks", icon: Gift },
];

const HowItWorks = () => {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">How Viaggio Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mb-4">
                <step.icon size={24} />
              </div>
              <CardTitle>{step.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{step.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;