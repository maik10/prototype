"use strict";
var router_1 = require('@angular/router');
var units_component_1 = require('./units/units.component');
var editor_component_1 = require('./editor/editor.component');
var routes = [
    { path: 'units', children: [
            { path: '', component: units_component_1.UnitsComponent },
            { path: 'edit/:id', component: editor_component_1.EditorComponent }
        ] },
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map