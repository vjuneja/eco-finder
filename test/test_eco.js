const chai = require('chai'),
      eco = require('../index').fromFen,
      should = chai.should();

describe('eco codes', () => {
    it('should lookup by eco code', () => {
        eco('rnbqkb1r/ppppp1pp/5n2/5p2/2P1P3/2N5/PP1P1PPP/R1BQKBNR b KQkq e3 0 3').name.should.be.eql("English Opening: Anglo-Dutch Variation, Ferenc Gambit");
    });
    it('should return null in opening state', () => {
        should.not.exist(eco('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'));
    });
});
