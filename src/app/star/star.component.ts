import { Component, OnChanges, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl:'star.component.html',
  styleUrls: ['star.component.css']
})

export class StarComponent implements OnChanges{
  @Input()
  rating: number = 0.0;

  starWidth: number;

  ngOnChanges(): void {
  this.starWidth = this.rating * 82.533/5;

};
}
