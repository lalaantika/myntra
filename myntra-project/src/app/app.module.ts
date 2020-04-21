import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MenPageComponent } from './men-page/men-page.component';
import { WomenPageComponent } from './women-page/women-page.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { KidsComponent } from './kids/kids.component';
import { HomeLivingComponent } from './home-living/home-living.component';
import { SidebarCatComponent } from './sidebar-cat/sidebar-cat.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MenPageComponent,
    WomenPageComponent,
    SideBarComponent,
    KidsComponent,
    HomeLivingComponent,
    SidebarCatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
