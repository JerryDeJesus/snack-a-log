const db = require("../db/dbConfig.js");

const getAllSnacks = async () => {
    try {
        const allSnacks = await db.any("SELECT * FROM snacks");
        return allSnacks
      } catch (error) {
        return error
    }
}

module.exports = { getAllSnacks };