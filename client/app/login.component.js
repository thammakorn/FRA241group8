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
var router_1 = require("@angular/router");
var login_service_1 = require('./Service/login.service');
var logincomponent = (function () {
    function logincomponent(_router, loginservice) {
        this._router = _router;
        this.loginservice = loginservice;
        this.checkk = true;
    }
    logincomponent.prototype.formSubmit = function () {
        var username = this.username;
        var password = this.password;
        var key = btoa(btoa(username) + '??' + btoa(password));
        console.log(key);
        document.cookie = "sessionID=" + key;
        // console.log(document.cookie)
        if (username == 'student' && password == 'student') {
            this._router.navigate(['/search']);
        }
        else {
            if (username == 'teach' && password == 'teach') {
                this._router.navigate(['/tech']);
            }
            else {
                this.checkk = false;
                console.log('Who are you ?');
            }
        }
    };
    logincomponent.prototype.ngOnInit = function () {
        var username = '1';
        var password = '1';
        document.cookie = "sessionID=" + btoa(btoa(username) + '??' + btoa(password));
        console.log(document.cookie);
    };
    logincomponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'login',
            templateUrl: 'login.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, login_service_1.LoginService])
    ], logincomponent);
    return logincomponent;
}());
exports.logincomponent = logincomponent;
//# sourceMappingURL=login.component.js.map