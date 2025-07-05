import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Student } from '../../models/student.model';
import { StudentService } from '../../services/student.service';
import { ColumnConfig } from '../../models/column-config.model';
import { ReusableTableComponent } from '../reusable-table/reusable-table';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule, ReusableTableComponent],
  templateUrl: './students.html',
  styleUrls: ['./students.scss'],
})
export class Students {
  students: Student[] = [];
  columns: ColumnConfig[] = [
    { key: 'studentId', label: 'Student ID' },
    { key: 'studentName', label: 'Student Name' },
    { key: 'class', label: 'Class', type: 'number' },
  ];
  constructor(private studentService: StudentService) {}
  ngOnInit(): void {
    this.studentService.getStudents().subscribe((data) => {
      this.students = data;
    });
  }

  handleUpdate(updatedRow: Student): void {
    this.studentService
      .updateStudent(updatedRow.studentId, updatedRow)
      .subscribe();
  }
  handleDelete(row: Student): void {
    this.studentService.deleteStudent(row.studentId).subscribe();
  }
}
