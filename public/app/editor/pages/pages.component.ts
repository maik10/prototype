import { Component, OnInit } from '@angular/core';
import { PagesService } from './pages.service';
import { Page } from './page.model';
import { HTTP_PROVIDERS } from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'workspace',
    templateUrl: 'pages.component.html',
    providers: [PagesService, HTTP_PROVIDERS]
})
export class PagesComponent implements OnInit {
    pages: Page[];
    errorMessage: string;
    constructor(private pageservice: PagesService) { }

    ngOnInit() { }
    getPages(unitId:number){
         this.pageservice.getPages(unitId)
         .then(
             Pages => this.pages = Pages,
             error =>  this.errorMessage = <any>error
         );
     }
     createPage(page:Page){
          this.pageservice.create(page).then(success => this.getPages(page.unit_id));
     }
}