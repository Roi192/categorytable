import { Injectable } from '@angular/core';
import { Category } from '../shared/model/category';



@Injectable({
  providedIn: 'root'
})
export class CategoryService {
   categories = new Map <number,Category>();
   nextId =0;
  errorFlag: boolean | undefined;
   constructor(){

   }

   list(): Category[] {
    return Array.from(this.categories.values());
    }

    get(id: number): Category | undefined {
      return this.categories.get(id);
      }
     delete(id: number): void {
      this.categories.delete(id);
      }
      update(category: Category): void {
        if (this.categories.has(category.id,)) {
        this.categories.set(category.id, category);
        category.lastModified = new Date()
       
        }
        }
       add(newCategoryData:Category) {
        newCategoryData.id = this.nextId
       newCategoryData.lastModified = new Date()
       if (newCategoryData) {
        this.categories.set(this.nextId, newCategoryData);
        this.nextId++;
       }
    }
  }