import { Injectable } from '@angular/core';
import { Language } from '../model/language';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courses : Language[] = [
    { id: '1', title: 'C#', description: 'C# is a programming language', favourite: false },
    { id: '2', title: 'Java', description: 'Java is a programming language', favourite: false },
    { id: '3', title: 'Python', description: 'Python is a programming language', favourite: false },
    { id: '4', title: 'JavaScript', description: 'JavaScript is a programming language', favourite: false },
    { id: '5', title: 'C++', description: 'C++ is a programming language', favourite: false },
    { id: '6', title: 'C', description: 'C is a programming language', favourite: false },
    { id: '7', title: 'Ruby', description: 'Ruby is a programming language', favourite: false },

  ]
}
