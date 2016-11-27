import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {logincomponent} from "./login.component";
import {searchcomponent} from "./search.component";
import {floorsearchcomponent} from "./floorsearch.component";
import {datesearchcomponent} from "./datesearch.component";
import {techcomponent} from "./tech.component";

import { FloorseachComponent } from './floor/floorseach.component';
import { Floor1Component } from './floor/floor1.component';
import { Floor2Component } from './floor/floor2.component';
import { Floor3Component } from './floor/floor3.component';

import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { FormComponent }  from './form/form.component';

const appRoutes: Routes = [
    { path: '', component: logincomponent },

    { path: 'floorseach', component: FloorseachComponent },
    { path: 'login', component: logincomponent },
    { path: 'search', component: searchcomponent },
    { path: 'search/floor', component: floorsearchcomponent},
    { path: 'search/date', component: datesearchcomponent},
    { path: 'tech', component: techcomponent},
    { path: 'floorseach/floor1', component: Floor1Component },
    { path: 'floorseach/floor2', component: Floor2Component },
    { path: 'floorseach/floor3', component: Floor3Component },
    { path: 'book', component: Page2Component },
    { path: 'book/form', component: Page1Component },
    { path: 'book/form/commitform', component: FormComponent },
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
