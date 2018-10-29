import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'; 
import { ToastrService } from 'ngx-toastr'; // Alert message using NGX toastr

import { CrudService } from '../shared/crud.service';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';


@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

  constructor(private crud:CrudService, private toastr: ToastrService) { }

  students$ : Observable<any>

  ngOnInit() {

   this.students$ = this.crud.getStudents().valueChanges();


  }

  displayedColumns: string[]= ['firstName','lastName', 'email','mobileNumber']

  dataSource = new StudentDataSource(this.crud)

  

}

export class StudentDataSource extends DataSource<any> {
  constructor(private crud: CrudService) {
    super();
  }
  connect(): Observable<any> {
    this.crud.getStudents().valueChanges().subscribe(item => console.log(item))
    return this.crud.getStudents().valueChanges();
  }
  disconnect() {}
}
