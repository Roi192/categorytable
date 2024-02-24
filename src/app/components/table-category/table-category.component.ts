import { Component} from '@angular/core';
import { Category } from '../../shared/model/category';
import { Language } from '../../shared/model/language.enum';
import { TranslatedWord } from '../../shared/model/translateword';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-table-category',
  standalone: true,
  imports: [CommonModule,MatIconModule,MatTableModule,MatButtonModule],
  templateUrl: './table-category.component.html',
  styleUrl: './table-category.component.css'
})
export class TableCategoryComponent {

  category1= new Category(2,"color",new Date,Language.English,Language.Hebrew,[new TranslatedWord("yellow","צהוב"),
  new TranslatedWord("blue","כחול"),new TranslatedWord("black","שחור")])

  category2= new Category(3,"vehicle",new Date,Language.English,Language.Hebrew,[new TranslatedWord("car","מכונית"),
  new TranslatedWord("bicycle","אופניים"),new TranslatedWord("airplane","מטוס")])

  category3= new Category(4,"animals",new Date,Language.English,Language.Hebrew,[new TranslatedWord("dog","כלב"),
  new TranslatedWord("cat","חתול"),new TranslatedWord("fly","ציפור")])
  categoryArray = [this.category1,this.category2,this.category3]

  displayedColumns: string[] = ['namecategory','No.ofWords','lasteditdate', 'actions'];  

}
