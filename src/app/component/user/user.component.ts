import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
 user: any;
  id:number=0;

  constructor(private route: ActivatedRoute, private userService : UsersService) {
   
   }

  ngOnInit(): void {

    this.id =(this.route.snapshot.params['id'])

    this.userService.getJsonUser(this.id).subscribe(data => this.user = [data])
  }

}
