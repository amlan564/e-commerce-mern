import { filterOptions } from "@/config";
import React from "react";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { Separator } from "../ui/separator";

const ProductFilter = ({ filters, handleFilter }) => {
  return (
    <div className="rounded-lg shadow-sm">
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">Filters</h2>
        <Separator />
      </div>
      <div className="px-4 py-2 space-y-4">
        {Object.keys(filterOptions).map((item, index) => (
          <div key={index}>
            <div>
              <h3 className="text-base font-bold">Category</h3>
              <div className="grid gap-2 my-2">
                {filterOptions[item].map((option) => (
                  <Label
                    key={option.id}
                    className="flex items-center gap-2 font-medium text-base mt-2"
                  >
                    <Checkbox
                      checked={
                        filters &&
                        Object.keys(filters).length > 0 &&
                        filters[item] &&
                        filters[item].indexOf(option.id) > -1
                      }
                      onCheckedChange={() => handleFilter(item, option.id)}
                    />
                    {option.label}
                  </Label>
                ))}
              </div>
            </div>
            <Separator />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductFilter;
