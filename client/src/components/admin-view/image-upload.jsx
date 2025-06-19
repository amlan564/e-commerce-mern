import React, { useEffect, useRef } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { CloudUpload, File, X } from "lucide-react";
import { Button } from "../ui/button";
import axios from "axios";
import { Skeleton } from "../ui/skeleton";

const ProductImageUpload = ({
  imageFile,
  setImageFile,
  imageLoadingState,
  uploadedImageUrl,
  setUploadedImageUrl,
  setImageLoadingState,
  isEditMode,
}) => {
  const inputRef = useRef(null);

  const handleImageFileChange = (e) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setImageFile(selectedFile);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files?.[0];
    if (droppedFile) {
      setImageFile(droppedFile);
    }
  };

  const handleRemoveImage = () => {
    setImageFile(null);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const uploadImageToCloudinary = async () => {
    setImageLoadingState(true);
    const data = new FormData();
    data.append("my_file", imageFile);
    const response = await axios.post(
      "http://localhost:5000/api/admin/products/upload-image",
      data
    );

    if (response?.data?.success) {
      setUploadedImageUrl(response.data.result.url);
      setImageLoadingState(false);
    }
  };

  useEffect(() => {
    if (imageFile !== null) uploadImageToCloudinary();
  }, [imageFile]);

  return (
    <div className="w-full mx-auto">
      <Label className="text-lg font-semibold mb-2 block">Upload Image</Label>
      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className={`${
          isEditMode ? "opacity-50" : ""
        } border-2 border-gray-5900 border-dashed rounded-lg p-2`}
      >
        <Input
          id="image-upload"
          type="file"
          className="hidden"
          ref={inputRef}
          onChange={handleImageFileChange}
          disabled={isEditMode}
        />
        {!imageFile ? (
          <Label
            htmlFor="image-upload"
            className={`${
              isEditMode ? "cursor-not-allowed" : ""
            } flex flex-col items-center justify-center h-32 cursor-pointer`}
          >
            <CloudUpload className="w-10 h-10" />
            <span>Drag & drop or click to upload image</span>
          </Label>
        ) : imageLoadingState ? (
          <Skeleton className="h-10 bg-gray-200" />
        ) : (
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <File className="w-8 h-8 mr-2" />
            </div>
            <p className="text-sm font-medium">{imageFile.name}</p>
            <Button onClick={handleRemoveImage}>
              <X className="w-4 h-4" />
              <span className="sr-only">Remove Image</span>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductImageUpload;
