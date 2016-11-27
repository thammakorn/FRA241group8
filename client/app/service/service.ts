// import {Injectable} from '@angular/core';
// import {Http,Headers} from '@angular/http';
// import  'rxjs/add/operator/map';
//
// @Injectable()
//     export class Service{
//         constructor(private http: Http){
//             console.log('eiei..');
//         }
//         getReadable(){
//             return this.http.get('http://localhost:3000/book')
//                 .map(res => res.json());
//         }
//         updateStatus(choices){
//             var headers = new  Headers();
//             headers.append('Content-Type' ,'application/jso');
//             return this.http.put('http://localhost:3000/book ',JSON.stringify(new choices),{headers:headers})
//                 .map(res => res.json());
//         }
//
//     }
