import { NgModule }      from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { routing, appRoutingProviders }  from './app.routing';

import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {logincomponent} from "./login.component";
import {searchcomponent} from "./search.component";
import {floorsearchcomponent} from "./floorsearch.component";
import {datesearchcomponent} from "./datesearch.component";
import {techcomponent} from "./tech.component";
@NgModule({
    imports:      [ BrowserModule,
                    FormsModule,
                    routing ],
    declarations: [ AppComponent,
                    logincomponent,
                    searchcomponent,
                    floorsearchcomponent,
                    datesearchcomponent,
                    techcomponent],

    providers: [ appRoutingProviders],

    bootstrap:    [ AppComponent ]
})
export class AppModule { }
