import { Component, OnInit } from '@angular/core';
import { UnitsService } from './units.service';
import { Unit } from './units.model';
import { HTTP_PROVIDERS } from '@angular/http';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'units.component.html',
    providers: [UnitsService,HTTP_PROVIDERS]
})
export class UnitsComponent implements OnInit {
    errorMessage: string;
    units: Unit[];

    constructor(private unitservice: UnitsService,private router: Router) { }
    

    ngOnInit() {
        this.getUnits();
     }
     getUnits(){
         this.unitservice.getUnits()
         .then(
             Units => this.units = Units,
             error =>  this.errorMessage = <any>error
         )
     }
     editUnit(unit: Unit){
         this.router.navigate(['units/edit/',unit.id]);
     }
}