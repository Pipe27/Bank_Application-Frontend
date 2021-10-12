import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerSaveComponent } from './components/customer-save/customer-save.component';

const routes: Routes = [
  {path: 'customer-list', component: CustomerListComponent},
  {path: 'customer-save', component: CustomerSaveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
