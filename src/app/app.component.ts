import { Component } from '@angular/core';
import { Language } from './common/model/language';


const  lang: Language = {
  id:null,
  title:"",
  description:"",
  favourite:false
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'Frontendmaster-ang';
  selectedLanguage = lang;
  languages = [
    { id: 1, title: 'C#', description: 'C# is a programming language', favourite: false },
    { id: 2, title: 'Java', description: 'Java is a programming language', favourite: false },
    { id: 3, title: 'Python', description: 'Python is a programming language', favourite: false },
    { id: 4, title: 'JavaScript', description: 'JavaScript is a programming language', favourite: false },
    { id: 5, title: 'C++', description: 'C++ is a programming language', favourite: false },
    { id: 6, title: 'C', description: 'C is a programming language', favourite: false },
    { id: 7, title: 'Ruby', description: 'Ruby is a programming language', favourite: false },

  ]

  selectLanguage(language: Language) {
    this.selectedLanguage = language;
  }
  deleteLanguage(languageId: number) {
    this.languages = this.languages.filter(language => language.id !== languageId);
  }
}
