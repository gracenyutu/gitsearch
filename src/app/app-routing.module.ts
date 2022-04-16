import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { User } from './user'
import { Repository } from './repository';
import { UserComponent } from './user/user.component';
import { RepositoryComponent } from './repository/repository.component';

const routes: Routes = [
  { path: 'user', component: UserComponent},
  { path: 'repository', component: RepositoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
