import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, Calendar, CreditCard, Settings } from "lucide-react"
import Link from "next/link"

export default function SubscriptionManagement() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-orange-600">Manage Your Subscriptions</h1>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-orange-500">Active Subscriptions</CardTitle>
            <CardDescription>View and manage your current meal plans</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <SubscriptionCard
              name="Mahalakshmi Mess"
              plan="Weekly Plan"
              price="$56/week"
              nextRenewal="July 28, 2024"
              status="active"
            />
            <SubscriptionCard
              name="Ghar Ka Khana"
              plan="Monthly Plan"
              price="$200/month"
              nextRenewal="August 15, 2024"
              status="expiring"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-orange-500">Upcoming Meals</CardTitle>
            <CardDescription>Preview your next scheduled meals</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <MealPreview
                date="Today"
                meals={[
                  "Grilled Chicken with Roasted Vegetables",
                  "Quinoa Salad with Avocado",
                  "Vegetable Stir Fry with Tofu"
                ]}
              />
              <MealPreview
                date="Tomorrow"
                meals={[
                  "Baked Salmon with Sweet Potato Mash",
                  "Greek Salad with Feta Cheese",
                  "Lentil Soup with Whole Grain Bread"
                ]}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-orange-500">Notifications</CardTitle>
            <CardDescription>Important updates about your subscriptions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <NotificationItem
                icon={<AlertCircle className="h-5 w-5 text-yellow-500" />}
                message="Your Fitness Fuel plan is expiring in 3 days. Renew now to avoid interruption."
              />
              <NotificationItem
                icon={<Calendar className="h-5 w-5 text-green-500" />}
                message="New seasonal menu available for Homestyle Haven. Check it out!"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

interface SubscriptionCardProps {
  name: string;
  plan: string;
  price: string;
  nextRenewal: string;
  status: 'active' | 'expiring';
}

function SubscriptionCard({ name, plan, price, nextRenewal, status }: SubscriptionCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl">{name}</CardTitle>
          <Badge variant={status === 'active' ? 'default' : 'destructive'}>
            {status === 'active' ? 'Active' : 'Expiring Soon'}
          </Badge>
        </div>
        <CardDescription>{plan} - {price}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-500">Next renewal: {nextRenewal}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Manage Plan</Button>
        {status === 'active' ? (
          <Button variant="destructive">Cancel Subscription</Button>
        ) : (
          <Button variant="default" className="bg-orange-500 hover:bg-orange-600 text-white">Renew Now</Button>
        )}
      </CardFooter>
    </Card>
  )
}

function MealPreview({ date, meals }: { date: string; meals: string[] }) {
  return (
    <div>
      <h3 className="font-semibold text-lg mb-2">{date}</h3>
      <ul className="list-disc list-inside space-y-1">
        {meals.map((meal, index) => (
          <li key={index} className="text-sm text-gray-600">{meal}</li>
        ))}
      </ul>
    </div>
  )
}

function NotificationItem({ icon, message }: { icon: React.ReactNode; message: string }) {
  return (
    <div className="flex items-start space-x-3 p-3 bg-orange-50 rounded-md">
      {icon}
      <p className="text-sm">{message}</p>
    </div>
  )
}