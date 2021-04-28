import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppHeader } from "./header/header.component";

const Components = [
    AppHeader
];

@NgModule({
    declarations: [
        ...Components
    ],
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        RouterModule,
        FontAwesomeModule
    ],
    exports: [
        ...Components
    ]
})
export class CustomComponents { }