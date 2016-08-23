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
var router_1 = require('@angular/router');
var pages_component_1 = require('./pages/pages.component');
var ng2_dragula_1 = require('ng2-dragula/ng2-dragula');
var EditorComponent = (function () {
    function EditorComponent(route, router, activatedRoute, dragulaService) {
        this.route = route;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.dragulaService = dragulaService;
        this.dragOperation = false;
        dragulaService.setOptions('pages', {
            removeOnSpill: true
        });
        dragulaService.setOptions('workspace', {
            copy: function (el, source) {
                return source === document.getElementById('tools');
            },
            accepts: function (el, target) {
                return target !== document.getElementById('tools');
            },
            removeOnSpill: function (el, target) {
                return target !== document.getElementById('tools');
            }
        });
        dragulaService.drop.subscribe(function (value) {
            console.log(value);
            if (value[0] === 'workspace') {
                var newNode = document.createElement("section");
                newNode.textContent = "HTML5 section!";
                newNode.classList.add("col-md-6");
                newNode.classList.add("col-xs-6");
                newNode.classList.add("wks-section");
                value[1].parentNode.replaceChild(newNode, value[1]);
            }
        });
    }
    EditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paramsSub = this.activatedRoute.params.subscribe(function (params) { return _this.id = parseInt(params['id'], 10); });
        this.pagecomponent.getPages(this.id);
    };
    EditorComponent.prototype.selectPage = function (page) {
        this.selectedPage = page;
    };
    EditorComponent.prototype.ngOnDestroy = function () {
        this.paramsSub.unsubscribe();
    };
    EditorComponent.prototype.addTo = function ($event) {
        console.log($event);
    };
    __decorate([
        core_1.ViewChild(pages_component_1.PagesComponent), 
        __metadata('design:type', pages_component_1.PagesComponent)
    ], EditorComponent.prototype, "pagecomponent", void 0);
    EditorComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'editor.component.html',
            directives: [pages_component_1.PagesComponent, ng2_dragula_1.Dragula],
            providers: [ng2_dragula_1.DragulaService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, router_1.ActivatedRoute, ng2_dragula_1.DragulaService])
    ], EditorComponent);
    return EditorComponent;
}());
exports.EditorComponent = EditorComponent;
//# sourceMappingURL=editor.component.js.map