import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv-skills',
  templateUrl: './cv-skills.component.html',
  styleUrls: ['./cv-skills.component.css']
})
export class CvSkillsComponent implements OnInit {
  @Input() skillSection: String ='';
  @Input() mainSkills: string[] = [];
  @Input() allSkills: string[] = [];
  @Input() editable: boolean = false;
  
  rating: number = 3;
  starCount: number = 5;

  onRatingChanged(rating: number) {
    this.rating = rating;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
