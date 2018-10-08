const codes = require('./codesFromFen.json');

module.exports = {fromFen : (fen) => {
return codes[fen]
}
}
