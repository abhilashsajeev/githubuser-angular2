import {Component} from 'angular2/core';

interface Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'manage',
  template:`
    <div class="container">
      <h1>{{title}}</h1>
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div class="starter-template" >
        <label>name: </label>
        <div><input [(ngModel)]="hero.name" placeholder="name"></div>
      </div>
    </div>
    `
})
export class Manage {
  public title = 'Tour of Heroes';
  public hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
}