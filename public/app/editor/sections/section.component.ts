import { Component, OnInit } from '@angular/core';
import { SectionsService } from './sections.service';
import { Section } from './section.model';
@Component({
    moduleId: module.id,
})
export class ComponentNameComponent implements OnInit {
    sections: Section[];
    errorMessage: string;
    constructor(private sectionservice: SectionsService) { }

    ngOnInit() { }
    getSections(unitId:number){
         this.sectionservice.getSections(unitId)
         .then(
             Pages => this.sections = Pages,
             error =>  this.errorMessage = <any>error
         );
     }
}