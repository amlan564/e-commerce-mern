import React from "react";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

const AddressCard = ({
  addressInfo,
  handleUpdateAddress,
  handleDeleteAddress,
  setCurrentSelectedAddress,
  selectedId,
}) => {
  return (
    <Card
      onClick={
        setCurrentSelectedAddress
          ? () => setCurrentSelectedAddress(addressInfo)
          : null
      }
      className={`${
          selectedId?._id === addressInfo?._id ? "border-black" : "border-none"
        } shadow-sm cursor-pointer`}
    >
      <CardContent
        className="grid px-6 gap-4"
      >
        <p className="text-sm"><span className="font-medium">Address:</span> {addressInfo?.address}</p>
        <p className="text-sm"><span className="font-medium">City:</span> {addressInfo?.city}</p>
        <p className="text-sm"><span className="font-medium">Pincode:</span> {addressInfo?.pincode}</p>
        <p className="text-sm"><span className="font-medium">Phone:</span> {addressInfo?.phone}</p>
      </CardContent>
      <CardFooter className="grid grid-cols-2 gap-30 sm:gap-10 md:gap-6 lg:gap-10">
        <Button className="bg-green-500 hover:bg-green-600 transition-all" onClick={() => handleUpdateAddress(addressInfo)}>Edit</Button>
        <Button className="bg-red-500 hover:bg-red-600 transition-all" onClick={() => handleDeleteAddress(addressInfo)}>Delete</Button>
      </CardFooter>
    </Card>
  );
};

export default AddressCard;
