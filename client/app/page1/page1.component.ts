import { Component } from '@angular/core';
import {Router} from "@angular/router";

export class form {
    fristname: string;
    lastname : string;
    grade : string;
    _id : string;

}

@Component({
    moduleId: module.id,
    selector: 'page1',
    templateUrl:'page1.component.html',
    styleUrls: ['page1.component.css']


})
export class Page1Component {
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
            }
            if (atob(res[0]) == 'teach' && atob(res[1]) == 'teach') {
                //admin
            }
            else {
                this._router.navigate(['']);
            }
        }
    }
    click1 = false;

    onSubmit() {
        this.click1 = true;
    }
    active = true;

    inputForm : form = {
        fristname : '',
        lastname : '',
        grade : '',
        _id : ''
    };

}
