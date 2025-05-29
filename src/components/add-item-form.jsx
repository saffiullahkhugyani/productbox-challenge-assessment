"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import axios from "axios";

const formSchema = z.object({
  name: z.string().min(3, { message: "Item name must be declared" }),
  price: z
    .number({ invalid_type_error: "Item price must be a number" })
    .min(1, { message: "Item price must be declared" }),
  img: z.string().min(3, { message: "Item image must be provided" }),
});

export default function AddItemForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      itemName: "",
      itemPrice: 0,
      itemImageUrl: "",
    },
  });

  const { reset } = form;

  const handleSubmit = (data) => {
    console.log("Form submitted:", data);
    postItem(data);
  };

  const postItem = async (data) => {
    try {
      const response = await axios.post("http://localhost:3000/items", data);
      console.log(response);
      if (response.status == 200) {
        reset({
          name: "",
          price: 0,
          img: "",
        });
        alert("Item has been posted");
      }
    } catch (error) {
      console.log("error fetching products", error);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow space-y-2">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Item Title *</FormLabel>
                <FormControl>
                  <Input
                    placeholder="e.g., Pixel 8 Pro in good condition"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Item Price *</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="PKR 0.00"
                    {...field}
                    onChange={(e) => field.onChange(parseFloat(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="img"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Item Image URL *</FormLabel>
                <FormControl>
                  <Input
                    placeholder="https://example.com/image.jpg"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
