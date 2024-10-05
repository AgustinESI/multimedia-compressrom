import { Component, OnInit } from '@angular/core';
import { DriverService } from '../../services/driver.service';
import { Circuit } from '../../models/circuit';

@Component({
  selector: 'app-circuits',
  templateUrl: './circuits.component.html',
  styleUrl: './circuits.component.css',
})
export class CircuitsComponent implements OnInit {
  public circuits: Circuit[] = [];

  constructor(private driverService: DriverService) {}

  ngOnInit(): void {
    this.loadData();
  }

  private loadData() {
    var path = '../../../assets/data/circuits.json';

    this.driverService.getCircuits(path).subscribe(
      (data: Circuit[]) => {
        this.circuits = data;
        console.log('circuits', this.circuits);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
