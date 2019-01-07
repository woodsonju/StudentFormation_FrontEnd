import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Student} from '../models/student.model';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }


}
