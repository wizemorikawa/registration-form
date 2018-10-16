import { MainComponent } from './component/main/main.component';
import { MemberInfomationComponent } from './component/member-infomation/member-infomation';
import { ModuleWithProviders, NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { promise } from '../../node_modules/protractor';
import { MyAppRoutingModule } from './routing/myApp/myApp.routing.module';

// const myRoutes = [
//     {path: 'registration', component: MainComponent},
//     {path: 'member', component: MemberInfomationComponent}
//   ];

function loadMyApp() {
  return Promise.resolve(require('./routing/myApp/myApp.routing.module')['MyAppRoutingModule']);
}

const myRoutes: Routes = [
  {path: 'myApp', loadChildren: require('./routing/myApp/myApp.routing.module') }
];

// export const MY_ROUTES: ModuleWithProviders = RouterModule.forRoot(myRoutes);

@NgModule({
  imports: [RouterModule.forRoot(myRoutes, {enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
