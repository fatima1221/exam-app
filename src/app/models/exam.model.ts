import { CourseRef, StudentRef } from './ref.model';
export interface Exam extends CourseRef, StudentRef {
  examDate: Date;
  score: number;
}
