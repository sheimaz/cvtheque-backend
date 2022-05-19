import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { User } from '../user';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:User[]=[] ;

  constructor(private apiService: ApiService) {
    
    
}
 
  ngOnInit(): void {
    this.apiService.getAllusers().subscribe((data)=> {
      this.users=data;
    });

  }
  delete(id: number) {
    if (confirm('Do you want to remove the user?')) {
      this.apiService.deleteuser(id).subscribe(res => {
        // @ts-ignore
        if (res.success) {
          this.apiService.getAllusers().subscribe((data)=> {
            this.users=data;
          })

        }
      });
    }
  }

}
