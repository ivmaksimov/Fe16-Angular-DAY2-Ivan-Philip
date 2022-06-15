import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
  path:"", component: HomeComponent
},
{
  path:"contact", component: ContactComponent 
},{
  path:"add", component: AddComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
