import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  // { path: 'cockpit', component: CockpitComponent, children: [
  //   { path: 'editphotos', component: EditPhotosComponent },
  //   { path: '', pathMatch: 'full', component: EditPhotosComponent }
  // ] },

  { path: 'home', redirectTo: '' },
  // { path: '**', pathMatch: 'full', redirectTo: '' }
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
