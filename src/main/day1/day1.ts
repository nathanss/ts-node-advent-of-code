export class CircularSequenceDetector {
    evaluate(input: string): number {
        let count = 0;
        for (let i = 0; i < input.length; i++) {
            if (input[i] === input[(i + 1) % input.length]) {
                count += parseInt(input[i]);
            }
        }
        return count;
    }
}