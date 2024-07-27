"use client"
import React, { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { USER_ROLES } from "@/data/type"
import Link from "next/link"
import { VscEye, VscEyeClosed  } from "react-icons/vsc";

export default function Page() {
    const [role, setRole] = useState(USER_ROLES.STUDENT);
    const [showPassword, setShowPassword] = useState(false);
    const formSchema = z.object({
        mobile: z.string().refine((value) => /^\d{10}$/.test(value), {
            message: "Invalid Mobile Number.",
        }),
        password: z.string().refine((value) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/.test(value), {
            message: "Password should contain at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character and min 8 and max 20 characters.",
        }),
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            mobile: "",
            password: "",
        },
    })
    
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        console.log(role);
    }
    return (
        <div className="mx-auto sm:w-[320px] md:w-[550px] lg:w-[800px] mt-16">
            <div className=" flex flex-col gap-2 p-4 items-center w-full border-gray-400 border-2 rounded-xl">
                <h1 className="text-3xl font-bold text-center">Welcome
                    <span className="text-primary"> Back to</span>
                </h1>
                <Image src="/logo_transparent.png" alt="logo" width={100} height={50} />
                <div className=" flex rounded-full bg-gray-300 p-2">
                    <span className={` ${role === USER_ROLES.STUDENT && " bg-primary text-white"} rounded-full px-2 py-1 cursor-pointer`}
                        onClick={() => setRole(USER_ROLES.STUDENT)}
                    >
                        Student
                    </span>
                    <span className={`${role === USER_ROLES.MESS && " bg-primary text-white"} rounded-full px-2 py-1 cursor-pointer`}
                        onClick={() => setRole(USER_ROLES.MESS)}
                    >
                        Mess
                    </span>
                </div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex flex-col w-full">
                        <FormField
                            control={form.control}
                            name="mobile"
                            render={({ field }) => (
                                <FormItem
                                    className="w-full"
                                >
                                    <FormLabel>Mobile</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter Mobile Number" {...field} 
                                            className="w-full"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        
                        <div className=" relative w-full">
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input type={showPassword ? "text" : "password"} 
                                            {...field} placeholder="Enter Password"/>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Link href="/forgot-password" className=" w-full">
                                <div className="text-primary cursor-pointer text-sm text-end italic">Forgot Password?</div>
                            </Link>
                            <div className=" absolute right-1 top-11">
                                <span className="cursor-pointer text-lg" onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <VscEyeClosed /> : <VscEye />}
                                </span>
                            </div>
                        </div>

                        <Button type="submit">Submit</Button>
                    </form>
                </Form>
                <div className="flex justify-center items-center gap-1">
                    <span>Don't have an account?</span>
                    <Link href="/register">
                        <span className="text-primary cursor-pointer font-bold">Register</span>
                    </Link>
                </div>
            </div>

        </div>
    )
}
