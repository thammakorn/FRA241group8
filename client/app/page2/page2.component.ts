import { Component } from '@angular/core';
import {Router} from "@angular/router";
// import  { Service } from '../service/service'
// import  { Choice} from '../choice'
export class Date {
    date: string;
    time : string;
    timeStart : string;
    timeEnd : string;
}

@Component({
    moduleId: module.id,
    selector: 'page2',
    templateUrl: 'page2.component.html',
    // providers :[Service]
    /*styleUrls: ['page1.component.css']*/

})
export class Page2Component {
    // choices : Choice[];
    // constructor(private service : Service){
    //     this.service.getReadable()
    //         .subscribe(choices => {
    //             console.log(choices);
    //             this.choices = choices;
    //         });
    // }
    // updateStatus(choices){
    //     var _choices = {
    //         done : !choices.done};
    //     this.service.updateStatus(_choices).subscribe(data =>{
    //         choices.done = !choices.done;
    //     });
    // }
    constructor(public _router: Router) {
        var x = document.cookie.split(';');
        var cookievalue;
        var i = 0;
        for (; i < x.length; i++) {
            if (x[i].split('=')[0].trim() == 'sessionID') {
                cookievalue = x[i].split('=')[1];
                break;
            }
        }
        if (cookievalue === undefined) {
            this._router.navigate(['']);
        } else {
            var res = atob(cookievalue).split('??');
            if (atob(res[0]) == 'student' && atob(res[1]) == 'student') {
                //admin
            } else {
                this._router.navigate(['']);
            }
        }
    }
    dateshow: Date = {
        time : '',
        date : '-',
        timeStart : '-',
        timeEnd : '-',
    };
    submitted = false;
    click1 = false;
    click2 = false;
    click3 = false;
    click4 = false;
    click5 = false;
    click6 = false;
    click7 = false;

    onSubmit() { this.submitted = true;

    }
    active = true;

}
