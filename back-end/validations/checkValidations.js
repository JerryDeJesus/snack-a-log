const uppercaseLetters = (req, res, next) => {
    let str = req.body.name;
    let splitStr = str.split(" ").map(word => {
        if(word.length > 2) {
            word = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        }
        else if(word.length < 3) {
            word = word.toLowerCase();
        }
        return word;
    })
    req.body.name = splitStr.join(" ");
    next();
}

module.exports = {
    uppercaseLetters
}