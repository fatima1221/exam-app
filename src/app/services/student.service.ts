import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Student } from '../models/student.model';
import { MOCK_STUDENTS } from '../mock/mock-data';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private students: Student[] = [];

  constructor() {
    this.students = [...MOCK_STUDENTS];
  }

  getStudents(): Observable<Student[]> {
    return of(this.students);
  }

  getStudentById(studentId: number): Observable<Student | undefined> {
    const student = this.students.find((s) => s.studentId === studentId);
    return of(student);
  }

  addStudent(student: Student): Observable<Student> {
    this.students.push(student);
    return of(student);
  }

  updateStudent(
    studentId: number,
    updatedStudent: Student
  ): Observable<Student | undefined> {
    const index = this.students.findIndex((s) => s.studentId === studentId);
    if (index !== -1) {
      this.students[index] = { ...this.students[index], ...updatedStudent };
      return of(this.students[index]);
    }
    return of(undefined);
  }

  deleteStudent(studentId: number): Observable<boolean> {
    const index = this.students.findIndex((s) => s.studentId === studentId);
    if (index !== -1) {
      this.students.splice(index, 1);
      return of(true);
    }
    return of(false);
  }
}
