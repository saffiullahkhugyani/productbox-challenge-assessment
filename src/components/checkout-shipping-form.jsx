import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MapPin } from "lucide-react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";

export default function CheckoutShippingForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className={"flex items-center space-x-1"}>
          <MapPin />
          <span className="text-2xl font-bold">Shipping Address</span>
        </CardTitle>
      </CardHeader>
      <CardContent className={"grid grid-col-1 md:grid-col-2 space-y-5"}>
        <div className="grid grid-cols-2 space-x-2">
          <div className="flex flex-col gap-2">
            <Label>First Name *</Label>
            <Input></Input>
          </div>
          <div className="flex flex-col gap-2">
            <Label>Last Name *</Label>
            <Input></Input>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Label>Email*</Label>
          <Input></Input>
        </div>
        <div className="flex flex-col gap-2">
          <Label>Phone Number *</Label>
          <Input></Input>
        </div>
        <div className="flex flex-col gap-2">
          <Label>Address *</Label>
          <Input></Input>
        </div>

        <div className="flex flex-col gap-2">
          <Label>Apartment, suite, etc.</Label>
          <Input></Input>
        </div>
        <div className="grid grid-cols-3 space-x-2">
          <div className="flex flex-col gap-2">
            <Label>City *</Label>
            <Input></Input>
          </div>
          <div className="flex flex-col gap-2">
            <Label>State *</Label>
            <Input></Input>
          </div>
          <div className="flex flex-col gap-2">
            <Label>Zip Code *</Label>
            <Input></Input>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <Button>Place order</Button>
        </div>
      </CardContent>
    </Card>
  );
}
