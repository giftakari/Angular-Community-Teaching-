import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
  }
sendMessage(message: any){
this.notificationService.sendNotification(message.value)
}
}
