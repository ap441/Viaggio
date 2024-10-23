import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"

const partners = [
  {
    name: "SkyLuxe Airways",
    type: "Airline",
    description: "Premium international airline with routes to over 150 destinations",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=2074&ixlib=rb-4.0.3",
    featured: true,
    pointsMultiplier: 3
  },
  {
    name: "Grand Elegance Hotels",
    type: "Hotel Chain",
    description: "Luxury hotels and resorts in prime locations worldwide",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
    featured: true,
    pointsMultiplier: 5
  },
  {
    name: "OceanVista Cruises",
    type: "Cruise Line",
    description: "Ultra-luxury cruise experiences in the world's most scenic waters",
    image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&q=80&w=2064&ixlib=rb-4.0.3",
    pointsMultiplier: 4
  },
  {
    name: "Elite Car Service",
    type: "Car Rental",
    description: "Premium vehicle rentals and chauffeur services",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
    pointsMultiplier: 2
  }
];

const FeaturedPartners = () => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold mb-6">Featured Partners</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {partners.map((partner, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="relative">
              <img 
                src={partner.image} 
                alt={partner.name} 
                className="w-full h-48 object-cover"
              />
              {partner.featured && (
                <Badge className="absolute top-4 right-4">
                  Featured Partner
                </Badge>
              )}
            </div>
            <CardHeader>
              <CardTitle>{partner.name}</CardTitle>
              <CardDescription>{partner.type}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">{partner.description}</p>
              <div className="flex items-center justify-between">
                <Badge variant="secondary">
                  {partner.pointsMultiplier}x Points
                </Badge>
                <Button variant="outline" size="sm">Learn More</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default FeaturedPartners;