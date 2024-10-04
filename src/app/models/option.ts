export class Option {
  answer: string;
  isCorrect: boolean;

  constructor(answer: string, isCorrect: boolean) {
    this.answer = answer;
    this.isCorrect = isCorrect;
  }
}
