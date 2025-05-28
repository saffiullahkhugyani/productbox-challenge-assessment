import React from "react";
import CheckoutItem from "../components/checkout-item";
import CheckoutShippingForm from "../components/checkout-shipping-form";

export default function Checkout() {
  return (
    <div className="min-h-sreen">
      <section className="py-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold ">Checkout</h1>
        </div>
      </section>

      {/*Progress Section*/}
      <section className="container mx-auto px-4 pb-4">
        <div className="bg-white p-8 rounded-lg shadow items-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                1
              </div>
              <span className="font-medium">Cart</span>
            </div>
            <div className="w-25 h-px bg-primary"></div>

            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                2
              </div>
              <span>Shipping</span>
            </div>
            <div className="w-25 h-px bg-muted"></div>

            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-muted text-muted-foreground rounded-full flex items-center justify-center text-sm font-medium">
                3
              </div>
              <span className="text-muted-foreground">Payment</span>
            </div>
          </div>
        </div>
      </section>

      {/*checkout items section*/}
      <section className="container mx-auto px-4 pb-4">
        <CheckoutItem />
      </section>

      {/*section for shipping detail form*/}
      <section className="container mx-auto px-4 pb-4">
        <CheckoutShippingForm />
      </section>
    </div>
  );
}
