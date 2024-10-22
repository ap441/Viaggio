import { Button } from './ui/button';

const Hero = () => {
  return (
    <section className="py-20 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">Travel in Style, Earn in Vogue</h1>
      <p className="text-xl mb-8 text-muted-foreground">Join Viaggio and turn your journeys into a runway of rewards.</p>
      <Button size="lg">Start Earning Now</Button>
    </section>
  );
};

export default Hero;