import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Student} from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  constructor(private http: HttpClient) { }

  getFormations() {
    return this.http.get<Student>('http://localhost:8080/formations');
  }

  getFormation(id: number) {
    return this.http.get<Student>('http://localhost:8080/formations/' + id + '/student');
  }
}
