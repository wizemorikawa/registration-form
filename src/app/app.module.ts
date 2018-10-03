import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { InputInfomationComponent } from './main/input-infomation/input-infomation.component';
import { FormsModule } from '@angular/forms';
import { ConfirmInfomationComponent } from './main/confirm-infomation/confirm-infomation.component';
import { CompleteRegistrationComponent } from './main/complete-registration/complete-registration.component';
import { CurrencyStatusComponent } from './main/currency-status/currency-status.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    InputInfomationComponent,
    ConfirmInfomationComponent,
    CompleteRegistrationComponent,
    CurrencyStatusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
