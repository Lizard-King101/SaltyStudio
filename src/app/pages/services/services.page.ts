import { Component } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

@Component({
    templateUrl: 'services.page.html',
    styleUrls: ['services.page.scss']
})
export class ServicesPage {
    constructor(
        private title: Title,
        private meta: Meta
    ) {
        this.title.setTitle('Services');
        this.meta.addTags([
            {name: 'keywords', content: 'Angular, Universal, Example'}
        ])
    }
}