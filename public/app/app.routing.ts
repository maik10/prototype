import { provideRouter, RouterConfig } from '@angular/router';
import { Routes, RouterModule }   from '@angular/router';
import { UnitsComponent } from './units/units.component';
import { EditorComponent } from './editor/editor.component';
const appRoutes: RouterConfig = [
  { path: 'units',children: [
    {path: '', component: UnitsComponent},
    {path: 'edit/:id', component:EditorComponent}
  ] },
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
