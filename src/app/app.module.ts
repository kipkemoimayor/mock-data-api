import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorPipe } from './pipes/color.pipe';
import { HeroesComponent } from './components/heroes/heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorPipe,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
