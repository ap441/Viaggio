import { Button } from "../ui/button"

const PartnersHero = () => {
  return (
    <section className="text-center py-12 mb-8 bg-primary/5 rounded-lg">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Elite Partners</h1>
      <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
        Discover our network of luxury travel partners offering exclusive benefits and unforgettable experiences.
      </p>
      <div className="flex justify-center gap-4">
        <Button size="lg">Find Partners</Button>
        <Button size="lg" variant="outline">Become a Partner</Button>
      </div>
    </section>
  );
}

export default PartnersHero;