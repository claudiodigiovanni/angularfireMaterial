import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'; 
import { ToastrService } from 'ngx-toastr'; // Alert message using NGX toastr

import { CrudService } from '../shared/crud.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  studentForm: FormGroup;

  constructor(private fb: FormBuilder, private crud: CrudService, private toastr:ToastrService) { }

  ngOnInit() {

    this.studentForm = this.fb.group({
      firstName:'',
      lastName: [''],
      email: ['', [Validators.required]],
      mobileNumber: ['', [Validators.required]]
    })
  }

  submitStudentData(){

    this.crud.addStudent(this.studentForm.value);
    this.toastr.info('student added!')
  }

}
