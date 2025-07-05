import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Student } from '../models/student.model';
import { MOCK_STUDENTS } from '../mock/mock-data';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private students: Student[] = [];
  private studentsSubject = new BehaviorSubject<Student[]>([]);

  constructor() {
    this.students = [...MOCK_STUDENTS];
    this.studentsSubject.next([...this.students]);
  }

  getStudents(): Observable<Student[]> {
    return this.studentsSubject.asObservable();
  }

  getStudentById(studentId: number): Observable<Student | undefined> {
    const student = this.students.find((s) => s.studentId === studentId);
    return of(student);
  }

  updateStudent(
    studentId: number,
    updatedStudent: Student
  ): Observable<Student | undefined> {
    const index = this.students.findIndex((s) => s.studentId === studentId);
    if (index !== -1) {
      this.students[index] = { ...this.students[index], ...updatedStudent };
      this.studentsSubject.next([...this.students]);
      return new BehaviorSubject(this.students[index]).asObservable();
    }
    return new BehaviorSubject(undefined).asObservable();
  }

  deleteStudent(studentId: number): Observable<boolean> {
    const index = this.students.findIndex((s) => s.studentId === studentId);
    if (index !== -1) {
      this.students.splice(index, 1);
      this.studentsSubject.next([...this.students]);
      return new BehaviorSubject(true).asObservable();
    }
    return new BehaviorSubject(false).asObservable();
  }
}
