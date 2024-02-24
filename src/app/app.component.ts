import { Component } from "@angular/core";
import { HeaderComponent } from "./components/header/header.component";
import { TableCategoryComponent } from "./components/table-category/table-category.component";
import { Category } from "./shared/model/category";
import { Language } from "./shared/model/language.enum";
import { TranslatedWord } from "./shared/model/translateword";
import { CommonModule } from "@angular/common";
import { MatTableModule } from "@angular/material/table";
import { MatIconModule } from "@angular/material/icon";




@Component ({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [HeaderComponent, TableCategoryComponent,CommonModule,MatTableModule,MatIconModule,]
})
export class AppComponent {
    title= "first-app";
    category1= new Category(2,"color",new Date,Language.English,Language.Hebrew,[new TranslatedWord("yellow","צהוב"),
    new TranslatedWord("blue","כחול"),new TranslatedWord("black","שחור")])
    category2= new Category(3,"vehicle",new Date,Language.English,Language.Hebrew,[new TranslatedWord("car","מכונית"),
    new TranslatedWord("bicycle","אופניים"),new TranslatedWord("airplane","מטוס")])
    category3= new Category(4,"animals",new Date,Language.English,Language.Hebrew,[new TranslatedWord("dog","כלב"),
    new TranslatedWord("cat","חתול"),new TranslatedWord("fly","ציפור")])
    categoryArray: Category[] = [this.category1,this.category2,this.category3]

    
}


