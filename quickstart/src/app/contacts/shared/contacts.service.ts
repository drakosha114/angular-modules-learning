import { Injectable } from '@angular/core';

import { Contact } from './contact';
import { CONTACTS } from './moch.contacts.backend';

const FETCH_LATENCY = 500;

@Injectable()
export class ContactsService {

    public contacts: Contact[];

    constructor(){
      this.contacts = CONTACTS
    }

    getContacts():Promise<Contact[]>{
      return new Promise(resolve => {
        setTimeout(() => { resolve(CONTACTS); }, FETCH_LATENCY);
      });
    }

    getContact(id: string | number){
        return this.getContacts().then((contacts: Contact[])=>{
            return contacts.find((item)=>{
                 return  item.id === id;
            });
        });
    }

}
