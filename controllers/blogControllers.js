const Blog   = require("../models/blog.js");


const getAllBlog = async (req, res) => {

    const allBlog = await Blog.find({});
    res.status(200).json({
        "status": "success",
        "data": allBlog
    })
   
}

module.exports = { getAllBlog };
