import { Component, OnInit,EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cv-rating',
  templateUrl: './cv-rating.component.html',
  styleUrls: ['./cv-rating.component.css']
})
export class CvRatingComponent implements OnInit {
  @Input() editable: boolean = false;
  @Input('rating') rating: number = 3;
  @Output() ratingUpdated = new EventEmitter();

  totalStar: number = 5;
  ratingArray: number[] = [];

  constructor() { }

  ngOnInit() {
    for (let index = 0; index < this.totalStar; index++) {
      this.ratingArray.push(index);
    }
  }
  
  calculateRating(rating: number) {
    this.ratingUpdated.emit(rating);
  }

  iconStatus(index: number) {
    if (this.rating >= index + 1) {
      return 'circle';
    } else {
      return 'trip_origin';
     
    }
  }

}
