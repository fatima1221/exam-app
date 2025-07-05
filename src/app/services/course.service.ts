import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Course } from '../models/course.model';
import { MOCK_COURSES } from '../mock/mock-data';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private courses: Course[] = [];

  constructor() {
    this.courses = [...MOCK_COURSES];
  }

  getCourses(): Observable<Course[]> {
    return of(this.courses);
  }

  getCourseById(courseId: string): Observable<Course | undefined> {
    const course = this.courses.find((c) => c.courseId === courseId);
    return of(course);
  }

  addCourse(course: Course): Observable<Course> {
    this.courses.push(course);
    return of(course);
  }

  updateCourse(
    courseId: string,
    updatedCourse: Course
  ): Observable<Course | undefined> {
    const index = this.courses.findIndex((c) => c.courseId === courseId);
    if (index !== -1) {
      this.courses[index] = { ...this.courses[index], ...updatedCourse };
      return of(this.courses[index]);
    }
    return of(undefined);
  }

  deleteCourse(courseId: string): Observable<boolean> {
    const index = this.courses.findIndex((c) => c.courseId === courseId);
    if (index !== -1) {
      this.courses.splice(index, 1);
      return of(true);
    }
    return of(false);
  }
}
