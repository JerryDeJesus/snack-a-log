const confirmHealth = (snack) => {
    let { protein, fiber, added_sugar, is_healthy } = snack;
    protein = Number(protein);
    fiber = Number(fiber);
    added_sugar = Number(added_sugar);
    
  if(fiber >= 5 && added_sugar < 5){
      is_healthy = true
  }
  if(protein > 5 && added_sugar < 5){
      is_healthy = true
  }
  if(fiber > 5 && added_sugar > 5){
      is_healthy = false
  }
  if(protein > 5 && added_sugar > 5){
      is_healthy = false
  }
  if(protein >= 5 && fiber >= 5 && added_sugar > 5){
      is_healthy = false
  }
  if(protein < 5 && fiber < 5 && added_sugar > 5){
      is_healthy = false
  }
  if(protein < 5 && fiber < 5 && added_sugar < 5){
      is_healthy = false
  }
  if(typeof protein !== "number" || typeof fiber !== "number" || typeof added_sugar !== "number"){
      is_healthy = null
  }
  return is_healthy
};

module.exports = confirmHealth;
