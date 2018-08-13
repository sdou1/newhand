const express = require('express')
const router = express.Router()
const songController = require('../controllers/SongController')
router.get('/getsongs',songController.GetAllSongs)
router.post('/postsong', songController.PostSong)
module.exports = router