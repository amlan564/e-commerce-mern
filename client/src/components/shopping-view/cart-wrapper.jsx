import React from "react";
import { SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";
import { Button } from "../ui/button";
import UserCartItemsContent from "./cart-items-content";
import { useNavigate } from "react-router-dom";
import { Separator } from "../ui/separator";

const UserCartWrapper = ({ setOpenCartSheet, cartItems }) => {
  const navigate = useNavigate();

  const totalAmount =
    cartItems && cartItems.length > 0
      ? cartItems.reduce(
          (sum, currentItem) =>
            sum +
            (currentItem?.salePrice > 0
              ? currentItem?.salePrice
              : currentItem?.price) *
              currentItem?.quantity,
          0
        )
      : 0;

  return (
    <SheetContent className="sm:max-w-md h-screen flex flex-col justify-between">
      <SheetHeader>
        <SheetTitle>Your Cart</SheetTitle>
      </SheetHeader>
      <div className="space-y-4 h-screen overflow-y-auto">
        {cartItems && cartItems.length > 0 ? (
          cartItems.map((item) => <UserCartItemsContent cartItem={item} />)
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="">Your cart is empty!</p>
          </div>
        )}
      </div>
      <div>
        <div className="mt-4 px-4">
          <Separator />
        </div>
        <div className="px-4 mt-2">
          <div className="flex justify-between">
            <span className="font-bold">Total</span>
            <span className="font-bold">Tk {totalAmount}</span>
          </div>
        </div>
        <div className="px-4 py-5">
          <Button
            onClick={() => {
              navigate("/shop/cart");
              setOpenCartSheet(false);
            }}
            className="w-full"
          >
            View Cart
          </Button>
        </div>
      </div>
    </SheetContent>
  );
};

export default UserCartWrapper;
