const express = require("express");
const snacks = express.Router();
const { getAllSnacks, getSnack, createSnack, deleteSnack, updateSnack } = require('../queries/snacks');

snacks.get("/", async (req, res) => {
  const allSnacks = await getAllSnacks();
  if(allSnacks[0]){
    res.status(200).json(allSnacks);
  }else{
    res.status(500).json({ error: "server error"});
  }
});

snacks.get('/:id', async (req, res) => {
  const { id } = req.params;
  try{
      const snack = await getSnack(id);
      if(snack.id){
          res.status(200).json(snack);
      }else{
          res.status(500).json({ error: "server-side error" })
      }
  } catch(err){
      console.log(err);
  }
})

snacks.post('/', async (req, res) => {
  const { name, fiber, protein, added_sugar, is_healthy, image } = req.body;
  // if(!name || !fiber || !protein) possible validation step with if statement

  try{
      const createdSnack = await createSnack(req.body);
      if(createdSnack.id){
          res.status(200).json(createdSnack);
      }else{
          res.status(500).json({ error: "snack addition error" })
      }
  }catch(err){
      console.log(err);
  }

})

  snacks.delete('/:id', async (req, res) => {
      const { id } = req.params;
      const deletedSnack = await deleteSnack(id);
      if(deletedSnack.id){
          res.status(200).json(deletedSnack);
      }else{
          res.status(404).json({ error: "snack not found"});
      }
  })

  snacks.put('/:id', async (req, res) => {
      const { id } = req.params;
      const { body } = req;
      const updatedSnack = await updateSnack(id, body);
      if(updatedSnack.id){
          res.status(200).json(updatedSnack);
      }else{
          res.status(404).json({ error: "snack not found"});
      }
  })


module.exports = snacks;