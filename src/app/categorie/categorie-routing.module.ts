
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CategorieDetailsComponent } from './categorie-details/categorie-details.component';
import { CategorieComponent } from './categorie.component';

const routes: Routes = [{ path: '', component: CategorieComponent }, 
                              { path: ':id', component: CategorieDetailsComponent },];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
  declarations: [
    CategorieDetailsComponent
  ]
})
export class CategorieRoutingModule { }
