import { Component } from "@angular/core";
import { MenuController } from "src/app/_services/menu-controller";

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.scss']
})
export class AppHeader {
    isCollapsed: boolean = true;
    
    constructor(
        public menuController: MenuController
    ) {

    }
}