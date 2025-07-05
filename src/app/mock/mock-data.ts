import { Course } from '../models/course.model';
import { Student } from '../models/student.model';
import { Exam } from '../models/exam.model';

export const MOCK_COURSES: Course[] = [
  {
    courseId: 'MAT',
    courseTitle: 'Riyaziyyat',
    class: 10,
    teacherName: 'Aygun Aliyeva',
  },
  {
    courseId: 'FIZ',
    courseTitle: 'Fizika',
    class: 11,
    teacherName: 'Elchin Huseynov',
  },
  {
    courseId: 'KIM',
    courseTitle: 'Kimya',
    class: 9,
    teacherName: 'Leyla Mammadova',
  },
  {
    courseId: 'FIZIK',
    courseTitle: 'Fiziki tərbiyyə',
    class: 6,
    teacherName: 'Aysel Rustamova',
  },
  {
    courseId: 'BIO',
    courseTitle: 'Biologiya',
    class: 8,
    teacherName: 'Elnur Hasanov',
  },
  {
    courseId: 'GEO',
    courseTitle: 'Coğrafiya',
    class: 7,
    teacherName: 'Fatima Askerova',
  },
];

export const MOCK_STUDENTS: Student[] = [
  { studentId: 10001, studentName: 'Ali Karimov', class: 10 },
  { studentId: 10002, studentName: 'Nigar Ismayilova', class: 11 },
  { studentId: 10003, studentName: 'Murad Aliyev', class: 9 },
  { studentId: 10004, studentName: 'Ali Karimov', class: 10 },
  { studentId: 10005, studentName: 'Nigar Ismayilova', class: 11 },
  { studentId: 10006, studentName: 'Murad Aliyev', class: 9 },
];

export const MOCK_EXAMS: Exam[] = [
  {
    courseId: 'MAT',
    studentId: 10001,
    examDate: new Date('2025-06-01'),
    score: 5,
  },
  {
    courseId: 'FIZ',
    studentId: 10002,
    examDate: new Date('2025-06-05'),
    score: 4,
  },
  {
    courseId: 'KIM',
    studentId: 10003,
    examDate: new Date('2025-06-10'),
    score: 3,
  },
];
