import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Courses } from './components/courses/courses';
import { Students } from './components/students/students';
import { Exams } from './components/exams/exams';

export const routes: Routes = [
  { path: '', redirectTo: 'courses', pathMatch: 'full' },
  { path: 'courses', component: Courses },
  { path: 'students', component: Students },
  { path: 'exams', component: Exams },
  { path: '**', redirectTo: 'courses' },
];
