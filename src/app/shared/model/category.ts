import { AbstractControl } from '@angular/forms';
import { Language } from './language.enum';
import { TranslatedWord } from './translateword';

export class Category {

  words: TranslatedWord[] = [];
  date: Date;

  constructor(
    public id: number,
    public name: string,
    public lastModified: Date,
    public sourceLanguage: Language,
    public targetLanguage: Language,
    words: TranslatedWord[] = []
  ) {
    this.words = words;
    this.date = new Date();
  }

}
