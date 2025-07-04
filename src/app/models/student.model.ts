import { StudentRef } from './ref.model';
export interface Student extends StudentRef {
  studentName: string;
  class: number;
}
