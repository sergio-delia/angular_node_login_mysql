const { validationResult } = require('express-validator');

const Post = require('../models/post');

exports.fetchAll = async (req, res, next) => {

    try{

        const [allPosts] = await Post.fetchAll()
        res.status(200).json(allPosts)

    }catch(err){
        if(!err.statusCode){
            err.statusCode = 500;
        }
        next(err)
    }
}


exports.postPost = async (req, res, next) => {
    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return 
    }

    const title = req.body.title;
    const body = req.body.body;
    const user = req.body.user;

    try{

        const post = {
            title:title,
            body: body,
            user: user
        }
        const result = await Post.save(post)
        res.status(201).json({ message: "Posted!"})

    } catch(err){
        if(!err.statusCode){
            err.statusCode = 500;
        }
        next(err)

    }
}


exports.deletePost = async (req, res, next) => {
    
    try{

        /* In questo caso l'id viene preso direttamente dall'url essendo /:id quindi si usa req.params.id */
        const deleteResponse = await Post.delete(req.params.id)
        res.status(200).json(deleteResponse)

    }catch(err){
        if(!err.statusCode){
            err.statusCode = 500;
        }
        next(err)
    }
}

    