import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { empty } from 'rxjs';
import { AccountsService } from '../accounts.services';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  //providers:[LoggingService]
})
export class AccountComponent implements OnInit {

  @Input() account: {name: string, status: string} = {name:'navneet', status:'los'};
  @Input() id: number = 0;

  constructor(private loggingService: LoggingService,
              private accountsService: AccountsService ) {
  }

  ngOnInit(): void {
  }

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
    // this.loggingService.logStatusChange(status);
    this.accountsService.statusUpdated.emit(status); // emitting an event that has been set up in service 
  }
}
