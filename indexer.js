const codes = require('./eco-master/eco.json')
const Chess = require('chess.js').Chess
const fs = require('fs')
const path = require('path')

var newCodes = {}
codes.forEach(element => {
    chess = new Chess()
    let moves = element.m.split(' ')
    moves.forEach(m => {
        chess.move({from:m.slice(0,2), to:m.slice(2,4)})
    })
    newCodes[chess.fen()] = {
        code:element.c,
        fen:element.f,
        name:element.n,
        pgn: chess.pgn()
    }
});


fs.writeFileSync(path.join(__dirname, 'codesFromFen.json'), JSON.stringify(newCodes, null, 2));
