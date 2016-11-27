import {Injectable} from '@angular/core';
import {Http, Headers , RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService{
    private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
    private options = new RequestOptions({ headers: this.headers });
    constructor(private http:Http){
        console.log('T')
    }
    getUsername(username){
        return this.http.post('http://localhost:3000/user/username', JSON.stringify(username), this.options);
    }
}