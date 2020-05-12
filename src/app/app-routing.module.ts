import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { ClientListComponent } from './client/client-list/client-list.component';
import { ClientCreateComponent } from './client/client-create/client-create.component';
import { AuthLoginComponent } from './auth/auth-login/auth-login.component';
import { AuthSignUpComponent } from './auth/auth-sign-up/auth-sign-up.component';

const routes: Routes = [{
  path: 'clients',
  children: [
    {
      path: 'list',
      component: ClientListComponent
    },
    {
      path: 'add',
      component: ClientCreateComponent,
      canActivate: [NgxPermissionsGuard],
      data: {
        permissions: {
          only: ['ADMIN']
        }
      }
    }
  ]
},
{
  path: 'auth',
  children: [
    {
      path: 'login',
      component: AuthLoginComponent,
      canActivate: [NgxPermissionsGuard],
      data: {
        permissions: {
          only: ['GUEST']
        }
      }
    },
    {
      path: ':sign-up',
      component: AuthSignUpComponent,
      canActivate: [NgxPermissionsGuard],
      data: {
        permissions: {
          only: ['GUEST']
        }
      }
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
