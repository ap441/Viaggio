import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"

const partners = [
  { name: "LuxeStay Hotels", type: "Hotels", logo: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&q=80&w=2049&ixlib=rb-4.0.3" },
  { name: "SkyHigh Airlines", type: "Airlines", logo: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=2074&ixlib=rb-4.0.3" },
  { name: "CityExplorer Tours", type: "Attractions", logo: "https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3" },
  { name: "GlamGlobe Cruises", type: "Cruises", logo: "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&q=80&w=2064&ixlib=rb-4.0.3" },
];

const PartnerShowcase = () => {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Stylish Partners</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {partners.map((partner, index) => (
          <Card key={index} className="overflow-hidden">
            <img src={partner.logo} alt={partner.name} className="w-full h-40 object-cover" />
            <CardHeader>
              <CardTitle>{partner.name}</CardTitle>
              <CardDescription>{partner.type}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default PartnerShowcase;