const express = require('express');
const Entries = require('../models/entries');

const router = express.Router()

router.post('/', (req, res) => {
    const { title, content } = req.body
    if (title === undefined || title === '') {
        res.status(400).json({message: 'title is required'})
        return
    } else if (content === undefined || content === '') {
        res.status(400).json({message: 'content is required'})
        return
    }
    user_id = req.session.userId
    if (!user_id) {
        res.status(403).json({message: 'not logged in'})
        return
    }

    Entries
        .create(user_id, title, content)
        .then(entry => {
            res.status(201).json(entry)
        })
})


module.exports = router