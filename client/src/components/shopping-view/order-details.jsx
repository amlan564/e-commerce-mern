import React from "react";
import { DialogContent } from "../ui/dialog";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";
import { useSelector } from "react-redux";

const ShoppingOrderDetailsView = ({ orderDetails }) => {
  const { user } = useSelector((state) => state.auth);

  return (
    <DialogContent className="sm:max-w-[500px] md:max-w-[600px] h-[90vh] overflow-y-auto">
      <div className="grid gap-6">
        <div className="grid gap-1">
          <div className="flex items-center justify-between mt-6">
            <p className="font-medium">Order ID</p>
            <p className="text-sm">{orderDetails?._id}</p>
          </div>
          <div className="flex items-center justify-between mt-2">
            <p className="font-medium">Order Date</p>
            <p className="text-sm">{orderDetails?.orderDate.split("T")[0]}</p>
          </div>
          <div className="flex items-center justify-between mt-2">
            <p className="font-medium">Order Price</p>
            <p className="text-sm">{orderDetails?.totalAmount}</p>
          </div>
          <div className="flex items-center justify-between mt-2">
            <p className="font-medium">Payment Method</p>
            <p className="text-sm">{orderDetails?.paymentMethod}</p>
          </div>
          <div className="flex items-center justify-between mt-2">
            <p className="font-medium">Payment Status</p>
            <p className="text-sm">{orderDetails?.paymentStatus}</p>
          </div>
          <div className="flex items-center justify-between mt-2">
            <p className="font-medium">Order Status</p>
            <p>
              <Badge
                className={`py-1 px-2 ${
                  orderDetails?.orderStatus === "Delivered"
                    ? "bg-green-500"
                    : orderDetails?.orderStatus === "Rejected"
                    ? "bg-red-500"
                    : "bg-black"
                }`}
              >
                {orderDetails?.orderStatus}
              </Badge>
            </p>
          </div>
        </div>
        <Separator />
        <div className="grid gap-4">
          <div className="grid gap-2">
            <div className="font-medium">Order Details</div>
            <ul className="grid gap-3">
              {orderDetails?.cartItems && orderDetails?.cartItems.length > 0
                ? orderDetails?.cartItems.map((item) => (
                    <li className="grid grid-cols-[2fr_1fr_auto] max-sm:grid-cols-1 max-sm:gap-2">
                      <p>
                        <span className="font-medium">Name: </span>
                        {item.title}
                      </p>
                      <p>
                        <span className="font-medium">Quantity: </span>
                        {item.quantity}
                      </p>
                      <p>
                        <span className="font-medium">Price: </span>
                        {item.price}
                      </p>
                    </li>
                  ))
                : null}
            </ul>
          </div>
        </div>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <div className="font-medium">Shipping Info</div>
            <div className="grid gap-1">
              <p>
                <span className="font-medium">Name: </span>
                {user?.userName}
              </p>
              <p>
                <span className="font-medium">Address: </span>
                {orderDetails?.addressInfo?.address}
              </p>
              <p>
                <span className="font-medium">City: </span>
                {orderDetails?.addressInfo?.city}
              </p>
              <p>
                <span className="font-medium">Pincode: </span>
                {orderDetails?.addressInfo?.pincode}
              </p>
              <p>
                <span className="font-medium">Phone: </span>
                {orderDetails?.addressInfo?.phone}
              </p>
            </div>
          </div>
        </div>
      </div>
    </DialogContent>
  );
};

export default ShoppingOrderDetailsView;
