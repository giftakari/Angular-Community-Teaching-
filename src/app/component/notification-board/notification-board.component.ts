import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-notification-board',
  templateUrl: './notification-board.component.html',
  styleUrls: ['./notification-board.component.scss']
})
export class NotificationBoardComponent implements OnInit {

  notificationMessage: string =""

  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {

    this.notificationService.notification.subscribe(d => {
      this.notificationMessage= d

    })
  }
}
