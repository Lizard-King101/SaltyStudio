import { Component } from '@angular/core';
import { MenuController } from './_services/menu-controller';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'SaltyStudio';
    constructor(public menuController: MenuController) {

    }

}
