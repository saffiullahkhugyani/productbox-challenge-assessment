"use client"

import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from 'zod'

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Camera, Upload } from 'lucide-react'

const formSchema = z.object({
    itemName: z.string().min(3, { message: "Item name must be declared" }),
    itemPrice: z.number().min(1, { message: "Item price must be declated" }),
    itemImageUrl: z.string().min(3, {message:"Item image must be provided"})
})

export default function AddItemForm() {


    const form = useForm ({
         resolver: zodResolver(formSchema),
         defaultValues: {
            itemName: "",
    },   
    })

  return (
     <div className='bg-white p-8 rounded-lg shadow space-y-2'>
          <Form {...form}>
              <form className='space-y-6'>
                  <FormField
                      control={form.control}
                      name="itemName"
                      render={({ field }) => (
                                <FormItem>
                              <FormLabel>Item Title *</FormLabel>
                              <FormControl>              
                                  <Input placeholder="e.g., Pixel 8 Pro in good condition" {...field} />
                              </FormControl>
                              <FormMessage />
                          </FormItem>
                      )}
                  />

                   <FormField
                      control={form.control}
                      name="itemPrice"
                      render={({ field }) => (
                                <FormItem>
                              <FormLabel>Item Price *</FormLabel>
                              <FormControl>              
                                  <Input placeholder="PKR 0.00" {...field} />
                              </FormControl>
                              
                              <FormMessage />
                          </FormItem>
                      )}
                  />

                  <FormField
                      control={form.control}
                      name="itemUrl"
                      render={({ field }) => (
                                <FormItem>
                              <FormLabel>Item Image Url</FormLabel>
                              <FormControl>              
                                  <Card>
                                      <CardHeader>
                                          <CardTitle className={'flex items-center space-x-2'}>
                                              <Camera className='w-5 h-5'/>
                                              <span>Photo</span>
                                          </CardTitle>
                                          <CardDescription>Select a photo of your selling item.</CardDescription>
                                          <CardContent>
                                              <div className='flex flex-col border-2 border-dashed rounded-lg p-8 text-center items-center'>
                                                  <Upload className='w-12 h-12' />
                                                  <p className='text-lg font-medium mb-2'>Drag photo here or click browse</p>
                                                  <p className='text-sm text-muted-foreground mb-4'>JPG, PNG, or GIF upto 10MB</p>
                                                  <Input
                                                      type='file'
                                                      className={'hidden'}
                                                      accept='image/jpeg, image/png, image/jpg'
                                                      id='image-upload'
                                                  />
                                                  <Button onClick={()=> document.getElementById("image-upload")?.click()} >Choose File</Button>
                                              </div>
                                          </CardContent>
                                      </CardHeader>
                                  </Card>
                                  {/* <Input placeholder="Image Url" {...field} /> */}
                              </FormControl>
                              
                              <FormMessage />
                          </FormItem>
                      )}
                  />
                  <Button type={"submit"}>Submit</Button>
              </form>
          </Form>
        </div>
  )
}
