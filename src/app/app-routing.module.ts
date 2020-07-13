import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductsComponent } from './components/products/products.component';
import { ClaimsComponent } from './components/claims/claims.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'claims', component: ClaimsComponent },
  { path: 'contacts', component: ContactUsComponent },

  { path: 'home', redirectTo: '' },
  // { path: '**', pathMatch: 'full', redirectTo: '' }
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
