const express = require('express')
const router = express.Router()

// All Bixby 1.0 Related routes
router.get('/', (req,res) => {
    res.render('dcog/index')
})

// New Bixby 1.0 entry 
router.get('/new_entry', (req,res) => {
    res.render('dcog/new_entry')
})

// Create Bixby 1.0 Route
router.post('/', (req,res) => {
    res.send('Create')
})

module.exports = router