import { AfterViewInit, Component, OnInit } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
// import Pageable from "pageable";
const Pageable = require('pageable');

@Component({
    selector: 'page-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss']
})
export class HomePage implements AfterViewInit{
    pages: any;
    constructor(
        private title: Title,
        private meta: Meta
    ) {
        this.title.setTitle('Home')
        this.meta.addTags([
            {name: 'keywords', content: 'Angular, Universal, Example'}
        ])
    }

    ngAfterViewInit() {
        
    }
}