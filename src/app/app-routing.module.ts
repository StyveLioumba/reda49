import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {HomeComponent} from "./components/home/home.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {ContactComponent} from "./components/contact/contact.component";

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'/'},
  {path:'',component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'**',redirectTo:'not-found'},
  {path:'not-found',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
