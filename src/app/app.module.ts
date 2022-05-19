import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CvComponent } from './cv/cv.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInput, MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {ToastrModule} from 'ngx-toastr';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import {MatChipsModule} from '@angular/material/chips';
import {MatSliderModule} from '@angular/material/slider';
import {MatStepperModule} from '@angular/material/stepper';

import { ResumeComponent } from './resume/resume.component';
import { ProjectsComponent } from './projects/projects.component';
import { CvSkillsComponent } from './cv-builder/containers/cv-skills/cv-skills.component';
import { CvUserComponent } from './cv-builder/components/cv-user/cv-user.component';
import { CvRatingComponent } from './cv-builder/components/cv-rating/cv-rating.component';
import { CvChipsComponent } from './cv-builder/components/cv-chips/cv-chips.component';
import { CvBuilderComponent } from './cv-builder/cv-builder.component';
import { CvLangComponent } from './cv-builder/components/cv-lang/cv-lang.component';
import { CvAboutComponent } from './cv-builder/components/cv-about/cv-about.component';
import { CvProfessionalComponent } from './cv-builder/components/cv-professional/cv-professional.component';
import { UsersComponent } from './users/users/users.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    CvComponent,
    ResumeComponent,
    ProjectsComponent,
    CvBuilderComponent,
    CvSkillsComponent,
    CvUserComponent,
    CvRatingComponent,
    CvChipsComponent,
    CvLangComponent,
    CvAboutComponent,
    CvProfessionalComponent,
    UsersComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatIconModule,
    MatToolbarModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    MatChipsModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatSidenavModule,
    MatSliderModule,
    MatStepperModule,
    ToastrModule.forRoot({
      closeButton: true,
      progressBar: true,
      progressAnimation: 'increasing'
    }),
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
