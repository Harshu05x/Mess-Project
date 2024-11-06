"use client";
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { ShoppingBag, Mail, Lock, Eye, EyeOff } from "lucide-react"
import Link from "next/link"

export default function Login() {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <Card className="w-full max-w-md">
                <CardHeader className="space-y-1">
                    <div className="flex items-center justify-center mb-4">
                        <ShoppingBag className="h-8 w-8 text-orange-500" />
                        <span className="ml-2 text-2xl font-bold text-orange-500">MEAL'SPOTTER</span>
                    </div>
                    <CardTitle className="text-2xl font-bold text-center">Welcome back</CardTitle>
                    <CardDescription className="text-center">
                        Enter your email and password to login to your account
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input id="email" type="email" placeholder="m@example.com" className="pl-9" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="••••••••"
                                className="pl-9 pr-9"
                            />
                            <Button
                                variant="ghost"
                                size="icon"
                                className="absolute right-1 top-1"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? (
                                    <EyeOff className="h-4 w-4 text-gray-400" />
                                ) : (
                                    <Eye className="h-4 w-4 text-gray-400" />
                                )}
                            </Button>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="remember" />
                        <label
                            htmlFor="remember"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Remember me
                        </label>
                    </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Log in</Button>
                    <div className="text-sm text-center text-gray-500">
                        Don't have an account?{" "}
                        <Link href="/register" className="text-orange-500 hover:underline">
                            Sign up
                        </Link>
                    </div>
                    <Link href="#" className="text-sm text-center text-orange-500 hover:underline">
                        Forgot your password?
                    </Link>
                </CardFooter>
            </Card>
        </div>
    )
}