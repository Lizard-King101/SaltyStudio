import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomComponents } from './_components/components.module';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { MenuController } from './_services/menu-controller';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    NgbModule,
    CustomComponents,
    FontAwesomeModule
  ],
  providers: [
    MenuController
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
    constructor(library: FaIconLibrary) {
        library.addIconPacks(fas);
    }
}
