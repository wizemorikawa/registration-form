import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './component/main/main.component';
import { InputInfomationComponent } from './component/main/input-infomation/input-infomation.component';
import { FormsModule } from '@angular/forms';
import { ConfirmInfomationComponent } from './component/main/confirm-infomation/confirm-infomation.component';
import { CompleteRegistrationComponent } from './component/main/complete-registration/complete-registration.component';
import { CurrencyStatusComponent } from './component/main/currency-status/currency-status.component';
import { MemberInfomationComponent } from './component/member-infomation/member-infomation';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule} from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    InputInfomationComponent,
    ConfirmInfomationComponent,
    CompleteRegistrationComponent,
    CurrencyStatusComponent,
    MemberInfomationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
