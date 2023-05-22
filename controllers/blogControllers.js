const Blog   = require("../models/blog.js");


const getAllBlog = async (req, res) => {

    const all_blog = await Blog.find({});
    res.status(200).json({
        "status": "success",
        "data": all_blog
    })
   
}

module.exports = { getAllBlog };