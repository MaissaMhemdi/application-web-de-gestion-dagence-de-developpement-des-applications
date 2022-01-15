import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilDetailsComponent } from './profil-details/profil-details.component';

import { ProfilComponent } from './profil.component';

const routes: Routes = [{ path: '', component: ProfilComponent },
{ path: ':id', component: ProfilDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [
    ProfilDetailsComponent
  ]
})
export class ProfilRoutingModule { }
