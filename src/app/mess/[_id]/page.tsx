"use client";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Clock, DollarSign } from "lucide-react"
import Image from "next/image"
import useMessStore from "@/store/messStore"
import { use, useEffect, useState } from "react"
import { usePathname } from "next/navigation";

export default function MessDetails({ params }: { params: Promise<{ _id: string }> }) {
    const { getMessById, messData } = useMessStore()
    const resolvedParams = use(params);

    const [messDetails, setMessDetails] = useState({
        _id: "1",
        name: "Gajanan Mess",
        address: "Dharmraj Chowk, Akurdi, Pune",
        phoneNumber: "9876543210",
        messType: "veg",
        messImage: "/ghar_ka_khana.jpg",
        foodItems: [{
            name: "Butter Chicken",
            price: 12,
            description: "Tender chicken in a rich tomato-based sauce"
        },
        {
            name: "Vegetable Biryani",
            price: 10,
            description: "Fragrant rice dish with mixed vegetables"
        },
        {
            name: "Palak Paneer",
            price: 11,
            description: "Cottage cheese cubes in a creamy spinach sauce"
        },
        {
            name: "Tandoori Roti",
            price: 2,
            description: "Whole wheat flatbread baked in a tandoor"
        }],
    })

    // useEffect(() => {
    //     getMessById(resolvedParams._id)
    // }, [resolvedParams._id])

    return (
        <div className="mt-16 min-h-screen bg-gray-100 p-8">
            <div className="max-w-4xl mx-auto space-y-8">
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-bold text-orange-600">Ghar Ka Khana
                        <span className="ml-2 px-2 py-1 text-xs font-semibold text-white bg-green-500 rounded-full">Veg</span>
                        <span className="ml-2 px-2 py-1 text-xs font-semibold text-white bg-red-500 rounded-full">Non-Veg</span>
                    </h1>
                    <Badge variant="outline" className="text-orange-500 border-orange-500">
                        Open Now
                    </Badge>
                </div>

                <Image
                    src="/ghar_ka_khana.jpg"
                    alt="ghar ka khana"
                    className="w-full h-96 object-cover rounded-lg"
                    width={800}
                    height={400}
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card>
                        <CardContent className="p-4 flex items-center">
                            <Star className="h-5 w-5 text-yellow-500 fill-current mr-2" />
                            <div>
                                <p className="font-semibold">4.5 Stars</p>
                                <p className="text-sm text-gray-500">Based on 120 reviews</p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-4 flex items-center">
                            <MapPin className="h-5 w-5 text-gray-500 mr-2" />
                            <div>
                                <p className="font-semibold">123 Main St, City</p>
                                <p className="text-sm text-gray-500">2.5 miles away</p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-4 flex items-center">
                            <Clock className="h-5 w-5 text-gray-500 mr-2" />
                            <div>
                                <p className="font-semibold">Open Hours</p>
                                <p className="text-sm text-gray-500">Mon-Sat: 11AM - 9PM</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <Tabs defaultValue="menu">
                    <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="menu">Menu</TabsTrigger>
                        <TabsTrigger value="plans">Subscription Plans</TabsTrigger>
                        <TabsTrigger value="reviews">Reviews</TabsTrigger>
                    </TabsList>
                    <TabsContent value="menu" className="mt-4">
                        <Card>
                            <CardHeader>
                                <CardTitle>Today&apos;s Menu</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    <MenuItem name="Butter Chicken" price={12} description="Tender chicken in a rich tomato-based sauce" />
                                    <MenuItem name="Vegetable Biryani" price={10} description="Fragrant rice dish with mixed vegetables" />
                                    <MenuItem name="Palak Paneer" price={11} description="Cottage cheese cubes in a creamy spinach sauce" />
                                    <MenuItem name="Tandoori Roti" price={2} description="Whole wheat flatbread baked in a tandoor" />
                                </ul>
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="plans" className="mt-4">
                        <Card>
                            <CardHeader>
                                <CardTitle>Subscription Plans</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <PlanCard name="Weekly Plan" price={56} description="7 meals per week" />
                                <PlanCard name="Monthly Plan" price={200} description="30 meals per month" />
                                <PlanCard name="Family Plan" price={300} description="40 meals per month for 4 people" />
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="reviews" className="mt-4">
                        <Card>
                            <CardHeader>
                                <CardTitle>Customer Reviews</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <ReviewCard name="John Doe" rating={5} comment="Delicious food and great service!" date="2 days ago" />
                                <ReviewCard name="Jane Smith" rating={4} comment="Tasty meals, but sometimes delivery is late." date="1 week ago" />
                                <ReviewCard name="Mike Johnson" rating={5} comment="Best homestyle food in the area!" date="2 weeks ago" />
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>

                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white text-lg py-6">
                    Subscribe Now
                </Button>
            </div>
        </div>
    )
}

interface MenuItemProps {
    name: string;
    price: number;
    description: string;
}

function MenuItem({ name, price, description }: MenuItemProps) {
    return (
        <li className="flex justify-between items-start">
            <div>
                <h3 className="font-semibold">{name}</h3>
                <p className="text-sm text-gray-500">{description}</p>
            </div>
            <span className="font-semibold">${price}</span>
        </li>
    )
}

interface PlanCardProps {
    name: string;
    price: number;
    description: string;
}

function PlanCard({ name, price, description }: PlanCardProps) {
    return (
        <Card>
            <CardContent className="p-4 flex justify-between items-center">
                <div>
                    <h3 className="font-semibold text-lg">{name}</h3>
                    <p className="text-sm text-gray-500">{description}</p>
                </div>
                <div className="text-right">
                    <p className="text-2xl font-bold text-orange-500">${price}</p>
                    <Button className="mt-2 bg-orange-500 hover:bg-orange-600 text-white">Subscribe</Button>
                </div>
            </CardContent>
        </Card>
    )
}

interface ReviewCardProps {
    name: string;
    rating: number;
    comment: string;
    date: string;
}

function ReviewCard({ name, rating, comment, date }: ReviewCardProps) {
    return (
        <Card>
            <CardContent className="p-4">
                <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold">{name}</h3>
                    <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="ml-1 text-sm">{rating}</span>
                    </div>
                </div>
                <p className="text-sm text-gray-600">{comment}</p>
                <p className="text-xs text-gray-400 mt-2">{date}</p>
            </CardContent>
        </Card>
    )
}