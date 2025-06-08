import ProductImageUpload from "@/components/admin-view/image-upload";
import CommonForm from "@/components/common/form";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { addProductFormElements } from "@/config";
import { useState } from "react";

const initialFormData = {
  image: null,
  title: "",
  description: "",
  category: "",
  price: "",
  salePrice: "",
  totalStock: "",
};

const AdminProducts = () => {
  const [openCreateProductsDialog, setOpenCreateProductsDialog] =
    useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [imageFile, setImageFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");

  const onSubmit = () => {};

  return (
    <>
      <div className="mb-5 w-full flex justify-end">
        <Button
          onClick={() => setOpenCreateProductsDialog(true)}
          className="bg-black text-white"
        >
          Add New Product
        </Button>
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4"></div>
        <Dialog
          open={openCreateProductsDialog}
          onOpenChange={() => {
            setOpenCreateProductsDialog(false);
          }}
        >
          <DialogContent className="bg-white max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Add New Product</DialogTitle>
                <DialogDescription></DialogDescription>
              </DialogHeader>
              <ProductImageUpload
                imageFile={imageFile}
                setImageFile={setImageFile}
                uploadedImageUrl={uploadedImageUrl}
                setUploadedImageUrl={setUploadedImageUrl}
              />
              <div className="py-6">
                <CommonForm
                  onSubmit={onSubmit}
                  formData={formData}
                  setFormData={setFormData}
                  buttonText="Add Product"
                  formControls={addProductFormElements}
                ></CommonForm>
              </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default AdminProducts;
