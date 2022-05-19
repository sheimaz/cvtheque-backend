import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ApiService} from '../services/api.service';
import {logger} from 'codelyzer/util/logger';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name_text: string = ""


  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
  }

  registerUser(registerForm: NgForm) {
    if (registerForm.invalid) {
      return;
    }

    const {username, password, job, role, departement} = registerForm.value;
    this.apiService.register(username, password, job, role, departement).subscribe(res => {
      registerForm.reset();
    });

  }
}