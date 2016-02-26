import {Component, View , Directive} from 'angular2/core';
import {NgIf, NgFor} from 'angular2/common';
import {FormBuilder, Validators,NgControlGroup} from 'angular2/common';
import {CourseDetailsService} from '../services/course';
import {Card} from './card';
import {FORM_PROVIDERS, FORM_DIRECTIVES} from 'angular2/common';

@Component({
    selector: 'dashboard',
    providers: [CourseDetailsService,FORM_PROVIDERS]
    
})
@View({
    directives: [NgIf, NgFor, Card,FORM_DIRECTIVES],
    template: `
    <div class="row">
      <div class="col-md-12" *ngIf="courses.length === 0" style="text-align: center;">
        Loading . . . Please wait
      </div>
      <div class="col-md-10" style="margin:20px 0 25px 0;">
        <form>
          Name
          <input class="form-control" type="text" placeholder="Enter a name here" #login> 
          <button class="btn btn-info" (click)="set(login.value)">Update</button>
        </form>
      </div>  
      <div class="col-md-4" *ngFor="#course of courses">
        <Card [course]="course"></Card>
        <br />
      </div>
    </div>
  `
})
export class Dashboard {
    courses: Array<Object> = [];
    courseDetails: Array<string>;
    service: CourseDetailsService;
    usrModel;

    constructor(service: CourseDetailsService, formBuilder: FormBuilder) {
        this.service = service;
        this.usrModel = formBuilder.group({
          login: ["", Validators.required]
        });
        this.courseDetails = service.get();
        service.load().subscribe(courseDetails => {
            courseDetails = courseDetails.json();
            for(var i=0; i< courseDetails.items.length; i++){
              this.courses.push(courseDetails.items[i]);  
            }
            
            console.log(this.courses)
        });
    }
    
    set(name) {
      
      this.courses = [];
      
      this.service.set(name).subscribe(courseDetails => {
            courseDetails = courseDetails.json();
            for(var i=0; i< courseDetails.items.length; i++){
              this.courses.push(courseDetails.items[i]);  
            }
        });
    }
}