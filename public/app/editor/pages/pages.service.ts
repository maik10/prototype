import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Page } from './page.model';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PagesService {

    private unitsUrl = "api/pages";
    constructor(private http:Http) { }
    getPages(unitId:number): Promise<Page[]> {
        return this.http.get(this.unitsUrl+"/get/"+unitId)
                        .toPromise()
                        .then(this.extractData)
                        .catch(this.handleError);
    }
    private extractData(res: Response) {
        let body = res.json();
        return body || { };
    }
    create(page:Page) {
        return this.http.get(this.unitsUrl+"/create/"+page.name+"/"+page.unit_id)
                        .toPromise()
                        .then(this.extractData)
                        .catch(this.handleError);
    }
    private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Promise.reject(errMsg);
    }
}