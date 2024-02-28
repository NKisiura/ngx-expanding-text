import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxExpandingTextModule } from 'ngx-expanding-text';
import { KebabToNormalPipe } from './shared/pipes/kebab-to-normal.pipe';

@NgModule({
    declarations: [AppComponent, KebabToNormalPipe],
    imports: [BrowserModule, AppRoutingModule, NgxExpandingTextModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
