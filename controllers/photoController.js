import Photo from "../models/photoModel.js";

const createPhoto = async (req, res) => {
  try {
    const photo = await Photo.create(req.body);
    res.status(201).json({
      success: true,
      photo,
    });
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
  try {
    const photos = await Photo.find({});
    res.status(200).render("photos", { photos, link: "photos" });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const getPhoto = async (req, res) => {
  try {
    const photo = await Photo.findById(req.params.id);
    res.status(200).render("photo", { photo, link: "photos" });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

export { createPhoto, getAllPhotos, updatePhoto, getPhoto };
