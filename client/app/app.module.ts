import { NgModule }      from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { routing, appRoutingProviders }  from './app.routing';
<<<<<<< HEAD
import {HttpModule} from '@angular/http';
=======
import { HttpModule } from  '@angular/http';

>>>>>>> 2dec3ec7b67cbb2de97408bf4d3805e992abf0f9
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {logincomponent} from "./login.component";
import {searchcomponent} from "./search.component";
import {floorsearchcomponent} from "./floorsearch.component";
import {datesearchcomponent} from "./datesearch.component";
import {techcomponent} from "./tech.component";
import { HighlightDirective } from './highlight.directive';

import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { FormComponent }  from './form/form.component';

import { Floor1Component } from './floor/floor1.component';
import { Floor2Component } from './floor/floor2.component';
import { Floor3Component } from './floor/floor3.component';

@NgModule({
    imports:      [ BrowserModule,
<<<<<<< HEAD
                    FormsModule,
                    routing,
                    HttpModule],
=======
                    FormsModule,HttpModule,
                    routing ],
>>>>>>> 2dec3ec7b67cbb2de97408bf4d3805e992abf0f9
    declarations: [ AppComponent,
                    logincomponent,
                    searchcomponent,
                    floorsearchcomponent,
                    datesearchcomponent,
                    Page1Component,
                    Page2Component,
                    FormComponent,
                    techcomponent,
                    Floor1Component,
                    Floor2Component,
                    Floor3Component,
                    HighlightDirective,

    ],

    providers: [ appRoutingProviders],

    bootstrap:    [ AppComponent ]
})
export class AppModule { }
