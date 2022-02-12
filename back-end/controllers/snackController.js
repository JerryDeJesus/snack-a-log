const express = require("express");
const snacks = express.Router();
const { getAllSnacks, getSnack, createSnack, deleteSnack, updateSnack } = require('../queries/snacks.js');
const { uppercaseLetters } = require("../validations/checkValidations.js");


snacks.get("/", async (req, res) => {
  const allSnacks = await getAllSnacks();
  if(allSnacks[0]){
    res.status(200).json({
      success: true,
      payload: allSnacks
    });
  }else{
    res.status(404).json({
      success: false,
      payload: "/not found/"
    });
  }
});

snacks.get('/:id', async (req, res) => {
  const { id } = req.params;
  try{
      const snack = await getSnack(id);
      if(snack.id){
          res.status(200).json({
            success: true,
            payload: snack
          });
      }else{
          res.status(404).json({ 
            success: false,
            payload: "/not found/"
          })
      }
  } catch(err){
      console.log(err);
  }
})

snacks.post('/', uppercaseLetters, async (req, res) => {
  try{
    const createdSnack = await createSnack(req.body);
      if(createdSnack.id){
          res.status(200).json({
            success: true, 
            payload: createdSnack
          });
      }else{
          res.status(404).json({ 
            success: false,
            payload: "snack addition error"
           })
      }
      
  }catch(err){
      console.log(err);
  }
})

  snacks.delete('/:id', async (req, res) => {
      const { id } = req.params;
      const deletedSnack = await deleteSnack(id);
      if(deletedSnack.id){
          res.status(200).json({
            success: true,
            payload: deletedSnack
          });
      }else{
          res.status(404).json({ 
            success: false,
            payload: "snack not found"
          });
      }
  })

  snacks.put('/:id', async (req, res) => {
      const { id } = req.params;
      const { body } = req;
      const updatedSnack = await updateSnack(id, body);
      if(updatedSnack.id){
          res.status(200).json({
            success: true,
            payload: updatedSnack
          });
      }else{
          res.status(404).json({ 
            success: false,
            payload: "snack not found"
          });
      }
  })


module.exports = snacks;