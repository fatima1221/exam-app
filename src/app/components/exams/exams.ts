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
    this.examService.getExams().subscribe((data) => (this.exams = data));
  }
  handleUpdate(updatedRow: Exam): void {
    const index = this.exams.findIndex(
      (exam) =>
        exam.courseId === updatedRow.courseId &&
        exam.studentId === updatedRow.studentId
    );
    if (index !== -1) {
      this.examService.updateExam(index, updatedRow).subscribe();
    }
  }
  handleDelete(row: Exam): void {
    const index = this.exams.findIndex(
      (exam) =>
        exam.courseId === row.courseId && exam.studentId === row.studentId
    );
    if (index !== -1) {
      this.examService.deleteExam(index).subscribe();
    }
  }
}
