import { MainComponent } from './component/main/main.component';
import { MemberInfomationComponent } from './component/member-infomation/member-infomation';
import { ModuleWithProviders, NgModule } from '../../node_modules/@angular/core';
import {Routes, RouterModule} from '@angular/router';

const myRoutes = [
    {path: 'registration', component: MainComponent},
    {path: 'member', component: MemberInfomationComponent}
  ];

// export const MY_ROUTES: ModuleWithProviders = RouterModule.forRoot(myRoutes);

@NgModule({
  imports: [RouterModule.forRoot(myRoutes, {enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
