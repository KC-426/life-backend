const Blogs_Schema = require("../modals/Blogs")
const Products_Schema = require("../modals/Products")
const Utils = require("../utils/Utils");

// creating new user 
const createABlog = async(req,res)=>{
console.log("Reqbody->",req.body)
    try{
        const create = new Blogs_Schema({
            blog_title:req.body?.blog_title,
            blog_slug:req.body?.blog_slug,
            about_blog:req.body?.about_blog,
            blog_image:req.body?.blog_image,
            blog_sub_headings:req.body?.blog_sub_headings,
            blog_selected_products:req.body?.blog_selected_products
        }) 
        const result = await create.save();
        res.status(200).send({result:result,message:"blog created successfully !!"})

    }
    catch(err){
        console.log(err)
        res.status(500).send("Something went wrong")
    }
}

// SEARCH IN PRODUCTS for blogs
const seacrhForProductsInBlogs = async(req,res)=>{
    const searchValue = req.query.search;
    const searchRegex = Utils.createRegex(searchValue);
    let result;
    try {
      result = await Products_Schema.find({
        product_name: { $regex: searchRegex },
      }).sort({ createdAt: -1 });
      if (!result.length > 0) {
        result = await Products_Schema.find({
          product_code: { $regex: searchRegex },
        }).sort({ createdAt: -1 });
      }
      res.status(200).send(result);
    } catch (err) {
      console.log(err);
      res.status(500).send("Something went wrong !!");
    }
}

//getting all users
const getAllBlogs = async(req,res)=>{
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 10; 
    const skip = (page - 1) * pageSize;
    try{
        const allBlogs = await Blogs_Schema.find({}).skip(skip)
        .limit(pageSize).sort({ createdAt: -1 });
        res.status(200).json(allBlogs)

    }catch(err){
        console.log(err)
        res.status(500).send("Something went wrong !!")
    }
}


// get user by id (who's logged in)
const getUserById = async (req,res)=>{
    try{
       
      
    }
    catch(err){
        console.log(err)
        res.status(500).send({status:false,message:"Unauthenticated !!"})
    }
}

// edit admin by id
const editAdminByID = async(req,res)=>{
    const adminId=req.params.admin_id;
    try{
        if(!adminId){
            return res.send("please provide a admin id")
        }
        if(req.body.password){
            const find = await Blogs_Schema.findByIdAndUpdate(adminId,)
            if(!find){
                return res.send("admin not found")
            }
            return res.status(200).send("Password Updated success")
        }
        const findUser = await Blogs_Schema.findByIdAndUpdate(adminId,{$set:req.body})
        if(!findUser){
            return res.send("admin not found")
        }
        res.status(200).send("admin updated successfully !!")


    }catch(err){
        console.log(err)
        res.status(500).send("Something went wrong !!")
    }
}

exports.getAllBlogs = getAllBlogs;
exports.getUserById = getUserById;
exports.createABlog = createABlog;
exports.editAdminByID = editAdminByID;
exports.seacrhForProductsInBlogs = seacrhForProductsInBlogs;
