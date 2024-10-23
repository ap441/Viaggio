import { Button } from "../ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { HandshakeIcon } from "lucide-react"

const BecomePartner = () => {
  return (
    <Card className="bg-primary/5 border-none">
      <CardHeader className="text-center">
        <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
          <HandshakeIcon className="h-6 w-6" />
        </div>
        <CardTitle className="text-3xl">Become a Partner</CardTitle>
        <CardDescription className="text-lg">
          Join our network of premium travel partners and grow your business
        </CardDescription>
      </CardHeader>
      <CardContent className="text-center">
        <div className="max-w-xl mx-auto space-y-4">
          <p className="text-muted-foreground">
            Partner with TravelChic to access our network of luxury travelers and enhance your brand presence in the premium travel market.
          </p>
          <Button size="lg" className="mt-4">
            Apply Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default BecomePartner;