import { ModuleWithProviders, NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './component/login/login.component';

// const myRoutes = [
//     {path: 'registration', component: MainComponent},
//     {path: 'member', component: MemberInfomationComponent}
//   ];

// function loadMyApp() {
//   return Promise.resolve(require('./routing/myApp/myApp.routing.module')['MyAppRoutingModule']);
// }

const myRoutes: Routes = [
  {path: 'myApp', loadChildren: './routing/myApp/myApp.routing.module#MyAppRoutingModule'},
  {path: 'login', component: LoginComponent}
];

// export const MY_ROUTES: ModuleWithProviders = RouterModule.forRoot(myRoutes);

@NgModule({
  imports: [RouterModule.forRoot(myRoutes, {enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
