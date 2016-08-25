"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var forms_1 = require('@angular/forms');
var app_routing_1 = require('./app.routing');
var units_component_1 = require('./units/units.component');
var editor_component_1 = require('./editor/editor.component');
var button_1 = require('@angular2-material/button');
var card_1 = require('@angular2-material/card');
var checkbox_1 = require('@angular2-material/checkbox');
var core_2 = require('@angular2-material/core');
var input_1 = require('@angular2-material/input');
var progress_circle_1 = require('@angular2-material/progress-circle');
var toolbar_1 = require('@angular2-material/toolbar');
var sidenav_1 = require('@angular2-material/sidenav');
var icon_1 = require('@angular2-material/icon');
var menu_1 = require('@angular2-material/menu');
var list_1 = require('@angular2-material/list');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_1.routing,
                forms_1.FormsModule,
                button_1.MdButtonModule,
                card_1.MdCardModule,
                checkbox_1.MdCheckboxModule,
                core_2.MdCoreModule,
                input_1.MdInputModule,
                progress_circle_1.MdProgressCircleModule,
                toolbar_1.MdToolbarModule,
                sidenav_1.MdSidenavModule,
                icon_1.MdIconModule,
                menu_1.MdMenuModule,
                list_1.MdListModule
            ],
            declarations: [app_component_1.AppComponent, units_component_1.UnitsComponent, editor_component_1.EditorComponent],
            providers: [app_routing_1.appRoutingProviders],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map