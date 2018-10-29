import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'; 
import { ToastrService } from 'ngx-toastr'; // Alert message using NGX toastr

import { CrudService } from '../shared/crud.service';
import { Observable, Subscription } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';


@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

  constructor(private crud:CrudService, private toastr: ToastrService) { }

  //students$ : Observable<any>

  displayedColumns : string[]
  dataSource: DataSource<any>;


  ngOnInit() {

   //this.students$ = this.crud.getStudents().valueChanges();
    console.log('.......ngOnInit.....')
    this.displayedColumns = ['firstName','lastName', 'email','mobileNumber']
    this.dataSource = new StudentDataSource(this.crud, this.toastr)


  }

  

  

}

export class StudentDataSource extends DataSource<any> {

  subscription:Subscription;

  constructor(private crud: CrudService, private toastr: ToastrService) {
    super();
  }
  connect(): Observable<any> {
    console.log('connect......')
    //this.crud.getStudents().valueChanges().subscribe(item => console.log(item))
    this.subscription = this.crud.getStudents().valueChanges().subscribe (item => this.toastr.info("Nuovo Studente..."))
     return this.crud.getStudents().valueChanges();
    
  }
  disconnect() {
    console.log('disconnect......')
    this.subscription.unsubscribe();
  }
}
