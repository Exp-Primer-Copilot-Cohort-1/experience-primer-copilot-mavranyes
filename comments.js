// Create web server
// 2021-07-02 09:54:42

const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const commentCtrl = require('../controllers/comment');
const rateLimit = require('../middleware/rate-limit');
const xss = require('../middleware/xss');

router.post('/', auth, rateLimit.createComment, xss.sanitizeBody, commentCtrl.createComment);
router.get('/', auth, rateLimit.getComments, xss.sanitizeQuery, commentCtrl.getComments);
router.get('/:id', auth, rateLimit.getComment, xss.sanitizeParams, commentCtrl.getComment);
router.put('/:id', auth, rateLimit.updateComment, xss.sanitizeParams, xss.sanitizeBody, commentCtrl.updateComment);
router.delete('/:id', auth, rateLimit.deleteComment, xss.sanitizeParams, commentCtrl.deleteComment);

module.exports = router;git add comments.js
