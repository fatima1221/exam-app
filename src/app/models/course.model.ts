import { CourseRef } from './ref.model';

export interface Course extends CourseRef {
  courseTitle: string;
  class: number;
  teacherName: string;
}
