import { NgModule } from '@angular/core';
//Page Inicial
import { HomeComponent } from './modules/home/pages/home/home.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
