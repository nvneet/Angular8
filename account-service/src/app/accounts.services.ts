import {EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable() // to enable injecting LoggingService in AccountService
export class AccountsService {

    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

      // create an event and instead of trigger this in updateStatus method, we will do in AccountComponent
      statusUpdated = new EventEmitter<string>();


      constructor(private loggingService: LoggingService){}

      addAccount (name:string, status:string) {
        this.accounts.push({name: name,status: status});
      }

      updateStatus (id:number, status:string) {
        this.accounts[id].status = status;
        this.loggingService.logStatusChange(status);
      }

}