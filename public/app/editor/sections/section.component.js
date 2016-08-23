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
var sections_service_1 = require('./sections.service');
var ComponentNameComponent = (function () {
    function ComponentNameComponent(sectionservice) {
        this.sectionservice = sectionservice;
    }
    ComponentNameComponent.prototype.ngOnInit = function () { };
    ComponentNameComponent.prototype.getSections = function (unitId) {
        var _this = this;
        this.sectionservice.getSections(unitId)
            .then(function (Pages) { return _this.sections = Pages; }, function (error) { return _this.errorMessage = error; });
    };
    ComponentNameComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
        }), 
        __metadata('design:paramtypes', [sections_service_1.SectionsService])
    ], ComponentNameComponent);
    return ComponentNameComponent;
}());
exports.ComponentNameComponent = ComponentNameComponent;
//# sourceMappingURL=section.component.js.map