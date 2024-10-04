import { Component, Input } from '@angular/core';
import { DriverService } from '../../services/driver.service';
import { Driver } from '../../models/driver';
import { Question } from '../../models/question';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrl: './game.component.css',
})
export class GameComponent {
  constructor(private driverService: DriverService) {}

  public drivers: Driver[] = [];
  public questions: Question[] = [];
  public quizQuestions: Question[] = [];
  private counter: number = 0;
  private errors: number = 0;
  public currentQuestion: number = 0;
  public ligths: number = 0;

  ngOnInit() {
    this.loadData();

    //for (let i = 0; i < 7; i++) {
    this.switchOnLights();
    //}
  }

  loadData() {
    var path = '../../../assets/drivers.json';

    /*
    this.driverService.getDataDrivers(path).subscribe(
      (data: Driver[]) => {
        this.drivers = data;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
    */

    path = '../../../assets/questions.json';
    this.driverService.getQuestions(path).subscribe(
      (data: Question[]) => {
        this.questions = data;

        this.generateQuizzQuestions();
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  private switchOnLights() {
    setInterval(() => {
      if (this.ligths < 6) {
        this.ligths++;
      } else {
        this.ligths = 0;
        setTimeout(() => {
          this.ligths = 6;
          setTimeout(() => {
            this.ligths = 0;
          }, 1000);
        }, 1000);
      }
    }, 1000);
  }

  protected validateAnswer(isCorrect: boolean) {
    if (this.currentQuestion < 10) {
      if (isCorrect) {
        this.counter++;
      } else {
        this.errors++;
      }
      this.currentQuestion++;
      console.log('Counter', this.counter);
      console.log('Error:', this.errors);
      console.log('currentQuestion:', this.currentQuestion);
    } else {
      alert('EndGame');
    }
  }

  private generateQuizzQuestions() {
    for (let i = 0; i < 10; i++) {
      const number = this.getRandomFloat(0, this.questions.length);
      const question = this.questions[number] as Question;
      this.quizQuestions.push(question);
    }
  }

  private getRandomFloat(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min);
  }
}
