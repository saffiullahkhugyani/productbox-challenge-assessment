import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import placeholder from '../assets/placeholder.svg';
import { Search, Plus, Star, Heart, ShoppingCart } from "lucide-react"
import { Button } from './ui/button';


export default function ItemCard({product}) {
  return (
      <Card className={"group hover:shadow-lg cursor-pointer pt-0"}>
          <CardHeader className={"p-0"}>
              <div className="relative overflow-hidden rounded-t-lg">
                  
                    <img
                      src={ placeholder}
                      alt={product.title}
                      width={300}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-102 transition-transform duration-250"
                    />
                    <Badge className="absolute top-2 right-2 bg-white text-black">{product.condition}</Badge>
                  </div>
          </CardHeader>
          <CardContent>
              <div className='flex justify-between mb-2'>
                  <Badge className="bg-gray-200 text-gray-800 mb-2">{product.category}</Badge>
                  <Heart className="w-4 h-4 text-muted-foreground hover:text-red-500 cursor-pointer" />
              </div>
              <CardTitle className="text-lg mb-2 line-clamp-2">{product.title}</CardTitle>
              <div className='flex items-center space-x-1 mb-2'>
                  <Star className='w-4 h-4 fill-yellow-400 text-yellow-400' />
                  <span className='text-sm font-medium'>{product.rating}</span>
                  <span className='text-sm text-muted-foreground'>({product.reviews} reviews)</span>
              </div>
              <CardDescription className="text-sm mb-3">Sold by {product.seller}</CardDescription>
              <div className='flex justify-between items-center'>
                  <span>PKR { product.price}</span><Button>Add to Cart</Button>
              </div>
          </CardContent>
    </Card>
  )
}
