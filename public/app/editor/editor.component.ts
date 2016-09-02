import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { EditorService } from './editor.service';
import { PagesComponent } from './pages/pages.component';
import { Page } from './pages/page.model';
import {Dragula, DragulaService} from 'ng2-dragula/ng2-dragula';

@Component({
    moduleId: module.id,
    templateUrl: 'editor.component.html',
    directives: [PagesComponent,Dragula],
    providers: [DragulaService]
})
export class EditorComponent implements OnInit {
    id: any;
    paramsSub: any;
    selectedPage: Page;
    newPage = new Page();
    formShowing: boolean = false;
    dragOperation: boolean = false;
    @ViewChild(PagesComponent) pagecomponent: PagesComponent;
    constructor(private route: ActivatedRoute, private router: Router,private activatedRoute: ActivatedRoute,private dragulaService: DragulaService) {
        dragulaService.setOptions('pages', {
            removeOnSpill: true
        });
        dragulaService.setOptions('workspace',{
            copy: function (el, source) {
                return source === document.getElementById('tools');
            },
            accepts: function (el, target) {
                return target !== document.getElementById('tools');
            },
            removeOnSpill:function (el, target) {
                return target !== document.getElementById('tools');
            }
        });
        dragulaService.drop.subscribe((value) => {
            console.log(value)
            if(value[0]==='workspace'){
                var newNode = document.createElement("section");
                newNode.textContent = "HTML5 section!";
                newNode.classList.add("col-md-6");
                newNode.classList.add("col-xs-6");
                newNode.classList.add("wks-section");
                value[1].parentNode.replaceChild(newNode,value[1]);
            }
        });
     }

     ngOnInit() { 
         this.paramsSub = this.activatedRoute.params.subscribe(params => this.id = parseInt(params['id'], 10));
         this.pagecomponent.getPages(this.id);
    }
    selectPage(page: Page){
        this.selectedPage = page;
    }
    addPage(){
        console.log(this.newPage)
    }
    ngOnDestroy() {
        this.paramsSub.unsubscribe();
    }
    addTo($event){
        console.log($event);
    }
} 