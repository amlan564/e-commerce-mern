import React from "react";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";

const AdminProductTile = ({
  product,
  setOpenCreateProductsDialog,
  setFormData,
  setCurrentUpdatedId,
  handleDelete,
}) => {
  return (
    <Card className="w-full max-w-sm border-none p-0">
      <div>
        <div className="relative mb-2">
          <img
            src={product?.image}
            alt={product?.title}
            className="w-full h-[300px] rounded-t-lg object-cover"
          />
        </div>
        <CardContent>
          <h2 className="text-xl font-bold mb-2">{product?.title}</h2>
          <div className="flex justify-between items-center mb-2">
            <span
              className={`${
                product?.salePrice > 0 ? "line-through" : ""
              } text-lg font-semibold`}
            >
              ৳{product?.price}
            </span>
            {product?.salePrice > 0 ? (
              <span className="text-lg font-semibold">
                ৳{product?.salePrice}
              </span>
            ) : null}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center mb-6">
          <Button
            onClick={() => {
              setOpenCreateProductsDialog(true);
              setCurrentUpdatedId(product?._id);
              setFormData(product);
            }}
            className="bg-blue-600 text-white"
            size="lg"
          >
            Update
          </Button>
          <Button
            onClick={() => handleDelete(product?._id)}
            className="bg-red-600 text-white"
            size="lg"
          >
            Delete
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
};

export default AdminProductTile;
