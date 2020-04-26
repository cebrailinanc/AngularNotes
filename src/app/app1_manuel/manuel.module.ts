import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ManuelTsFileComponent } from './manuel.component';

//modül import edilir.
@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        ManuelTsFileComponent
    ],
    bootstrap: [
        ManuelTsFileComponent

    ]
})
export class ManuelTsFileModule {

}