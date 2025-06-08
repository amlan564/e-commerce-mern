import React, { useRef } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { CloudUpload, File, X } from "lucide-react";
import { Button } from "../ui/button";

const ProductImageUpload = ({
  imageFile,
  setImageFile,
  uploadedImageUrl,
  setUploadedImageUrl,
}) => {
  const inputRef = useRef(null);

  const handleImageFileChange = (e) => {
    console.log(e.target.files);
    const selectedFile = e.target.files?.[0];
    if (selectedFile) setImageFile(selectedFile);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files?.[0];
    if (droppedFile) setImageFile(droppedFile);
  };

  const handleRemoveImage = () => {
    setImageFile(null);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <div className="w-full mx-auto">
      <Label className="text-lg font-semibold mb-2 block">Upload Image</Label>
      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className="border-2 border-gray-5900 border-dashed rounded-lg p-2"
      >
        <Input
          id="image-upload"
          type="file"
          className="hidden"
          ref={inputRef}
          onChange={handleImageFileChange}
        />
        {!imageFile ? (
          <Label
            htmlFor="image-upload"
            className="flex flex-col items-center justify-center h-32 cursor-pointer"
          >
            <CloudUpload className="w-10 h-10" />
            <span>Drag & drop or click to upload image</span>
          </Label>
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
