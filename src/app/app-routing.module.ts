import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';







const routes: Routes = [{path:'home', component: HomeComponent},
  { path: 'societe', loadChildren: () => import('./societe/societe.module').then(m => m.SocieteModule) },
  {path:'', redirectTo: '/home' , pathMatch:'full'},
  { path: 'categorie', loadChildren: () => import('./categorie/categorie.module').then(m => m.CategorieModule) },
  { path: 'projet', loadChildren: () => import('./projet/projet.module').then(m => m.ProjetModule) },
  { path: 'developpeur', loadChildren: () => import('./developpeur/developpeur.module').then(m => m.DeveloppeurModule) },
  { path: 'profil', loadChildren: () => import('./profil/profil.module').then(m => m.ProfilModule) },
  { path: 'client', loadChildren: () => import('./client/client.module').then(m => m.ClientModule) },
  {path:'login', component: LoginComponent}

 ]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),FormsModule,CommonModule],
    exports: [RouterModule]
  }
)
export class AppRoutingModule { }
