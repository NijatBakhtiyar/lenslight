import express from "express";
import * as photoController from "../controllers/photoController.js";

const photoRoute = express.Router();

photoRoute.route("/").post(photoController.createPhoto);
photoRoute.route("/").get(photoController.getAllPhotos);
photoRoute.route("/:id").put(photoController.updatePhoto);
photoRoute.route("/:id").get(photoController.getPhoto);

export default photoRoute;
