import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './Auth/auth.guard';
import { AddUserComponent } from './component/add-user/add-user.component';
import { AddressComponent } from './component/address/address.component';
import { CompanyComponent } from './component/company/company.component';
import { ContactComponent } from './component/contact/contact.component';
import { NgContentComponent } from './component/ng-content/ng-content.component';
import { NgforSampleComponent } from './component/ngfor-sample/ngfor-sample.component';
import { ReactFormComponent } from './component/react-form/react-form.component';
import { TdfFormComponent } from './component/tdf-form/tdf-form.component';
import { TemplateDrivenFormComponent } from './component/template-driven-form/template-driven-form.component';
import { UserComponent } from './component/user/user.component';
import { UsersComponent } from './component/users/users.component';
import { ViewChildComponent } from './component/view-child/view-child.component';

const routes: Routes = [
  { path: 'tdf', component: TdfFormComponent },
  { path: 'ra', component: ReactFormComponent },
  { path: 'users', component: UsersComponent , canActivate:[AuthGuard]},
  {
    path: 'user/:id',
    component: UserComponent,
    children: [
      {path:'', redirectTo :'address', pathMatch: 'full'},
      { path: 'address', component: AddressComponent },
      { path: 'company', component: CompanyComponent },
    ],
  },
  {path:'add-user', component: AddUserComponent},
  {path:'contact', component: ContactComponent},
  {path:'child', component: ViewChildComponent},
  {path:'content', component:NgContentComponent},
  {path:"tdf-2", component:TemplateDrivenFormComponent},
  {path: 'ngfor', component : NgforSampleComponent},
  { path: '**', redirectTo: '/users' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
