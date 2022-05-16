import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactFormComponent } from './component/react-form/react-form.component';
import { TdfFormComponent } from './component/tdf-form/tdf-form.component';
import { AgePipe } from './pipes/age.pipe';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UsersComponent } from './component/users/users.component';
import { UserComponent } from './component/user/user.component';
import { AddressComponent } from './component/address/address.component';

import { CompanyComponent } from './component/company/company.component';
import { AddUserComponent } from './component/add-user/add-user.component';
import { ContactComponent } from './component/contact/contact.component';
import { NotifyComponent } from './component/notify/notify.component';
import { NotificationBoardComponent } from './component/notification-board/notification-board.component';
import { ViewChildComponent } from './component/view-child/view-child.component';
import { NgContentComponent } from './component/ng-content/ng-content.component';
import { ProductWidgetComponent } from './component/product-widget/product-widget.component';
import { HeadersInterceptor } from './middleWare/headers.interceptor';
import { TemplateDrivenFormComponent } from './component/template-driven-form/template-driven-form.component';
import { NgforSampleComponent } from './component/ngfor-sample/ngfor-sample.component';


@NgModule({
  declarations: [
    AppComponent,
    ReactFormComponent,
    TdfFormComponent,
    AgePipe,
    UsersComponent,
    UserComponent,
    AddressComponent,

    CompanyComponent,
    AddUserComponent,
    ContactComponent,
    NotifyComponent,
    NotificationBoardComponent,
    ViewChildComponent,
    NgContentComponent,
    ProductWidgetComponent,
    TemplateDrivenFormComponent,
    NgforSampleComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
 
  bootstrap: [AppComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HeadersInterceptor, multi: true }
  ]
})
export class AppModule {}
