import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Driver } from '../../../models/driver';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent implements OnChanges {
  @Input() driver!: Driver;

  public driverCard: Driver | undefined;
  public pathImage: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    this.driverCard = this.driver;
    this.loadData();
  }

  loadData() {
    this.pathImage = '../../../../assets/drivers/' + this.driver.image;
  }
}
