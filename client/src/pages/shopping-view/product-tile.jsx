import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Eye } from "lucide-react";
import React from "react";

const ShoppingProductTile = ({
  product,
  handleGetProductDetails,
  handleAddToCart,
}) => {
  return (
    <Card className="w-full max-w-sm mx-auto p-0 pb-4 border border-gray-200 shadow-sm overflow-hidden cursor-pointer">
      <div className="relative">
        <div
          className="relative group"
          onClick={() => handleGetProductDetails(product?._id)}
        >
          <img
            src={product?.image}
            alt={product?.title}
            className="w-full h-[35vh] object-cover rounded-t-lg scale-80 hover:scale-90 transition-all duration-500"
          />
          {product?.totalStock === 0 ? (
            <Badge className="absolute top-2 left-2 bg-black/50 text-white">
              Out of Stock
            </Badge>
          ) : product?.totalStock <= 10 ? (
            <Badge className="absolute top-2 left-2 bg-red-500 text-white">
              {`Only ${product?.totalStock} items left`}
            </Badge>
          ) : product?.salePrice > 0 ? (
            <Badge className="absolute top-2 left-2 bg-red-500 text-white">
              Sale
            </Badge>
          ) : null}
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-12 h-12 bg-black/90 rounded-full flex items-center justify-center">
              <Eye className="text-white" />
            </div>
          </div>
        </div>
        <CardContent className="px-4 py-2">
          <h2 className="text-base font-medium mb-2">{product?.title}</h2>
          <div className="flex justify-between items-center mb-2">
            <span
              className={`${
                product?.salePrice > 0 ? "line-through text-red-500" : ""
              }  text-sm font-medium`}
            >
              Tk {product?.price}
            </span>
            {product?.salePrice > 0 ? (
              <span className="text-sm font-medium">
                Tk {[product?.salePrice]}
              </span>
            ) : null}
          </div>
        </CardContent>
      </div>
      <CardFooter>
        {product?.totalStock === 0 ? (
          <Button className="w-full opacity-60 cursor-not-allowed">
            Out of Stock
          </Button>
        ) : (
          <Button
            onClick={() => handleAddToCart(product?._id, product?.totalStock)}
            className="w-full"
          >
            Add to Cart
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ShoppingProductTile;
