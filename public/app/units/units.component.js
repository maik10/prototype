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
var units_service_1 = require('./units.service');
var units_model_1 = require('./units.model');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var UnitsComponent = (function () {
    function UnitsComponent(unitservice, router) {
        this.unitservice = unitservice;
        this.router = router;
        this.newUnit = new units_model_1.Unit();
        this.formShowing = false;
        this.selectedUnit = new units_model_1.Unit();
    }
    UnitsComponent.prototype.ngOnInit = function () {
        this.getUnits();
    };
    UnitsComponent.prototype.getUnits = function () {
        var _this = this;
        this.unitservice.getUnits()
            .then(function (Units) { return _this.units = Units; }, function (error) { return _this.errorMessage = error; });
    };
    UnitsComponent.prototype.editUnit = function (unit) {
        this.router.navigate(['units/edit/', unit.id]);
    };
    UnitsComponent.prototype.onSubmit = function () {
        var _this = this;
        this.unitservice.createUnit(this.newUnit).then(function (success) { return _this.getUnits(); });
        this.formShowing = false;
        this.newUnit = new units_model_1.Unit();
    };
    UnitsComponent.prototype.selectUnit = function (unit) {
        if (this.selectedUnit === unit) {
            this.selectedUnit = new units_model_1.Unit();
        }
        else {
            this.selectedUnit = unit;
        }
    };
    UnitsComponent.prototype.updateUnit = function (unit) {
        var _this = this;
        this.unitservice.updateUnit(unit).then(function (success) { return _this.getUnits(); });
        ;
    };
    UnitsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'units.component.html',
            providers: [units_service_1.UnitsService, http_1.HTTP_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [units_service_1.UnitsService, router_1.Router])
    ], UnitsComponent);
    return UnitsComponent;
}());
exports.UnitsComponent = UnitsComponent;
//# sourceMappingURL=units.component.js.map