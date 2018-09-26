export class SpreadsheetChecksumCalculator  {

    calculate(input: string): number {

        const lines = input.split('/n');

        const test = lines.map((line) => {
            return this.calculateForLine(line);
        });

        const result = test.reduce((prev, current) => {
            return prev + current;
        });

        return result   ;
    }

    calculateForLine(line: string): number {
        const splits = this.extractLineArray(line);
        let minValue = splits[0], 
            maxValue = splits[0];

        splits.forEach((value) => {
            if (value < minValue) {
                minValue = value;
            }
            if (value > maxValue) {
                maxValue = value;
            }

        });
        return maxValue - minValue;
    }

    private extractLineArray(line: string): number[] {
        return line.split(/\s+/).map((value) => {
            return parseInt(value);
        });
    }

}