import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FormationComponent } from './formation/formation.component';
import {StudentService} from './services/student.service';
import {FormationService} from './services/formation.service';

const appRoutes: Routes = [
  {path: 'students', component: StudentComponent},
  {path: 'formations', component: FormationComponent},
  {path: '', redirectTo: '/students', pathMatch: 'full'}
];



@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    HeaderComponent,
    FormationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    StudentService,
    FormationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
