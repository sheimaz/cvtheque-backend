import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cv-lang',
  templateUrl: './cv-lang.component.html',
  styleUrls: ['./cv-lang.component.css']
})
export class CvLangComponent implements OnInit {
  @Input() value: number = 25;
  @Input() text: any = 'Lang';
  @Input() editable: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

}
