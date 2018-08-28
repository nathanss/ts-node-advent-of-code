export class CircularSequenceDetector {

  constructor(private additionRule: AdditionRule) {}

  evaluate(input: string): number {
      let count = 0;
      for (let i = 0; i < input.length; i++) {
        if (this.additionRule.shouldAdd(i, input)) {
          count += parseInt(input[i]);
        } 
      }
      return count;
  }
}

export interface AdditionRule {
  shouldAdd(index: number, input: string);
}

export class PartOneAdditionRule implements AdditionRule {
  shouldAdd(index: number, input: string) {
    return input[index] === input[(index + 1) % input.length];
  }
}

export class PartTwoAdditionRule implements AdditionRule {
  shouldAdd(index: number, input: string) {
    const length = input.length;
    return input[index] === input[(index + length / 2) % length];
  }
}