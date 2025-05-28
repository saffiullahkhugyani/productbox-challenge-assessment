import React from 'react'
import AddItemForm from '../components/add-item-form'

export default function AddItems() {
  return (
    <div className='min-h-screen'>
      <section className='py-8'>
        <div className='container mx-auto px-4 text-center'>
          <h1 className='text-3xl font-bold '>List your Item</h1>

        </div>
      </section>
       {/* Progress Steps */}
      <section className='container mx-auto px-4 '>
          <div className=" bg-white p-8 rounded-lg shadow items-center">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                  1
                </div>
                <span className="font-medium">Item Details</span>
              </div>
              <div className="flex-1 h-px bg-gray-200"></div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gray-200 text-muted-foreground rounded-full flex items-center justify-center text-sm">
                  2
                </div>
                <span className="text-muted-foreground">Review & Publish</span>
              </div>
            </div>
          </div>
      </section>

      {/*Add Item Form Section*/}
      <section className='container mx-auto px-4 mt-8'>
       <AddItemForm/>
        </section>
    </div>
  )
}
