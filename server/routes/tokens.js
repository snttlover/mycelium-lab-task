const express = require('express')
const router = express.Router()

const { getTokens, setToken, deleteToken } = require('../controllers/tokens')


router.route('/').get(getTokens).post(setToken)
router.route('/:id').delete(deleteToken)

module.exports = router