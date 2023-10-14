const express = require("express");
const routes = express.Router();
const Enquiry_Routes = require("../controllers/Enquiry_Controller");

routes.post("/add/enquiry", Enquiry_Routes.makeEnquiry);
routes.get('/get/enquiry', Enquiry_Routes.getEnquiry)

module.exports = routes;
