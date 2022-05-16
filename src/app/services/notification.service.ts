import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

//public notification = new Subject<string>()
public notification = new BehaviorSubject<string>("Greetkings from Mr Akaris") 
  constructor() { }

  sendNotification(data: any){
    this.notification.next(data)
  }

  
}
