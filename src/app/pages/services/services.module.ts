import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { CustomComponents } from "src/app/_components/components.module";
import { ServicesPage } from "./services.page";

const routes: Routes = [
    {
        path: '',
        component: ServicesPage
    }
];

@NgModule({
    declarations: [
        ServicesPage
    ],
    imports: [
        CommonModule,
        FormsModule,
        CustomComponents,
        RouterModule.forChild(routes)
    ]
})
export class ServicesPageModule { }