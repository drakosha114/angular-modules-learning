import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {ContactsModule} from "./contacts/contacts.module";

import { AppComponent }  from './app.component';
import { ApplicationTitle } from "./app.title.component";

import { HiglightDirective } from "./app.higlight.directive";

import {UserService} from "./app.user.service";


@NgModule({
  imports:      [ BrowserModule, ContactsModule],
  declarations: [ AppComponent, ApplicationTitle, HiglightDirective ],
  bootstrap:    [ AppComponent ],
  providers:    [ UserService ]
})
export class AppModule { }
