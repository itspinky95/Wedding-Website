"use client"

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
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { toast } from "sonner"
import React, { useState } from "react"

const formSchema = z.object({
  firstName: z.string().nonempty(),
  lastName: z.string().nonempty(),
  email: z.string().email(),
  attending: z.boolean(),
  specialDietary: z.enum(["none", "vegan", "vegetarian", "gluten-free", "other"]),
  message: z.string().optional(),
})

export function RSVPForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      attending: true,
      specialDietary: "none",
      message: "",
    },
  });

  const [isLoading, setIsLoading] = useState(false);

  // Mark the onSubmit function as async to use await
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        // Assuming toast is from 'react-toastify' or a similar library
        toast.success('Email sent please check your junk folder');
      } else {
        toast.error('Failed to send email');
      }
    } catch (error) {
      console.error('Sending email failed:', error);
      toast.error('Failed to send email');
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 md:space-y-8 text-center ">
        {/* First Name and Last Name */}
        <div className="md:flex md:flex-wrap justify-center gap-4 spa">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="flex-1 min-w-[calc(50%-1rem)]">
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="John" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="flex-1 min-w-[calc(50%-1rem)]">
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {/* Email and Special Dietary Needs */}
        <div className="md:flex md:flex-wrap justify-center gap-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex-1 min-w-[calc(50%-1rem)]">
                <FormLabel>Email </FormLabel>
                <FormControl>
                  <Input placeholder="example@example.co.uk" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="specialDietary"
            render={({ field }) => (
              <FormItem className="flex-1 min-w-[calc(50%-1rem)]">
                <FormLabel>Special Dietary Needs?</FormLabel>
                <FormControl>
                  <Select>
                    <SelectTrigger className="">
                      <SelectValue placeholder="specialDietary" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="None">None</SelectItem>
                      <SelectItem value="Vegan">Vegan</SelectItem>
                      <SelectItem value="Vegetarian">Vegetarian</SelectItem>
                      <SelectItem value="Gluten-Free">Gluten-Free</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Any Messages</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="attending"
          render={({ field }) => (
            <FormItem className="flex items-center justify-center gap-2"> {/* Adjusted for alignment */}
              <FormLabel className="pr-2">Attending</FormLabel>
              <FormControl>
                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Submitting...' : 'Submit'}
        </Button>
      </form>
    </Form>
  )
}
