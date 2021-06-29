import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { BodyComponent } from './shared/body/body.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavBarMenuComponent } from './shared/nav-bar-menu/nav-bar-menu.component';
import { TravisComponent } from './travis/travis.component';
import { CodepipelineComponent } from './codepipeline/codepipeline.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    NavBarMenuComponent,
    TravisComponent,
    CodepipelineComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
