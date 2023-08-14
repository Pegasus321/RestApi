const express = require('express');

const router = express.Router()
const Model = require("../model/model")



//Post Method
router.post('/post', (req, res) => {
    res.send('Post API')
})

//Get all Method
// router.get('/getAll', (req, res) => {
//     res.send('Get All API')
// })

//Get by ID Method
router.get('/getOne/:id', (req, res) => {
    res.send(req.params.id)
})

//Update by ID Method
router.patch('/update/:id', (req, res) => {
    res.send('Update by ID API')
})

//Delete by ID Method
router.delete('/delete/:id', (req, res) => {
    res.send('Delete by ID API')
})

router.get('/getAll', async (req, res) => {
    try {
        const data = await Model.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({message:error.message})
    }
})





module.exports = router;