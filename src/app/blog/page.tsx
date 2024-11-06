"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, ChevronRight, Clock, User } from "lucide-react";

export default function BlogArticles() {
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "All",
    "Healthy Eating",
    "Meal Planning",
    "Mess Owner Spotlight",
    "Recipes",
    "Nutrition",
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-orange-500 w-full h-60 flex flex-col justify-center items-center gap-8">
        <h1 className="text-3xl font-bold text-white tracking-wide">
          MEAL'SPOTTER Blog
        </h1>
        <div className="flex flex-col justify-center items-center gap-4">
          <Input
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="md:w-1/2 lg:w-[600px] rounded-full px-6 py-4"
          />
          <Button className="bg-white hover:bg-slate-100 rounded-full text-orange-500">
            <Search className="mr-2 h-4 w-4" /> Search
          </Button>
        </div>
      </div>
      <div className="max-w-6xl mx-auto space-y-8 py-8">
        <Tabs defaultValue="All">
          <TabsList className="flex flex-wrap mb-8">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="px-4 py-2"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <ArticleCard
                  title="10 Healthy Meal Prep Ideas for Busy Professionals"
                  excerpt="Discover easy and nutritious meal prep ideas that will save you time and keep you healthy throughout the week."
                  author="Jane Smith"
                  date="May 15, 2024"
                  category="Meal Planning"
                  image="/blog_1.jpeg"
                />
                <ArticleCard
                  title="The Rise of Home-Cooked Meal Subscriptions"
                  excerpt="Explore the growing trend of home-cooked meal subscriptions and how they're changing the way we eat."
                  author="John Doe"
                  date="May 12, 2024"
                  category="Mess Owner Spotlight"
                  image="/blog_2.jpeg"
                />
                <ArticleCard
                  title="5 Superfoods to Boost Your Immune System"
                  excerpt="Learn about the top superfoods that can help strengthen your immune system and improve overall health."
                  author="Dr. Emily Johnson"
                  date="May 10, 2024"
                  category="Nutrition"
                  image="/blog_3.jpeg"
                />
                <ArticleCard
                  title="How to Start Your Own Mess Service: Tips from Successful Owners"
                  excerpt="Get insider advice from thriving mess owners on how to launch and grow your own meal service business."
                  author="Michael Brown"
                  date="May 8, 2024"
                  category="Mess Owner Spotlight"
                  image="/blog_4.jpeg"
                />
                <ArticleCard
                  title="Vegetarian Indian Recipes for Beginners"
                  excerpt="Explore simple and delicious vegetarian Indian recipes that are perfect for those new to cooking Indian cuisine."
                  author="Priya Patel"
                  date="May 5, 2024"
                  category="Recipes"
                  image="/blog_5.jpeg"
                />
                <ArticleCard
                  title="Understanding Macronutrients: A Guide to Balanced Meals"
                  excerpt="Learn about the importance of macronutrients and how to create well-balanced meals for optimal health."
                  author="Alex Thompson"
                  date="May 3, 2024"
                  category="Nutrition"
                  image="/blog_6.jpeg"
                />
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="flex justify-center">
          <Button
            variant="outline"
            className="text-orange-500 border-orange-500 hover:bg-orange-50"
          >
            Load More Articles
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-orange-600">
              Subscribe to Our Newsletter
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Stay updated with the latest articles, recipes, and tips from
              MEAL'SPOTTER.
            </p>
            <div className="flex gap-4">
              <Input
                placeholder="Enter your email"
                type="email"
                className="flex-grow rounded-full px-5"
              />
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                Subscribe
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

interface ArticleCardProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image: string;
}

function ArticleCard({
  title,
  excerpt,
  author,
  date,
  category,
  image,
}: ArticleCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <CardContent className="flex-grow p-4">
        <Badge className="mb-2" variant="secondary">
          {category}
        </Badge>
        <CardTitle className="text-xl font-semibold mb-2">{title}</CardTitle>
        <p className="text-gray-600 text-sm mb-4">{excerpt}</p>
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <Clock className="mr-1 h-4 w-4" />
          <span>{date}</span>
          <User className="ml-4 mr-1 h-4 w-4" />
          <span>{author}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          variant="link"
          className="text-orange-500 hover:text-orange-600 p-0"
        >
          Read More <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
