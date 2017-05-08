import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

    public name: string;

    constructor () {
        this.name = 'Johan Doe';
    }

    public getName():string {
      return this.name;
    }
}
