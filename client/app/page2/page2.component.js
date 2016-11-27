"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
// import  { Service } from '../service/service'
// import  { Choice} from '../choice'
var Date = (function () {
    function Date() {
    }
    return Date;
}());
exports.Date = Date;
var Page2Component = (function () {
    function Page2Component() {
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
        this.dateshow = {
            time: '',
            date: '-',
            timeStart: '-',
            timeEnd: '-',
        };
        this.submitted = false;
        this.click1 = false;
        this.click2 = false;
        this.click3 = false;
        this.click4 = false;
        this.click5 = false;
        this.click6 = false;
        this.click7 = false;
        this.active = true;
    }
    Page2Component.prototype.onSubmit = function () {
        this.submitted = true;
    };
    Page2Component = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'page2',
            templateUrl: 'page2.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], Page2Component);
    return Page2Component;
}());
exports.Page2Component = Page2Component;
//# sourceMappingURL=page2.component.js.map