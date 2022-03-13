import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  serverId: number = 10;
  serverStatus: string = 'offline';
  timeStamp:any;

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    // this.timeStamp = new Date();
   }

  ngOnInit(): void {
    this.timeStamp = new Date();
  }

  getServerStatus(){
    return this.serverStatus;
  }

  getBGColor(){
    // return this.serverStatus === 'online' ? 'green' : 'orange';
    return this.serverStatus === 'online' ? '#4AE747' : '#F04F59';
  }

}
