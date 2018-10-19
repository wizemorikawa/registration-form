import { NgModule } from '../../../../node_modules/@angular/core';
import { RegistrationMainComponent } from '../../component/registration-main/main.component';
import { InputInfomationComponent } from '../../component/registration-main/input-infomation/input-infomation.component';
import { ConfirmInfomationComponent } from '../../component/registration-main/confirm-infomation/confirm-infomation.component';
import { CompleteRegistrationComponent } from '../../component/registration-main/complete-registration/complete-registration.component';
import { CurrencyStatusComponent } from '../../component/registration-main/currency-status/currency-status.component';
import { MemberInfomationComponent } from '../../component/member-infomation/member-infomation';
import { BrowserModule } from '../../../../node_modules/@angular/platform-browser';
import { FormsModule } from '../../../../node_modules/@angular/forms';
import { HttpClientModule } from '../../../../node_modules/@angular/common/http';
import { MyAppRoutingModule } from './myApp.routing.module';
import { MyAppComponent } from './myApp.component';
import { Location } from '../../../../node_modules/@angular/common';
import { RegistrationComponent } from '../../component/registration/registration.component';
import { RouteReuseStrategy } from '../../../../node_modules/@angular/router';
import { AuthGuard } from '../../service/authGuard';

@NgModule({
  declarations: [
    MyAppComponent,
    RegistrationMainComponent,
    InputInfomationComponent,
    ConfirmInfomationComponent,
    CompleteRegistrationComponent,
    CurrencyStatusComponent,
    MemberInfomationComponent,
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MyAppRoutingModule,
  ],
  providers: [
  ],
  // entryComponents: [MyAppComponent],
  bootstrap: [MyAppComponent]
})
export class MyAppModule { }
