import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './protect-route.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/welcome',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./root/root.module').then((m) => m.RootModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '**',
    redirectTo: '/auth/welcome',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
