"use strict";
var router_1 = require('@angular/router');
var units_component_1 = require('./units/units.component');
var editor_component_1 = require('./editor/editor.component');
var appRoutes = [
    { path: 'units', children: [
            { path: '', component: units_component_1.UnitsComponent },
            { path: 'edit/:id', component: editor_component_1.EditorComponent }
        ] },
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map