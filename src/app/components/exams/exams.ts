import { Component } from '@angular/core';
import { Exam } from '../../models/exam.model';
import { ColumnConfig } from '../../models/column-config.model';
import { ExamService } from '../../services/exam.service';
import { ReusableTableComponent } from '../reusable-table/reusable-table';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-exams',
  imports: [CommonModule, ReusableTableComponent],
  templateUrl: './exams.html',
  styleUrl: './exams.scss',
})
export class Exams {
  exams: Exam[] = [];
  columns: ColumnConfig[] = [
    { key: 'courseId', label: 'Course ID', editable: false },
    { key: 'studentId', label: 'Student ID', type: 'number', editable: false },
    { key: 'examDate', label: 'Exam Date', type: 'date' },
    { key: 'score', label: 'Score', type: 'number' },
  ];

  constructor(private examService: ExamService) {}

  ngOnInit(): void {
    this.loadExams();
  }

  loadExams(): void {
    this.examService.getExams().subscribe((data) => (this.exams = data));
  }
  handleUpdate(updatedExam: Exam): void {
    const index = this.exams.findIndex(
      (e) =>
        e.courseId === updatedExam.courseId &&
        e.studentId === updatedExam.studentId
    );
    if (index !== -1) {
      this.examService
        .updateExam(index, updatedExam)
        .subscribe(() => this.loadExams());
    }
  }

  handleDelete(exam: Exam): void {
    const index = this.exams.findIndex(
      (e) => e.courseId === exam.courseId && e.studentId === exam.studentId
    );
    if (index !== -1) {
      this.examService.deleteExam(index).subscribe(() => this.loadExams());
    }
  }
}
