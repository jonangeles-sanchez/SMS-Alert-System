import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestFormComponent } from './components/request-form/request-form.component';
import { ViewRequestsComponent } from './components/view-requests/view-requests.component';
import { LoginViewComponent } from './components/login-view/login-view.component';

const routes: Routes = [
  { path: '', component: RequestFormComponent },
  { path: 'requests', component: ViewRequestsComponent },
  { path: 'login', component: LoginViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
