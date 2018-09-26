import { expect } from 'chai';
import 'mocha';
import { SpreadsheetChecksumCalculator } from '../../main/day2/day2';

describe('Day 2', () => {
    describe('Part 1', () => {

        const spreadsheetChecksumCalculator = new SpreadsheetChecksumCalculator();

        it('Should calculate right checksum for line 5 1 9 5', () => {
            expect(spreadsheetChecksumCalculator.calculateForLine('5 1 9 5')).to.be.equal(8);
        });

        it('Should calculate right checksum for line 7 5 3', () => {
            expect(spreadsheetChecksumCalculator.calculateForLine('7 5 3')).to.be.equal(4);
        });

        it('Should calculate right checksum for line 2 4 6 8', () => {
            expect(spreadsheetChecksumCalculator.calculateForLine('2 4 6 8')).to.be.equal(6);
        });

        it('Should calculate right checksum for all 3 lines', () => {
            expect(spreadsheetChecksumCalculator.calculate('5 1 9 5/n7 5 3/n 2 4 6 8')).to.be.equal(18);
        });
    });
});