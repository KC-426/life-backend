const express = require("express")
const router = express.Router()
const Blogs_Controllers = require("../controllers/Blogs_Controller")

// admin user routes
router.get("/admin/get/list/of/all/blogs",Blogs_Controllers.getAllBlogs);
router.get("/search/products/for/add/a/new/blog", Blogs_Controllers.seacrhForProductsInBlogs);
router.post("/admin/create/new/blog/for/website",Blogs_Controllers.createABlog);

module.exports = router