import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { ClientListComponent } from './client/client-list/client-list.component';
import { ClientCreateComponent } from './client/client-create/client-create.component';

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
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
