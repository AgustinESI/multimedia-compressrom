import { Option } from './option';

export class Question {
  question_id: number;
  question: string;
  options: Option[];

  constructor(question_id: number, question: string, options: Option[]) {
    this.question_id = question_id;
    this.question = question;
    this.options = options;
  }
}
