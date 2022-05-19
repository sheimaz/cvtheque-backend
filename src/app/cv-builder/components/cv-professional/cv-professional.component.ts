import { StepperSelectionEvent } from '@angular/cdk/stepper';
import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-cv-professional',
  templateUrl: './cv-professional.component.html',
  styleUrls: ['./cv-professional.component.css'],
})
export class CvProfessionalComponent implements OnInit {
  step : number = 0;
  experiences: any = [
    {date:'2016',
    position:'Backend Developer',
    company: 'Proxym-IT'},

  ];
  @Input() editable: boolean = false;
  @Input() exp: String = "";

  firstFormGroup: FormGroup = new FormGroup({});
  secondFormGroup: FormGroup = new FormGroup({});
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      position: [this.experiences.position, Validators.required],
      company: [this.experiences.company, Validators.required],
    date: [this.experiences.date, Validators.required],
    })}

  selectionChange(event: StepperSelectionEvent) {
    this.step = event.selectedIndex;

  }
  onSubmit() {

      this.experiences.push(this.firstFormGroup.value);

  }
  onSave(){
    console.log(this.experiences)
  }
}