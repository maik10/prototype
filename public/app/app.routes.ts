import { provideRouter, RouterConfig } from '@angular/router';
import { UnitsComponent } from './units/units.component';
import { EditorComponent } from './editor/editor.component';
const routes: RouterConfig = [
  { path: 'units',children: [
    {path: '', component: UnitsComponent},
    {path: 'edit/:id', component:EditorComponent}
  ] },
];

export const appRouterProviders = [
  provideRouter(routes)
];
