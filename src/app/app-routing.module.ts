import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './theme/auth-layout/auth-layout.component';
import { LoginComponent } from './routes/login/login.component';
import { SellerCentralLayoutComponent } from './theme/seller-central-layout/seller-central-layout.component';
import { AuthGuard } from './core/authentication';

const routes: Routes = [
  {
    path: '',
    component: SellerCentralLayoutComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
 
    ],
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
    ],
  },
  { path: '**', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
