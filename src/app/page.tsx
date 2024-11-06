import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ShoppingBag, User, Menu, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-1">
        <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-orange-50 bg-cover bg-bottom" style={{ backgroundImage: "url('/hero_section.webp')" }}>
          <div className="absolute inset-0 bg-black opacity-50"></div> 
          <div className="relative container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center bg-[#5c5c5c7e] backdrop-blur-sm p-6 rounded-3xl">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-orange-500">
                  Discover Delicious Meals Near You
                </h1>
                <p className="mx-auto max-w-[700px] text-white md:text-xl">
                  Subscribe to our meal plans and enjoy fresh, home-cooked meals every day. Perfect for busy professionals and students.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-orange-500 text-white hover:bg-orange-600">Subscribe Now</Button>
                <Button variant="outline" className="text-orange-500 border-orange-500 hover:bg-orange-100">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-orange-500">Featured Mess</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center space-y-4 bg-white rounded-lg shadow-lg border border-orange-100">
                <Image
                  alt="Ghar Ka Khana"
                  className="aspect-video overflow-hidden rounded-t-lg object-cover object-center"
                  height="200"
                  src="/ghar_ka_khana.jpg"
                  width="500"
                />
                <h3 className="text-xl font-bold text-orange-500">Ghar Ka Khana</h3>
                <div className="flex items-center space-x-1">
                  <Star className="w-5 h-5 fill-current text-yellow-500" />
                  <Star className="w-5 h-5 fill-current text-yellow-500" />
                  <Star className="w-5 h-5 fill-current text-yellow-500" />
                  <Star className="w-5 h-5 fill-current text-yellow-500" />
                  <Star className="w-5 h-5 fill-current text-yellow-500" />
                </div>
                <p className="text-sm text-gray-500 text-center">Delicious home-cooked meals with a variety of options.</p>
                <p className="text-lg font-semibold text-orange-500">Starting at $8/meal</p>
                <Link href="/mess" className=" py-2">
                  <Button className="bg-orange-500 text-white hover:bg-orange-600">View Menu</Button>
                </Link>
              </div>
              <div className="flex flex-col items-center space-y-4 bg-white rounded-lg shadow-lg border border-orange-100">
                <Image
                  alt="Baba da Dhaba"
                  className="aspect-video overflow-hidden rounded-t-lg object-cover object-top"
                  height="200"
                  src="/baba_da_dhaba.jpg"
                  width="500"
                />
                <h3 className="text-xl font-bold text-orange-500">Baba da Dhaba</h3>
                <div className="flex items-center space-x-1">
                  <Star className="w-5 h-5 fill-current text-yellow-500" />
                  <Star className="w-5 h-5 fill-current text-yellow-500" />
                  <Star className="w-5 h-5 fill-current text-yellow-500" />
                  <Star className="w-5 h-5 fill-current text-yellow-500" />
                  <Star className="w-5 h-5 fill-current text-gray-300" />
                </div>
                <p className="text-sm text-gray-500 text-center">High-protein, balanced meals for fitness enthusiasts.</p>
                <p className="text-lg font-semibold text-orange-500">Starting at $10/meal</p>
                <Link href="/mess" className=" py-2">
                  <Button className="bg-orange-500 text-white hover:bg-orange-600">View Menu</Button>
                </Link>
              </div>
              <div className="flex flex-col items-center space-y-4 bg-white rounded-lg shadow-lg border border-orange-100">
                <img
                  alt="Mahalakshami Mess"
                  className="aspect-video overflow-hidden rounded-t-lg object-cover object-bottom"
                  height="100"
                  src="/mahalakshami_mess.jpg"
                  width="500"
                />
                <h3 className="text-xl font-bold text-orange-500">Mahalakshami Mess</h3>
                <div className="flex items-center space-x-1">
                  <Star className="w-5 h-5 fill-current text-yellow-500" />
                  <Star className="w-5 h-5 fill-current text-yellow-500" />
                  <Star className="w-5 h-5 fill-current text-yellow-500" />
                  <Star className="w-5 h-5 fill-current text-yellow-500" />
                  <Star className="w-5 h-5 fill-current text-yellow-500" />
                </div>
                <p className="text-sm text-gray-500 text-center">Delicious vegetarian and vegan options for plant-based eaters.</p>
                <p className="text-lg font-semibold text-orange-500">Starting at $9/meal</p>
                <Link href="/mess" className=" py-2">
                  <Button className="bg-orange-500 text-white hover:bg-orange-600">View Menu</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-orange-500">Join Our Community</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Get updates on new meal plans, special offers, and cooking tips.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                  <Button className="bg-orange-500 text-white hover:bg-orange-600" type="submit">
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-orange-200 bg-orange-50">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 MEAL'SPOTTER. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-orange-500" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-orange-500" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}