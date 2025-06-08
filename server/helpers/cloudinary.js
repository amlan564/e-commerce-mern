const cloudinary = require("cloudinary").v2;
const multer = require("multer");

cloudinary.config({
  cloud_name: "dkbwju9pp",
  api_key: "796199826334526",
  api_secret: "lo8k0dzldcuUfqcSAVjns2Bsilo",
});

const storage = new multer.memoryStorage();

const imageUploadUtil = async (file) => {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });

  return result;
};

const upload = multer({ storage });

module.exports = { upload, imageUploadUtil };
