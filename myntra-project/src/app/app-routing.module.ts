import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenPageComponent } from './men-page/men-page.component';
import { WomenPageComponent } from './women-page/women-page.component';
import { KidsComponent } from './kids/kids.component';
import { HomeLivingComponent } from './home-living/home-living.component';

const routes: Routes = [{
  path: 'men',
  component:  MenPageComponent
  
},
{
  path: 'women',
  component:  WomenPageComponent
},
{
  path: 'kids',
  component:  KidsComponent 
},

{
  path: 'home&living',
  component:  HomeLivingComponent
},

{
  path: '',
  redirectTo: '/men',
  pathMatch: 'full'
},
{
  path: '**',
  redirectTo: '/men',
  pathMatch: 'full'
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
