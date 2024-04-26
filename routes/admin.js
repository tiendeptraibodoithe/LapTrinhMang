const path = require("path");

const adminController = require("../controllers/admin");

const express = require("express");

const router = express.Router();

const products = [];
const tours = [];

// router.get("/add-product", adminController.getAddProduct);

// router.get("/products");

// router.post("/add-product", adminController.postAddProduct);
router.post("/add-tour", adminController.postTour);

router.get("/add-tour", adminController.getAddTour);

module.exports = router;
