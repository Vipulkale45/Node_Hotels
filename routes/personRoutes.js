const express = require('express');
const router = express.Router();
const person = require('./../models/person');

//POST route to add a person
router.post('/',async (req, res)=>{
    try{
    const data= req.body //Assuming the request body conatainss the person data
    // Create a new Person document using the mangoose model
    const newPerson = new person(data);
    //Save the new person to the database

    const response = await newPerson.save();
    console.log('data saved');
    res.status(200).json(response);
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({error: 'Internal servererror'})
    }
    
})

//GET method to get the person
router.get('/',async(req,res)=>{
    try{
        const data = await person.find();
        console.log('data fetched');
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal servererror'})
    }
})

//parametrised API calls
router.get('/:workType', async(req,res)=>{
    try{
        const workType = req.params.workType;
        if(workType == 'chef' || workType == 'manager'|| workType == 'waiter')
        {
            const response = await person.find({work: workType});
            console.log("response fetched");
            res.status(200).json(response);
        }
        else{
            res.status(404).json({error: 'invalid work Type'});
        }
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})
//UPDATE method
router.put('/:id',async (req,res)=>{
    try{
        const personId = req.params.id; //Extrract the id from the url parameter
        const updatedPersonData = req.body;//updated data for the person

        const response = await person.findByIdAndUpdate(personId, updatedPersonData,{
            new: true,
            runValidators: true,
        })

        if(!response)
        {
            return res.status(404).json({error:'person not found'});
        }

        console.log('data updated');
        res.status(200).json(response);
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({error:"Internal server Error"})
    }
})
//DELETED method
router.delete('/:id', async(req,res)=>{
    try{
        const personId = req.params.id;
        const response = await person.findByIdAndDelete(personId);
        if(!response)
        {
            return res.status(404).json({error:'person not found'});
        }

        console.log('data deleted');
        res.status(200).json({meassage: 'person Deleted Successfully'});
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({error:"Internal server Error"});
    }
})
module.exports = router;