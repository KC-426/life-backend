const express = require("express")
const router = express.Router();
const Banner_Controller = require("../controllers/Banners_Controller");


router.get("/get/all/banners",Banner_Controller.getAllbanners);
router.post('/add/new/banner',Banner_Controller.addNewBanner);
router.patch("/change/banner/by/id/:banner_id",Banner_Controller.changeBanner);
router.delete("/delete/banner/by/id/:banner_id",Banner_Controller.deleteBanner);

module.exports = router