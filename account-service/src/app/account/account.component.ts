import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { empty } from 'rxjs';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  @Input() account: {name: string, status: string} = {name:'navneet', status:'los'};
  @Input() id: number = 0;
  @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor() {
    console.log("constructor :: Component invoked ========>>>   account.component.ts");
   }

  ngOnInit(): void {
      console.log("ngOnInit :: Component invoked ========>>>   account.component.ts");
  }

  onSetTo(status: string) {
    this.statusChanged.emit({id: this.id, newStatus: status});
    console.log('A server status changed, new status: ' + status);
  }
}
