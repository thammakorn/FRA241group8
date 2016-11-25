import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    template: `
  <div class="card-panel backdrop">
        <a routerLink="/" routerLinkActive="active"></a>
  
        
   </div>
  <router-outlet></router-outlet>
`

})
export class AppComponent { }