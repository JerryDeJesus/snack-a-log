const db = require("../db/dbConfig.js");
const snacks = require("../controllers/snackController");

const getAllSnacks = async () => {
    try {
        const allSnacks = await db.any("SELECT * FROM snacks;");
        return allSnacks
      } catch (error) {
        return error
    }
}

const getSnack = async (id) => {
   try{
      const oneSnack = await db.one(`SELECT * FROM snacks WHERE id=$1;`, id)
      return oneSnack
   }catch(err){
      return err
   }
};

const createSnack = async (snack) => {
   try{
      const newSnack = await db.one(
         "INSERT INTO snacks (name, fiber, protein, added_sugar, is_healthy, image) VALUES($1, $2, $3 ,$4, $5, $6) RETURNING *;",
         [snack.name, snack.fiber, snack.protein, snack.added_sugar, snack.is_healthy, snack.image]
         )
         return newSnack;
   }catch(err){
      console.log(err);
   }
};

const deleteSnack = async (id) => {
   try{
     const deletedSnack = await db.one('DELETE FROM snacks WHERE id = $1 RETURNING *;', id)
    return deletedSnack
  }catch(err){
        return err
     }
}

const updateSnack = async (id, snack) => {
   try{
      const updatedSnack = await db.one('UPDATE snacks SET name=$1, fiber=$2, protein=$3, added_sugar=$4, is_healthy=$5, image=$6 WHERE id=$7 RETURNING *;',
      [snack.name, snack.fiber, snack.protein, snack.added_sugar, is_healthy, image, id])
     return updatedSnack
     }catch(err){
     return err
   }
}

module.exports = { getAllSnacks, getSnack, createSnack, deleteSnack, updateSnack };