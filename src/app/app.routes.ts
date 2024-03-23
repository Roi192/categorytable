import { Routes } from '@angular/router';
import { TableCategoryComponent } from './components/table-category/table-category.component';
import { FormCategoryComponent } from './components/form-category/form-category.component';


export const routes: Routes = [

    {path:'',component: TableCategoryComponent},
    {path: 'category/:idString', component: FormCategoryComponent},
    {path: 'newcategory', component: FormCategoryComponent},
   
   

];
