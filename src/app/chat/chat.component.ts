import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from '../service/chat.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  @Input() user;
    messages = [];
  connection;
  message;


  constructor(
    private chatService:ChatService
  ) {}

    sendMessage(){
    this.chatService.sendMessage(this.user, this.message);
    this.message = '';
  }


  ngOnInit() {
    this.connection = this.chatService.getMessages().subscribe(message => {
      this.messages.push(message);
    })

  }

    ngOnDestroy() {
    this.connection.unsubscribe();
  }


}
