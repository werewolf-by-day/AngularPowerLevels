import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HumanComponent } from './human/human.component';
import { SaiyanComponent } from './saiyan/saiyan.component';
import { SsjComponent } from './ssj/ssj.component';
import { Ssj2Component } from './ssj2/ssj2.component';
import { Ssj3Component } from './ssj3/ssj3.component';
import { SsjblueComponent } from './ssjblue/ssjblue.component';

@NgModule({
  declarations: [
    AppComponent,
    HumanComponent,
    SaiyanComponent,
    SsjComponent,
    Ssj2Component,
    Ssj3Component,
    SsjblueComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
