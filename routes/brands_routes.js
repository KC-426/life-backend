const express = require("express");
const router = express.Router();
const Brands_Controller = require("../controllers/Brands_Controller");

router.post("/create/category", Brands_Controller.createCategory);
router.post("/add/brand", Brands_Controller.addNewBrand);
router.get("/get/brand", Brands_Controller.getBrands);
router.post("/update/brand", Brands_Controller.updateBrand);
router.post("/create/maincategory", Brands_Controller.createMainCategory);
router.get("/get/all/category", Brands_Controller.getAllCategory);
router.get(
  "/get/category/for/addproduct",
  Brands_Controller.getCategoryByMainCategory
);
router.patch("/update/all/main/category", Brands_Controller.updateMainCategory);
router.patch("/edit/category/:category_id", Brands_Controller.editCategory);
router.get("/get/category/:category_id", Brands_Controller.getCategorysById);
router.get("/search/in/category", Brands_Controller.searchInCategory);
router.get("/filter/category", Brands_Controller.filterForCategory);
router.get(
  "/get/addproduct/maincategory",
  Brands_Controller.mainCategoryForProduct
);
router.patch("/delete/main/category/image", Brands_Controller.deleteImage);
router.delete("/delete/category/", Brands_Controller.deleteCategory);

module.exports = router;
