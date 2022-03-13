import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',  // selector as an attribute
  // selector: '.app-servers',   // selector as a class
  selector: 'app-servers',       // selector as an element
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No Server created';
  serverName: string ='';
  serverCreated: boolean = false;
  servers: any = ['TestServer', 'TestServer 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated=true;
    this.servers.push(this.serverName);
    this.serverCreationStatus='Server was created, Name is: ' + this.serverName;
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
