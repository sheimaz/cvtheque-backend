import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cv-about',
  templateUrl: './cv-about.component.html',
  styleUrls: ['./cv-about.component.css']
})
export class CvAboutComponent implements OnInit {
  @Input() editable: boolean = false;
  @Input() about: any = '';

  constructor() { }

  ngOnInit(): void {
  }

}
