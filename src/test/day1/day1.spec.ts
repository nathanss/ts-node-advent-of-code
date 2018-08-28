import { CircularSequenceDetector, PartOneAdditionRule, PartTwoAdditionRule } from '../../main/day1/day1';
import { expect } from 'chai';
import 'mocha';

import { readFileSync } from 'fs';

describe('CircularSequenceDetector', () => {

  let csd: CircularSequenceDetector;

  describe('Part 1', () => {
    beforeEach(() => {
      csd = new CircularSequenceDetector(new PartOneAdditionRule());
    });

    it('should return 3 for input 1122', () => {
      expect(csd.evaluate('1122')).to.equal(3);
    });
  
    it('should return 4 for input 1111', () => {
      expect(csd.evaluate('1111')).to.equal(4);
    });
  
    it('should return 0 for input 1234', () => {
      expect(csd.evaluate('1234')).to.equal(0);
    });
  
    it('should return 9 for input 91212129', () => {
      expect(csd.evaluate('91212129')).to.equal(9);
    });
  
    it('should return 1047 for input of file', () => {
      const test = readFileSync('src/test/day1/day1.txt', 'utf8');
      expect(csd.evaluate(test)).to.equal(1047);
    });
  });

  describe('Part 2', () => {
    beforeEach(() => {
      csd = new CircularSequenceDetector(new PartTwoAdditionRule());
    });

    it('should return 6 for input 1212', () => {
      expect(csd.evaluate('1212')).to.equal(6);
    });
  
  });

}); 