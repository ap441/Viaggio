import { Button } from "../ui/button"
import { Plane, Hotel, Ship, Ticket, Utensils, Car } from "lucide-react"

const categories = [
  { name: "Airlines", icon: Plane, count: 25 },
  { name: "Hotels", icon: Hotel, count: 150 },
  { name: "Cruises", icon: Ship, count: 12 },
  { name: "Entertainment", icon: Ticket, count: 45 },
  { name: "Dining", icon: Utensils, count: 80 },
  { name: "Car Rentals", icon: Car, count: 30 },
];

const PartnerCategories = () => {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-semibold mb-6">Partner Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category, index) => (
          <Button
            key={index}
            variant="outline"
            className="h-auto py-6 flex flex-col gap-2"
          >
            <category.icon className="h-6 w-6" />
            <span>{category.name}</span>
            <span className="text-sm text-muted-foreground">{category.count} partners</span>
          </Button>
        ))}
      </div>
    </div>
  );
}

export default PartnerCategories;