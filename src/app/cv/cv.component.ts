import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
   title: any;
   description: any;



  constructor(public dialogRef: MatDialogRef<CvComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }
  onCancel() {
    this.dialogRef.close();
  }

  create() {
    this.dialogRef.close({title: this.title, description: this.description});
  }

}
