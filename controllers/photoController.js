import Photo from "../models/photoModel.js";

const createPhoto = async (req, res) => {
  try {
    const photo = await Photo.create(req.body);
    ` res.status(201).json({
      success: true,
      photo,
    });`;
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const updatePhoto = async (req, res) => {
  try {
    const photo = await Photo.findByIdAndUpdate(req.params.id, req.body);

    res.status(201).json({
      success: true,
      photo,
    });
  } catch {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const getAllPhotos = async (req, res) => {
  console.log(req.body);

  try {
    const photos = await Photo.find({});
    res.status(200).render("photos", {
      photos,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

export { createPhoto, getAllPhotos, updatePhoto };
