import { Component, OnInit } from '@angular/core';
import {FormationService} from '../services/formation.service';
import {Formation} from '../models/formation.model';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {

  listFormations;
  listStudents;
  currentFormation = {id: -1};

  constructor(private formationService: FormationService ) { }

  ngOnInit() {
    this.formationService.getFormations().subscribe(
      (data: any) => {
        this.listFormations = data;
        console.log(data);
      }, err => {
        console.log(err);
      }
    );
  }

  onGetStudents(f) {
    this.currentFormation = f;
    this.formationService.getFormation(f.id).subscribe(
      (data: any) => {
        this.listStudents = data;
        console.log(data);
      }, err => {
        console.log(err);
      }
    );
  }

}
