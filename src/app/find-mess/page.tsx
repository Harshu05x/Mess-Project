"use client";
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Search, MapPin, Star, DollarSign } from "lucide-react"
import Link from "next/link"

export default function MessSearch() {
  const [priceRange, setPriceRange] = useState([0, 100])
  const [messes, setMesses] = useState([
    {
      _id: "1",
      name: "Gajanan Mess",
      cuisine: "Vegetarian",
      rating: 4.7,
      price: 9,
      location: "789 Oak St, City",
      image: '/ghar_ka_khana.jpg'
    },
    {
      _id: "2",
      name: "Baba da Dhaba",
      cuisine: "Indian",
      rating: 4.5,
      price: 8,
      location: "123 Main St, City",
      image: "/baba_da_dhaba.jpg"
    },
    {
      _id: "3",
      name: "Mahalakshami Mess",
      cuisine: "Health Food",
      rating: 4.2,
      price: 10,
      location: "456 Elm St, City",
      image: "/mahalakshami_mess.jpg"
    }
  ])

  return (
    <div className="mt-16 w-screen min-h-screen bg-gray-100 p-8">
      <div className="space-y-8 w-full">
        <h1 className="text-3xl font-bold text-orange-600">Find Your Perfect Mess</h1>
        
        <div className="flex flex-col md:flex-row gap-6 w-full">
          <Card className="w-full md:w-1/3">
            <CardHeader>
              <CardTitle className="text-2xl text-orange-500">Search Filters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Location</label>
                <Input placeholder="Enter your location" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Cuisine Type</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select cuisine" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Cuisines</SelectItem>
                    <SelectItem value="indian">Indian</SelectItem>
                    <SelectItem value="chinese">Chinese</SelectItem>
                    <SelectItem value="italian">Italian</SelectItem>
                    <SelectItem value="vegetarian">Vegetarian</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Price Range</label>
                <Slider
                  min={0}
                  max={100}
                  step={1}
                  value={priceRange}
                  onValueChange={setPriceRange}
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                Apply Filters
              </Button>
            </CardContent>
          </Card>
          
          <div className="w-full md:w-2/3 space-y-6">
            <div className="relative">
              <Input
                placeholder="Search for mess, cuisine, or dishes"
                className="w-full pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {messes.map((mess, index) => (
                <MessCard
                  key={index}
                  _id={mess._id}
                  name={mess.name}
                  cuisine={mess.cuisine}
                  rating={mess.rating}
                  price={mess.price}
                  location={mess.location}
                  image={mess.image}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface MessCardProps {
  _id: string;
  name: string;
  cuisine: string;
  rating: number;
  price: number;
  location: string;
  image: string;
  imgClassName?: string;
}

function MessCard({ _id, name, cuisine, rating, price, location, image, imgClassName }: MessCardProps) {
  return (
    <Card className="overflow-hidden">
      <img src={image} alt={name} className={`w-full h-60 object-cover ${imgClassName || 'object-center'}`} />
      <CardContent className="p-4">
        <h3 className="text-xl font-semibold text-orange-600">{name}</h3>
        <p className="text-sm text-gray-500">{cuisine}</p>
        <div className="flex items-center mt-2">
          <Star className="h-5 w-5 text-yellow-500 fill-current" />
          <span className="ml-1 text-sm">{rating}</span>
        </div>
        <div className="flex items-center mt-1">
          <DollarSign className="h-5 w-5 text-green-500" />
          <span className="ml-1 text-sm">Starting at ${price}/meal</span>
        </div>
        <div className="flex items-center mt-1">
          <MapPin className="h-5 w-5 text-gray-400" />
          <span className="ml-1 text-sm text-gray-500">{location}</span>
        </div>
        <Link href={`/mess/${_id}`}>
            <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
              View Menu
            </Button>
        </Link>
      </CardContent>
    </Card>
  )
}