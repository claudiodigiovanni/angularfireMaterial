import { Injectable } from '@angular/core';
import {Student} from './student';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';  

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  studentsRef: AngularFireList<any>; 

  constructor(private db: AngularFireDatabase) { 
    this.studentsRef = this.db.list('students-list');
  }

  getStudents(){
    
    return this.studentsRef;
  }

  addStudent(student: Student){

    this.studentsRef.push({
      firstName: student.firstName,
      lastName: student.lastName,
      email: student.email,
      mobileNumber: student.mobileNumber
    })
  }
}
