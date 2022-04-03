import { Component, OnInit } from '@angular/core';
import { AccountsService } from './accounts.services';
import { LoggingService } from './logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [LoggingService,AccountsService] //services are provided at app-module level
})
export class AppComponent implements OnInit{

  accounts: {name: string, status: string}[] = [];
  
  constructor(private accountsService: AccountsService) {    
    // console.log("constructor :: Component invoked ========>>>   app.component.ts");
  }

  ngOnInit(): void {
    // console.log("ngOnInit :: Component invoked ========>>>   app.component.ts");
    this.accounts = this.accountsService.accounts;
  }
}