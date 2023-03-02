import { Component } from '@angular/core';
import { Language } from '../common/model/language';
import { CourseService } from '../common/service/course.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  selectedLanguage = {} as Language;
 
  languages:Language[] = []
  constructor(private languageService:CourseService) { }
  ngOnInit(): void {
    this.languages = this.languageService.courses;
  }
  selectLanguage(language: Language) {
    //spread operator to copy the object and avoid shared mutable state
    this.selectedLanguage = {...language};
  }
  deleteLanguage(languageId: string) {
    this.languages = this.languages.filter(language => language.id !== languageId);
  }
}
