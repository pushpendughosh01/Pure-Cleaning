'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { products } from '@/utils/Products'


// Sample product data


export default function ProductPage() {
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('All')
  
    const filteredProducts = products.filter(product => 
      (selectedCategory === 'All' || product.category === selectedCategory) &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )



    const categories = ['All', ...Array.from(new Set(products.map(product => product.category)))]

  
    return (
        <div className="container mx-auto md:px-12 px-4 py-8 mt-12 mb-24">
        <h1 className="md:text-4xl text-2xl text-center font-bold mb-8">Our Cleaning Services</h1>
        
        <div className="mb-8 flex flex-col sm:flex-row gap-4 items-center justify-center">
          <Input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-xs w-full border-black border-[0.05rem] rounded-full"
          />
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="max-w-xs w-full border-black">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map(category => (
                <SelectItem key={category} value={category}>{category}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="grid my-20 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <Card key={product.id} className="overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-sm text-gray-600">{product.category}</p>
              </CardContent>
              <CardFooter className="p-4 flex justify-between items-center">
                {/* <span className="text-lg font-bold">${product.price.toFixed(2)}</span> */}
                <a href="/contact" className='text-white text-sm bg-black py-2 px-4 rounded-3xl cursor-pointer'>Contact For Booking</a>
              </CardFooter>
            </Card>
          ))}
        </div>
  
        {filteredProducts.length === 0 && (
          <p className="text-center text-gray-500 mt-8">No products found.</p>
        )}
      </div>
    )
  }