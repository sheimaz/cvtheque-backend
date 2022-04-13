import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {CvComponent} from '../cv/cv.component';
import {ApiService} from '../services/api.service';
import {MatSelectChange} from '@angular/material/select';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cvs: any = [];
  filteredcvs: any[] = [{title: 'Test', description: 'Test description', status: 'OPEN'}];

  constructor(private apiService: ApiService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.apiService.getAllcvs().subscribe((cvs) => {
      this.cvs = cvs;
      this.filteredcvs = this.cvs;
    })

  }

  // tslint:disable-next-line:typedef
  filterChanged(ev: MatSelectChange) {
    const value = ev.value;
    this.filteredcvs = this.cvs;
    if (value) {
      this.filteredcvs = this.filteredcvs.filter(t => t.status === value);
      console.log(this.filteredcvs);
    } else {
      this.filteredcvs = this.cvs;
    }
  }

  // tslint:disable-next-line:typedef
  openDialog() {
    const dialogRef = this.dialog.open(CvComponent, {
      width: '500px',
      hasBackdrop: true,
      role: 'dialog',
      height: '500px'
    });

    dialogRef.afterClosed().subscribe(data => {
      this.apiService.createcv(data.title, data.description).subscribe((result: any) => {
        console.log(result);
        this.cvs.push(result);
        this.filteredcvs = this.cvs;
      })
    });
  }

  // tslint:disable-next-line:typedef
  statusChanged(ev: MatSelectChange, cvId: number, index: number) {
    const value = ev.value;
    this.apiService.updateStatus(value, cvId).subscribe(cv => {
      this.cvs[index] = cv;
      this.filteredcvs = this.cvs;
    });
  }

  // tslint:disable-next-line:typedef
  delete(id: number) {
    if (confirm('Do you want to remove the cv?')) {
      this.apiService.deletecv(id).subscribe(res => {
        // @ts-ignore
        if (res.success) {
          this.cvs = this.cvs.filter((t: any) => t.id !== id);
          this.filteredcvs = this.cvs;
        }
      });
    }
  }
}