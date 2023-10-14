const mongoose = require("mongoose")
const Blogs_Schema = new mongoose.Schema(
    {
        blog_title:{
            type:String,
            required:true
        },
        blog_slug:{
            type:String,
            required:true
        },
        about_blog:{
            type:String,
        },
        blog_image: {
            image_name: { type: String },
            image_url: { type: String },
            path: { type: String },
          },
          blog_sub_headings: [
            {
            sub_head_title: { type: String },
            sub_head_description: { type: String },
            },
          ],
          blog_selected_products: [
            {
                product_id: { type: String },
                product_code: { type: String },
                product_name: { type: String },
                product_main_category: { type: String },
                product_category: { type: String },
                product_subcategory: { type: String },
                product_images: [
                  {
                    image_name: { type: String },
                    image_url: { type: String },
                    path: { type: String },
                  },
                ],
            },
          ]

    },{timestamps:true}
)

module.exports = mongoose.model("Blogs",Blogs_Schema)