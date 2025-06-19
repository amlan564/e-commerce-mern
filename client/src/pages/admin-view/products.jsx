import ProductImageUpload from "@/components/admin-view/image-upload";
import AdminProductTile from "@/components/admin-view/product-tile";
import CommonForm from "@/components/common/form";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { addProductFormElements } from "@/config";
import {
  addNewProduct,
  fetchAllProducts,
  updateProduct,
  deleteProduct,
} from "@/store/admin/products-slice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";

const initialFormData = {
  image: null,
  title: "",
  description: "",
  category: "",
  price: "",
  salePrice: "",
  totalStock: "",
};

const optionalField = ["salePrice"];

const AdminProducts = () => {
  const [openCreateProductsDialog, setOpenCreateProductsDialog] =
    useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [imageFile, setImageFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [imageLoadingState, setImageLoadingState] = useState(false);
  const [currentUpdatedId, setCurrentUpdatedId] = useState(null);

  const { productList } = useSelector((state) => state.adminProducts);
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    currentUpdatedId !== null
      ? dispatch(
          updateProduct({
            id: currentUpdatedId,
            formData,
          })
        ).then((data) => {
          if (data?.payload?.success) {
            dispatch(fetchAllProducts());
            setFormData(initialFormData);
            setOpenCreateProductsDialog(false);
            setCurrentUpdatedId(null);
            toast.success("Product updated successfully!");
          }
        })
      : dispatch(
          addNewProduct({
            ...formData,
            image: uploadedImageUrl,
          })
        ).then((data) => {
          if (data?.payload?.success) {
            dispatch(fetchAllProducts());
            setImageFile(null);
            setFormData(initialFormData);
            setOpenCreateProductsDialog(false);
            toast.success("Product added successfully");
          }
        });
  };

  const handleDelete = (getCurrentProductId) => {
    dispatch(deleteProduct(getCurrentProductId)).then((data) => {
      console.log(data);
      if (data?.payload?.success) {
        dispatch(fetchAllProducts());
        toast.success("Product Deleted Successfully");
      }
    });
  };

  const isFormValid = () => {
    return Object.keys(formData)
      .filter((key) => !optionalField.includes(key))
      .every((key) => formData[key] !== "");
  };

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return (
    <>
      <div className="mb-5 w-full flex justify-end">
        <Button
          onClick={() => setOpenCreateProductsDialog(true)}
          className="bg-black text-white"
        >
          Add New Product
        </Button>
      </div>
      <div className="grid gap-4 justify-center md:grid-cols-3 lg:grid-cols-4 mt-10">
        {productList && productList.length > 0
          ? productList.map((productItem, index) => (
              <AdminProductTile
                key={index}
                setOpenCreateProductsDialog={setOpenCreateProductsDialog}
                setFormData={setFormData}
                setCurrentUpdatedId={setCurrentUpdatedId}
                product={productItem}
                handleDelete={handleDelete}
              />
            ))
          : null}
      </div>
      <Dialog
        open={openCreateProductsDialog}
        onOpenChange={() => {
          setOpenCreateProductsDialog(false);
          setCurrentUpdatedId(null);
          setFormData(initialFormData);
        }}
      >
        <DialogContent className="bg-white max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {currentUpdatedId !== null ? "Update Product" : "Add New Product"}
            </DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <ProductImageUpload
            imageFile={imageFile}
            setImageFile={setImageFile}
            uploadedImageUrl={uploadedImageUrl}
            setUploadedImageUrl={setUploadedImageUrl}
            setImageLoadingState={setImageLoadingState}
            imageLoadingState={imageLoadingState}
            isEditMode={currentUpdatedId !== null}
          />
          <div className="py-6">
            <CommonForm
              onSubmit={onSubmit}
              formData={formData}
              setFormData={setFormData}
              buttonText={
                currentUpdatedId !== null ? "Update Product" : "Add Product"
              }
              formControls={addProductFormElements}
              isBtnDisabled={!isFormValid()}
            ></CommonForm>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AdminProducts;
