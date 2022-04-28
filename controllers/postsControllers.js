const Post = require('../models/postsModel')
const { successHandel, errorHandel } = require('../service/responseHandel')

exports.getPosts = async (req, res) => {
  const allPosts = await Post.find()
  successHandel(res, allPosts)
}

exports.createPosts = async (req, res) => {
  try {
    const data = req.body
      const newPost = await Post.create({
        content: data.content,
        tags: data.tags,
        type: data.type,
        image: data.image,
        name: data.name,
      })
      successHandel(res, newPost)
  } catch(error) {
    errorHandel(res, error)
  }
}

exports.deleteAllPosts = async (req, res) => {
  await Post.deleteMany({})
  successHandel(res)
}

exports.deletePost = async (req, res) => {
  const id = req.params.id
  const result = await Post.findByIdAndRemove(id)
  if (!result) {
    errorHandel(res)
  } else {
    successHandel(res)
  }
}

exports.updatePost = async (req, res) => {
  try {
    const id = req.params.id
    const data = req.body
    if (data.content === '') {
      errorHandel(res)
    } else {
      const result = await Post.findByIdAndUpdate(id, data)
      if (result) {
        const editPost = await Post.find({
          _id: id
        })
        successHandel(res, editPost)
      } else {
        errorHandel(res)
      }
    }
  } catch(error) {
    errorHandel(res, error)
  }
}