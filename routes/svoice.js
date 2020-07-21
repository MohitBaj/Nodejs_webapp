const express = require('express')
const router = express.Router()
const svoice_model = require('../models/svoice')
//const svoice = require('../models/svoice')

// All Svoice Related routes
router.get('/', async (req,res) => {
    let searchOptions = {}
    if(req.query.name != null && req.query.name !=='')
    {
        searchOptions.name = new RegExp(req.query.name, 'i')
    }
    try{
        const svoice_entries = await svoice_model.find(searchOptions)
        res.render('svoice/index', {
            svoice : svoice_entries,
            searchOptions: req.query
        })
    }catch{
        res.render('/')
    }
    //res.render('svoice/index')
})

// New Svoice entry 
router.get('/new_entry', (req,res) => {
    res.render('svoice/new_entry',{svoice: new svoice_model() })
})

// Create Svoice Route
router.post('/', async (req,res) => {
    const svoice_entry = new svoice_model({
        name: req.body.name
    })
    try {
        const newSvoiceEntry = await svoice_entry.save()
        res.redirect('svoice')
    }catch(err){
        res.render('svoice/new_entry',{
            svoice: svoice_entry,
            errorMessage: 'Error creating Svoice entry'
        })
    }
    // svoice_entry.save((err,newSvoiceEntry) => {
    //     if(err){
    //         res.render('svoice/new_entry',{
    //             svoice: svoice_entry,
    //             errorMessage: 'Error creating Svoice entry'
    //         })
    //     }else{
    //         res.redirect('svoice')
    //     }
    // })
    //res.send(req.body.name)
})

module.exports = router