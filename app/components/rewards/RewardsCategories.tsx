import { Button } from "../ui/button"
import { Plane, Hotel, Ship, Ticket, ShoppingBag, Gift } from "lucide-react"

const categories = [
  { name: "Flights", icon: Plane },
  { name: "Hotels", icon: Hotel },
  { name: "Cruises", icon: Ship },
  { name: "Events", icon: Ticket },
  { name: "Shopping", icon: ShoppingBag },
  { name: "Experiences", icon: Gift },
];

const RewardsCategories = () => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold mb-6">Browse by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category, index) => (
          <Button
            key={index}
            variant="outline"
            className="h-auto py-6 flex flex-col gap-2"
          >
            <category.icon className="h-6 w-6" />
            <span>{category.name}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}

export default RewardsCategories;