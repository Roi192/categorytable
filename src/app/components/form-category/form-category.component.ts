import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, NgModelGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Category } from '../../shared/model/category';
import { Language } from '../../shared/model/language.enum';
import { TranslatedWord } from '../../shared/model/translateword';
import { MatIconModule } from '@angular/material/icon';
import { CategoryService } from '../../services/category.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-category',
  standalone: true,
  imports: [FormsModule,MatFormFieldModule,MatInputModule,MatButtonModule,CommonModule,MatIconModule],
  templateUrl: './form-category.component.html',
  styleUrl: './form-category.component.css'
})
export class FormCategoryComponent  implements OnInit {
  
  constructor(private categoryService: CategoryService, private router: Router ,private fb: FormBuilder) {}
  @ViewChild('wordsGroup') wordsGroup? : NgModelGroup;
  @Input() idString?: string

currentCategory: Category = new Category (0,'',new Date(),Language.English,Language.Hebrew,[])
  ngOnInit(): void {
    if (this.idString) {
    let id:number = parseInt(this.idString);
    const category = this.categoryService.get(id); 
    if (category) {
    this.currentCategory = category;
    }
    }};
    
    onSubmitRegistration() {
      console.log("Form submitted!");
      if (this.idString){
      this.categoryService.update(this.currentCategory)}
      else{
      this.categoryService.add(this.currentCategory)}
      this.router.navigate(['/']);

    }
   addWord() {
    this.currentCategory.words.push(new TranslatedWord('',''))
  }


  removeWord(index : number) {
    this.currentCategory.words.splice(index, 1);
    this.wordsGroup?.control.markAsDirty();
   }
   atLeastOnePair() {
    if (this.currentCategory.words.length < 2) {
      return { 'atLeastOnePair': true };
    }
  return null
  }
}

