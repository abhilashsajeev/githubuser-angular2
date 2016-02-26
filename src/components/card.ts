/**
 * Created by anto_belgin on 10/12/15.
 */
import {Component, View , Input} from 'angular2/core';

@Component({
    selector: 'Card',
    properties: ['course: course']
})
@View({
    template: `
    <div style="box-shadow: 10px 10px 5px #888888;width: 400px;height: 150px; background-color : #ebffc6 ; padding: 25px; ">
        <div >
          <img style="width:35px; height:35px;" src={{course.avatar_url}} />
          <b>{{course.login}}</b>
        <div>  
        
        <hr >
        {{course.url}}
    </div>
`
})
export class Card {
	//@Input() course : Object;
}
