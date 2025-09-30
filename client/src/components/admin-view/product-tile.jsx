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
    <Card className="w-full max-w-sm mx-auto p-0 pb-4 border-none shadow-sm overflow-hidden cursor-pointer">
      <div>
        <div className="relative mb-2 group">
          <img
            src={product?.image}
            alt={product?.title}
            className="w-full object-cover rounded-t-lg scale-80"
          />
        </div>
        <CardContent>
          <h2 className="text-base font-medium mb-2">{product?.title}</h2>
          <div className="flex justify-between items-center mb-2">
            <span
              className={`${
                product?.salePrice > 0 ? "line-through text-red-500" : ""
              } text-sm font-medium`}
            >
              Tk {product?.price}
            </span>
            {product?.salePrice > 0 ? (
              <span className="text-sm font-medium">
                Tk {product?.salePrice}
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
