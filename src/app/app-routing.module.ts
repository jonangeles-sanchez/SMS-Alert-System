import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestFormComponent } from './components/request-form/request-form.component';
import { ViewRequestsComponent } from './components/view-requests/view-requests.component';

const routes: Routes = [
  { path: '', component: RequestFormComponent },
  { path: 'requests', component: ViewRequestsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
