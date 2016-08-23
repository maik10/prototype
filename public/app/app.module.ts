import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { FormsModule }   from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';

@NgModule({
  imports:      [ BrowserModule, routing, FormsModule ],
  declarations: [ AppComponent],
  providers:    [appRoutingProviders],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
