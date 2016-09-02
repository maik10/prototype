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
var pages_service_1 = require('./pages.service');
var http_1 = require('@angular/http');
var PagesComponent = (function () {
    function PagesComponent(pageservice) {
        this.pageservice = pageservice;
    }
    PagesComponent.prototype.ngOnInit = function () { };
    PagesComponent.prototype.getPages = function (unitId) {
        var _this = this;
        this.pageservice.getPages(unitId)
            .then(function (Pages) { return _this.pages = Pages; }, function (error) { return _this.errorMessage = error; });
    };
    PagesComponent.prototype.createPage = function (page) {
        var _this = this;
        this.pageservice.create(page).then(function (success) { return _this.getPages(page.unit_id); });
    };
    PagesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'workspace',
            templateUrl: 'pages.component.html',
            providers: [pages_service_1.PagesService, http_1.HTTP_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [pages_service_1.PagesService])
    ], PagesComponent);
    return PagesComponent;
}());
exports.PagesComponent = PagesComponent;
//# sourceMappingURL=pages.component.js.map