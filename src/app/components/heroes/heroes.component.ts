import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private mService: MessageService) { }

  ngOnInit() {
    this.getData();
    // this.getOnePlayer();
  }


  getData() {
    this.mService.getPlayers().subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    })
  }

  getOnePlayer() {
    this.mService.getOnePlayer().subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    })
  }
}
