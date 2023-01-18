const express = require('express')
const { requireAuth, requireAdmin } = require('../../middlewares/requireAuth.middleware')
const { log } = require('../../middlewares/logger.middleware')
const { getBoards, getBoardById, addBoard, updateBoard, removeBoard, addBoardMsg, removeBoardMsg } = require('./board.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/', log,requireAuth, getBoards)
router.get('/:id',requireAuth, getBoardById)
router.post('/', requireAuth,addBoard)
// router.put('/:id',requireAuth,requireAdmin ,updateBoard)
router.put('/:id',requireAuth,updateBoard)
router.delete('/:id',requireAuth, removeBoard)
// router.delete('/:id', requireAuth, requireAdmin, removeBoard)

router.post('/:id/msg', addBoardMsg)
router.delete('/:id/msg/:msgId', removeBoardMsg)

module.exports = router


