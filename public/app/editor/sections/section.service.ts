import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Section } from './section.model';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SectionsService {

    private unitsUrl = "api/getSections";
    constructor(private http:Http) { }
    getSections(PageId:number): Promise<Section[]> {
        return this.http.get(this.unitsUrl+"/"+PageId)
                        .toPromise()
                        .then(this.extractData)
                        .catch(this.handleError);
    }
    private extractData(res: Response) {
        let body = res.json();
        console.log(body);
        return body || { };
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