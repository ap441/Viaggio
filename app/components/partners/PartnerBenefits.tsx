import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Award, Star, Zap, Shield } from "lucide-react"

const benefits = [
  {
    title: "Premium Exposure",
    description: "Reach our exclusive network of luxury travelers",
    icon: Star
  },
  {
    title: "Loyalty Program Integration",
    description: "Seamless points earning and redemption system",
    icon: Award
  },
  {
    title: "Fast Settlement",
    description: "Quick and efficient payment processing",
    icon: Zap
  },
  {
    title: "Brand Protection",
    description: "Maintain your luxury brand positioning",
    icon: Shield
  }
];

const PartnerBenefits = () => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold mb-6">Partner Benefits</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((benefit, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <benefit.icon className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>{benefit.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{benefit.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default PartnerBenefits;