import { Inject, Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import { Http ,Headers , HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/add/observable/fromArray';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/map';


const URL : string = 'https://api.github.com/search/users?q=';

let courses : Array<string> = [URL + 'abhilash'];

@Injectable()
export class CourseDetailsService {
    http: Http;
    constructor(@Inject(Http) Http) {
        this.http = Http;
    }

    get() {
        return courses;
    }
    
    set(user) {
      courses.pop();
      courses.push(URL + user);
      return this.load();
    }

    add(course) {
        courses.push(course);
        return this.get();
    }

    remove(course) {
        courses.splice(courses.indexOf(course), 1);
        return this.get();
    }

    httpGet(url) {
        //add HTTP Basic auth
        var headers = new Headers();

        return this.http.get(url,{
            headers : headers
        }).map(res => res)
    }

    load() {
        return Observable.fromArray(courses).concatMap(this.httpGet.bind(this));
    }
}