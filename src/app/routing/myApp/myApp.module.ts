import { NgModule } from "../../../../node_modules/@angular/core";
import { AppComponent } from "../../app.component";
import { MainComponent } from "../../component/main/main.component";
import { InputInfomationComponent } from "../../component/main/input-infomation/input-infomation.component";
import { ConfirmInfomationComponent } from "../../component/main/confirm-infomation/confirm-infomation.component";
import { CompleteRegistrationComponent } from "../../component/main/complete-registration/complete-registration.component";
import { CurrencyStatusComponent } from "../../component/main/currency-status/currency-status.component";
import { MemberInfomationComponent } from "../../component/member-infomation/member-infomation";
import { BrowserModule } from "../../../../node_modules/@angular/platform-browser";
import { FormsModule } from "../../../../node_modules/@angular/forms";
import { HttpClientModule } from "../../../../node_modules/@angular/common/http";
import { MyAppRoutingModule } from "./myApp.routing.module";
import { MyAppComponent } from "./myApp.component";

@NgModule({
  declarations: [
    AppComponent,
    MyAppComponent,
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
    MyAppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class MyAppModule { }
