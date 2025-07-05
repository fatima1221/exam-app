import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Course } from '../models/course.model';
import { MOCK_COURSES } from '../mock/mock-data';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private courses: Course[] = [];
  private coursesSubject = new BehaviorSubject<Course[]>([]);
  constructor() {
    this.courses = [...MOCK_COURSES];
    this.coursesSubject.next([...this.courses]);
  }

  getCourses(): Observable<Course[]> {
    return this.coursesSubject.asObservable();
  }

  getCourseById(courseId: string): Observable<Course | undefined> {
    const course = this.courses.find((c) => c.courseId === courseId);
    return of(course);
  }

  updateCourse(
    courseId: string,
    updatedCourse: Course
  ): Observable<Course | undefined> {
    const index = this.courses.findIndex((c) => c.courseId === courseId);
    if (index !== -1) {
      this.courses[index] = { ...this.courses[index], ...updatedCourse };
      this.coursesSubject.next([...this.courses]);
      return new BehaviorSubject(this.courses[index]).asObservable();
    }
    return new BehaviorSubject(undefined).asObservable();
  }

  deleteCourse(courseId: string): Observable<boolean> {
    const index = this.courses.findIndex((c) => c.courseId === courseId);
    if (index !== -1) {
      this.courses.splice(index, 1);
      this.coursesSubject.next([...this.courses]);
      return new BehaviorSubject(true).asObservable();
    }
    return new BehaviorSubject(false).asObservable();
  }
}
