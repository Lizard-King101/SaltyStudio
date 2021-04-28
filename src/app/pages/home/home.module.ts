import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
    {
        path: '',
        component: HomePage
    }
];

@NgModule({
    declarations: [
        HomePage
    ],
    entryComponents: [
        HomePage
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class HomePageModule { }
