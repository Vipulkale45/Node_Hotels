const express = require('express');
const router = express.Router();
const MenuItem = require('./../models/MenuItem');

//post method to add a menu item
router.post('/', async(req,res)=>{
    try{
        const data = req.body
        const newMenu = new MenuItem(data);
        const response = await newMenu.save();
        console.log('data saved');
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});
    }
})

//Get Method to get the menu items
router.get('/', async(req,res)=>{
    try{
        const data = await MenuItem.find();
        console.log('data fetch');
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'});
    }
});

router.get('/:tasteType', async (req, res) => {
    try {
        const tasteType = req.params.tasteType;
        if (tasteType === 'sweet' || tasteType === 'spicy' || tasteType === 'sour') {
            const response = await MenuItem.find({ taste: tasteType });
            console.log("Menu fetched by taste");
            res.status(200).json(response);
        } else {
            res.status(404).json({ error: 'Invalid taste type' });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// comment add for testing purpose
module.exports = router;