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
  public errors: number = 0;
  public goods: number = 0;
  public currentQuestion: number = 0;
  public ligths: number = 0;
  public message: string = '';
  private audio: HTMLAudioElement = new Audio();
  protected sound: boolean = false;

  ngOnInit() {
    this.loadData();
    this.switchOnLights();
  }

  loadData() {
    const path = '../../../assets/data/questions.json';
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
    if (this.currentQuestion < 9) {
      if (this.errors >= 3) {
        this.message = 'You have lost the race.';
        this.currentQuestion = 10;
      } else {
        if (isCorrect) {
          this.goods++;
        } else {
          this.errors++;
        }
        this.currentQuestion++;
      }
    } else {
      if (this.errors >= 3) {
        this.message = 'You have lost the race.';
      } else {
        this.message = 'YOU ARE THE WINNER!';

        const path = '../../../assets/f1-audio.mp3';
        this.playAudio(path);
      }
    }
  }

  private playAudio(path: string): void {
    if (this.sound) {
      this.audio.src = path;
      this.audio.play();
      setTimeout(() => {
        this.audio.pause();
        this.audio.currentTime = 0;
      }, 10000);
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

  public manageSound() {
    if (this.sound) {
      this.sound = false;
    } else {
      this.sound = true;
    }
  }
}
