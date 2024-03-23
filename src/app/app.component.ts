import { Component } from "@angular/core";
import { HeaderComponent } from "./components/header/header.component";
import { TableCategoryComponent } from "./components/table-category/table-category.component";
import { Category } from "./shared/model/category";
import { Language } from "./shared/model/language.enum";
import { TranslatedWord } from "./shared/model/translateword";
import { CommonModule } from "@angular/common";
import { MatTableModule } from "@angular/material/table";
import { MatIconModule } from "@angular/material/icon";
import { RouterModule } from "@angular/router";
import { FormCategoryComponent } from "./components/form-category/form-category.component";
import { FooterComponent } from "./components/footer/footer.component";




@Component ({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [HeaderComponent, TableCategoryComponent, CommonModule, MatTableModule, MatIconModule, RouterModule, FormCategoryComponent, FooterComponent]
})
export class AppComponent {
    title= "first-app";
}


