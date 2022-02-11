const uppercaseLetters = (req, res, next) => {
    let str = req.body.name;
    let splitStr = str.split(" ").map(word => {
        if(word.length > 2) {
            word = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
            console.log("modified: ",word);
        }
        else if(word.length < 3) {
            word = word.toLowerCase();
        }
        return word;
    })
    console.log("Testing: ",splitStr.join(" "));
    req.body.name = splitStr.join(" ");
    next();
}

module.exports = {
    uppercaseLetters
}