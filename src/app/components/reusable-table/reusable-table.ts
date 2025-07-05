import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { ColumnConfig } from '../../models/column-config.model';

@Component({
  selector: 'app-reusable-table',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
  ],
  templateUrl: './reusable-table.html',
  styleUrls: ['./reusable-table.scss'],
})
export class ReusableTableComponent {
  @Input() title = 'Reusable Table';
  @Input() columns: ColumnConfig[] = [];
  @Input() dataSource: any[] = [];
  @Input() editable = false;

  @Output() update = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();

  editIndex: number | null = null;
  editedRow: any = {};
  displayedColumns: string[] = [];
  ngOnInit(): void {
    this.displayedColumns = this.columns.map((c) => c.key).concat(['actions']);
  }

  startEdit(index: number): void {
    this.editIndex = index;
    this.editedRow = { ...this.dataSource[index] };
  }

  saveEdit(): void {
    this.update.emit(this.editedRow);
    this.cancelEdit();
  }

  cancelEdit(): void {
    this.editIndex = null;
    this.editedRow = {};
  }

  deleteRow(row: any): void {
    if (confirm('Are you sure you want to delete this entry?')) {
      this.delete.emit(row);
    }
  }
}
