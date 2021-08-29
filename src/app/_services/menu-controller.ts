import { Injectable } from "@angular/core";

@Injectable()
export class MenuController {
    public menuIsOpen: boolean = false;
    public menuItems: MenuItem[] = [
        {
            url: '/home',
            label: 'Home'
        },
        {
            url: '/services',
            label: 'Services'
        }
    ]
    
    constructor() {

    }

    toggleMenu() {
        this.menuIsOpen = !this.menuIsOpen;
    }
}

export interface MenuItem {
    sideMenuOnly?: boolean;
    icon?: string;
    url: string;
    label: string;
}