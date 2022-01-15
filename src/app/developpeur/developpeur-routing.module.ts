import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsDeveloppeurComponent } from './details-developpeur/details-developpeur.component';
import { DeveloppeurComponent } from './developpeur.component';

const routes: Routes = [{ path: '', component: DeveloppeurComponent },
{ path: ':id', component: DetailsDeveloppeurComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeveloppeurRoutingModule { }
