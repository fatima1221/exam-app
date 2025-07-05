import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../../models/course.model';
import { CourseService } from '../../services/course.service';
import { ColumnConfig } from '../../models/column-config.model';
import { ReusableTableComponent } from '../reusable-table/reusable-table';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, ReusableTableComponent],
  templateUrl: './courses.html',
  styleUrls: ['./courses.scss'],
})
export class Courses implements OnInit {
  courses: Course[] = [];

  columns: ColumnConfig[] = [
    { key: 'courseId', label: 'Course ID' },
    { key: 'courseTitle', label: 'Course Title' },
    { key: 'class', label: 'Class', type: 'number' },
    { key: 'teacherName', label: 'Teacher Name' },
  ];

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses(): void {
    this.courseService.getCourses().subscribe((data) => {
      this.courses = data;
    });
  }

  handleUpdate(updatedRow: Course): void {
    this.courseService
      .updateCourse(updatedRow.courseId, updatedRow)
      .subscribe(() => this.loadCourses());
  }

  handleDelete(row: Course): void {
    this.courseService
      .deleteCourse(row.courseId)
      .subscribe(() => this.loadCourses());
  }
}
