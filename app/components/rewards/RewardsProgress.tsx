"use client"

import { Progress } from "../ui/progress"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Award } from "lucide-react"

const RewardsProgress = () => {
  const currentPoints = 75000;
  const nextTierPoints = 100000;
  const progress = (currentPoints / nextTierPoints) * 100;

  return (
    <Card className="mb-8">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-2xl font-bold">Your Rewards Status</CardTitle>
        <Award className="h-8 w-8 text-primary" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Gold Member</span>
            <span className="font-semibold">{currentPoints.toLocaleString()} points</span>
          </div>
          <Progress value={progress} className="h-2" />
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Current Tier</span>
            <span className="text-muted-foreground">{(nextTierPoints - currentPoints).toLocaleString()} points to Platinum</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default RewardsProgress;