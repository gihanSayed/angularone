import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortoflioComponent } from './portoflio/portoflio.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:"", redirectTo:"home" , pathMatch:"full"},
  {path :"home" , component : HomeComponent},
  {path :"about" , component:AboutComponent},
  {path :"portfolio" , component:PortoflioComponent},
  {path :"contact" , component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
