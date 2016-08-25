import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { FormsModule }   from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';

import { UnitsComponent }   from './units/units.component';
import { EditorComponent }   from './editor/editor.component';

import { MdButtonModule } from '@angular2-material/button';
import { MdCardModule } from '@angular2-material/card';
import { MdCheckboxModule } from '@angular2-material/checkbox';
import { MdCoreModule } from '@angular2-material/core';
import { MdInputModule } from '@angular2-material/input';
import { MdProgressCircleModule } from '@angular2-material/progress-circle';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdSidenavModule } from '@angular2-material/sidenav';
import { MdIconModule } from '@angular2-material/icon';
import { MdMenuModule } from '@angular2-material/menu';
import { MdListModule } from '@angular2-material/list';

@NgModule({
  imports:      [ 
    BrowserModule,
     routing,
      FormsModule,
      MdButtonModule,
      MdCardModule,
      MdCheckboxModule,
      MdCoreModule,
      MdInputModule,
      MdProgressCircleModule,
      MdToolbarModule,
      MdSidenavModule,
      MdIconModule,
      MdMenuModule,
      MdListModule
  ],
  declarations: [ AppComponent, UnitsComponent, EditorComponent],
  providers:    [ appRoutingProviders ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
