import { Component, OnInit} from '@angular/core';
import { Category } from '../../shared/model/category';
import { Language } from '../../shared/model/language.enum';
import { TranslatedWord } from '../../shared/model/translateword';
import { CommonModule, DatePipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { CategoryService } from '../../services/category.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteCategoryDialogComponent } from '../delete-category-dialog/delete-category-dialog.component';
import { FormCategoryComponent } from '../form-category/form-category.component';
import { RouterLink, RouterLinkActive } from '@angular/router';



@Component({
  selector: 'app-table-category',
  standalone: true,
  imports: [CommonModule,MatIconModule,MatTableModule,MatButtonModule,DatePipe,FormCategoryComponent,MatButtonModule,RouterLink],
  templateUrl: './table-category.component.html',
  styleUrl: './table-category.component.css'
})
export class TableCategoryComponent implements OnInit {
sourceword: any;

  constructor(private categoryService : CategoryService,private dialog: MatDialog) {}
  displayedColumns: string[] = ['namecategory','No.ofWords','lasteditdate', 'actions'];  
  categories : Category[]=[]
  

  ngOnInit(): void {
    this.categories=this.categoryService.list()
    }
    deleteCategory (id:number,name:string){
      const dialogRef = this.dialog.open(DeleteCategoryDialogComponent,{data: name,});
      
     dialogRef.afterClosed().subscribe(deletionConfirmed => {
      if(deletionConfirmed){
      this.categoryService.delete(id)
      this.categories=this.categoryService.list()
      }
    });
  }
  
}