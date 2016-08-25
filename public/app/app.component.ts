import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { appRoutingProviders } from './app.routing';
@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
  views: Object[] = [
    {
      name: "Units",
      description: 'List of units',
      icon: 'library_books'
    }
  ];
 }
