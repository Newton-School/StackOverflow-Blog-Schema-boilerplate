const Blog   = require("../models/Blog.js");


const getallblog =async (req, res) => {

    const all_blog = await Blog.find({});
    res.status(200).json({
        "status": "success",
        "data": all_blog
    })
   
}

module.exports = { getallblog };