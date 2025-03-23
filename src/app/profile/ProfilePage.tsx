"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Settings, CreditCard, Bell, Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { SignOutButton, UserButton, useUser } from "@clerk/nextjs";

export default function UserProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const { user } = useUser();
  return (
    <div className="mt-16 min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-orange-600">User Profile</h1>
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              className="border-orange-500 text-orange-500 hover:bg-orange-50"
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? "Save Changes" : "Edit Profile"}
            </Button>
            <SignOutButton>
              <Button
                variant="outline"
                className="border-red-500 text-red-500 hover:bg-red-50"
              >
                Sign Out
              </Button>
            </SignOutButton>
          </div>
        </div>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-6">
              <Avatar className="h-24 w-24">
                <AvatarImage
                  src={user?.imageUrl}
                  alt={user?.primaryEmailAddress?.emailAddress}
                />
                <AvatarFallback>{user?.primaryEmailAddress?.emailAddress.toUpperCase()}</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-2xl font-semibold">{user?.fullName}</h2>
                <p className="text-gray-500">{user?.primaryEmailAddress?.emailAddress}</p>
                <div className="flex items-center mt-2">
                  <Badge variant="secondary" className="mr-2 bg-orange-100">
                    Premium Member
                  </Badge>
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="ml-1 text-sm font-medium">
                    4.8 (25 reviews)
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="personal">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="personal">Personal Info</TabsTrigger>
            <TabsTrigger value="subscriptions">Subscriptions</TabsTrigger>
            <TabsTrigger value="payment">Payment</TabsTrigger>
            {/* <TabsTrigger value="notifications">Notifications</TabsTrigger> */}
          </TabsList>
          <TabsContent value="personal" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First name</Label>
                    <Input value={user?.firstName || ""} disabled={!isEditing} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last name</Label>
                    <Input value={user?.lastName || ""} disabled={!isEditing} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    value={user?.primaryEmailAddress?.emailAddress || ""}
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    type="tel"
                    defaultValue="+1 (555) 123-4567"
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input
                    defaultValue="123 Main St, City, Country"
                    disabled={!isEditing}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="subscriptions" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Active Subscriptions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <SubscriptionItem
                  name="Ghar Ka Khana"
                  plan="Weekly Plan"
                  price="$56/week"
                  renewalDate="July 28, 2024"
                />
                <SubscriptionItem
                  name="Mahalakshami Mess"
                  plan="Monthly Plan"
                  price="$200/month"
                  renewalDate="August 15, 2024"
                />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="payment" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Payment Methods</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <PaymentMethodItem
                  type="Visa"
                  lastFour="4567"
                  expiryDate="12/2025"
                />
                <PaymentMethodItem
                  type="Mastercard"
                  lastFour="8901"
                  expiryDate="09/2024"
                />
                <Button className="w-full">Add New Payment Method</Button>
              </CardContent>
            </Card>
          </TabsContent>
          {/* <TabsContent value="notifications" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <NotificationPreference
                  title="Email Notifications"
                  description="Receive updates and offers via email"
                />
                <NotificationPreference
                  title="SMS Notifications"
                  description="Get text messages for order updates"
                />
                <NotificationPreference
                  title="Push Notifications"
                  description="Allow app notifications on your device"
                />
              </CardContent>
            </Card>
          </TabsContent> */}
        </Tabs>
      </div>
    </div>
  );
}

function SubscriptionItem({ name, plan, price, renewalDate }: any) {
  return (
    <Card>
      <CardContent className="p-4 flex justify-between items-center">
        <div>
          <h3 className="font-semibold">{name}</h3>
          <p className="text-sm text-gray-500">
            {plan} - {price}
          </p>
          <p className="text-xs text-gray-400">Renews on {renewalDate}</p>
        </div>
        <Button
          variant="outline"
          className="border-orange-500 text-orange-500 hover:bg-orange-50"
        >
          Manage
        </Button>
      </CardContent>
    </Card>
  );
}

function PaymentMethodItem({ type, lastFour, expiryDate }: any) {
  return (
    <Card>
      <CardContent className="p-4 flex justify-between items-center">
        <div className="flex items-center">
          <CreditCard className="h-6 w-6 text-gray-500 mr-2" />
          <div>
            <p className="font-semibold">
              {type} ending in {lastFour}
            </p>
            <p className="text-sm text-gray-500">Expires {expiryDate}</p>
          </div>
        </div>
        <Button
          variant="ghost"
          className="text-red-500 hover:text-red-600 hover:bg-red-50"
        >
          Remove
        </Button>
      </CardContent>
    </Card>
  );
}

function NotificationPreference({ title, description }: any) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <input type="checkbox" className="toggle toggle-primary" defaultChecked />
    </div>
  );
}
