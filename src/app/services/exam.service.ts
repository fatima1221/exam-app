import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Exam } from '../models/exam.model';
import { MOCK_EXAMS } from '../mock/mock-data';

@Injectable({
  providedIn: 'root',
})
export class ExamService {
  private exams: Exam[] = [];
  private examsSubject = new BehaviorSubject<Exam[]>([]);
  constructor() {
    this.exams = [...MOCK_EXAMS];
    this.examsSubject.next([...this.exams]);
  }

  getExams(): Observable<Exam[]> {
    return this.examsSubject.asObservable();
  }

  updateExam(index: number, updatedExam: Exam): Observable<Exam> {
    this.exams[index] = updatedExam;
    this.examsSubject.next([...this.exams]);
    return new BehaviorSubject(updatedExam).asObservable();
  }

  deleteExam(index: number): Observable<boolean> {
    this.exams.splice(index, 1);
    this.examsSubject.next([...this.exams]);
    return new BehaviorSubject(true).asObservable();
  }
}
