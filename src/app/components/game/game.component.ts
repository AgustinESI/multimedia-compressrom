import { Component, Input } from '@angular/core';
import { DriverService } from '../../services/driver.service';
import { Driver } from '../../models/driver';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrl: './game.component.css',
})
export class GameComponent {
  constructor(private driverService: DriverService) {}

  public drivers: Driver[] = [];

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    const path = '../../../../assets/drivers.json';
    this.driverService.getData(path).subscribe(
      (data: any[]) => {
        this.drivers = data;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
