import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Exam } from '../models/exam.model';
import { MOCK_EXAMS } from '../mock/mock-data';

@Injectable({
  providedIn: 'root',
})
export class ExamService {
  private exams: Exam[] = [];

  constructor() {
    this.exams = [...MOCK_EXAMS];
  }

  getExams(): Observable<Exam[]> {
    return of(this.exams);
  }

  addExam(exam: Exam): Observable<Exam> {
    this.exams.push(exam);
    return of(exam);
  }

  updateExam(index: number, updatedExam: Exam): Observable<Exam> {
    this.exams[index] = updatedExam;
    return of(updatedExam);
  }

  deleteExam(index: number): Observable<boolean> {
    this.exams.splice(index, 1);
    return of(true);
  }
}
