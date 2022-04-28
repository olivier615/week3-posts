var express = require('express');
var router = express.Router();
const controllers = require('../controllers/postsControllers')

router.get('/', controllers.getPosts)
router.post('/', controllers.createPosts)
router.delete('/', controllers.deleteAllPosts)

router.delete('/:id', controllers.deletePost)
router.patch('/:id', controllers.updatePost)

module.exports = router;
