import {Component, Input} from '@angular/core';
import {UserService} from "./app.user.service";

@Component({
    selector: 'app-title',
    template: `
        <h1 highlight="red">{{title}} - {{subtitle}}</h1>
        <p *ngIf="user">Hello, {{user}}!</p>
    `
})
export class ApplicationTitle {

    private title: string;
    private user: string;

    @Input('subtitle') subtitle:string;

    constructor(private userService: UserService){

        this.title = 'Hello Angular';
        this.user = this.userService.getName();

    }
}
