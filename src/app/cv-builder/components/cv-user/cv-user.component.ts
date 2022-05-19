import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv-user',
  templateUrl: './cv-user.component.html',
  styleUrls: ['./cv-user.component.css']
})
export class CvUserComponent implements OnInit {
  @Input() editable: boolean = false;
  @Input() name : any = ''  ;
   @Input() job : any= ''  ;
   @Input() experience : any= ''  ;

  constructor() { }

  ngOnInit(): void {
  }

}
