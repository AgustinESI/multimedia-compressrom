import { Component, OnInit } from '@angular/core';
import { Driver } from '../../models/driver';
import { DriverService } from '../../services/driver.service';
import { Circuit } from '../../models/circuit';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrl: './drivers.component.css',
})
export class DriversComponent implements OnInit {
  public drivers: Driver[] = [];
  public filteredDrivers: Driver[] = [];
  public circuits: Circuit[] = [];
  private typeFilter!: string;
  private scuderiaFilter!: string;
  public chain: string = '';

  constructor(private driverService: DriverService) {}

  ngOnInit(): void {
    this.loadData();
  }

  private loadData() {
    var path = '../../../assets/data/drivers.json';

    this.driverService.getDrivers(path).subscribe(
      (data: Driver[]) => {
        this.drivers = data;
        this.filteredDrivers = data;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );

    path = '../../../assets/data/circuits.json';
    this.driverService.getCircuits(path).subscribe(
      (data: Circuit[]) => {
        this.circuits = data;

        const currentDate = new Date();
        this.circuits.forEach((circuit) => {
          circuit.pass = new Date(circuit.date) < currentDate;
        });

        this.circuits.sort((a, b) => {
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        });
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  protected doFilter() {
    if (this.chain && this.chain.length > 0) {
      if (!this.typeFilter || this.typeFilter.length == 0) {
        console.log('Type of filter is required');
      }

      this.filteredDrivers = [];
      switch (this.typeFilter) {
        case 'name':
          this.drivers.forEach((driver) => {
            const name = (driver.name + ' ' + driver.surname).toLowerCase();
            if (name.includes(this.chain.toLowerCase())) {
              this.filteredDrivers.push(driver);
            }
          });
          break;
        case 'scuderia':
          this.drivers.forEach((driver) => {
            if (
              driver.scuderia
                .toLowerCase()
                .includes(this.scuderiaFilter.toLowerCase())
            ) {
              this.filteredDrivers.push(driver);
            }
          });
          break;
      }
    }
  }

  public circuitsGrouped() {
    const groups = [];
    for (let i = 0; i < this.circuits.length; i += 3) {
      groups.push(this.circuits.slice(i, i + 3));
    }
    return groups;
  }

  protected onchangeScuderia(value: any) {
    this.scuderiaFilter = value.target.value;
  }

  protected onchangeType(value: any) {
    this.typeFilter = value.target.value;
  }
}
