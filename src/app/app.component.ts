import { Component,ViewChild } from '@angular/core';
import {ApiService} from './services/api.service';
import jwtDecode from 'jwt-decode';
import { Router,NavigationEnd  } from '@angular/router';
import { delay,filter } from 'rxjs/operators';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { User } from 'src/app/users/user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  title = 'cvtheque-front';
  showMenu: boolean = true; 
  username = '';
  job= '';
  users:User[]=[] ;

  public notLog: boolean = true;
  constructor(private observer: BreakpointObserver,private apiService: ApiService,private router: Router) {
    router.events.pipe(filter(event => event instanceof NavigationEnd))
          .subscribe((event: any) => 
           {
             if(event.url === '/login'){
              this.notLog = false
             }
             else {
               this.notLog= true;
             }
             
           });
  }

  ngOnInit() {
    this.apiService.jwtUserToken.subscribe(token => {
      if (token) {
        const decoded: any = jwtDecode(token);
        this.username = decoded.username;
      }
      if (this.username) {
        this.showMenu = false;
      } else {
        this.showMenu = true;
      }
    });
    
    
  }
 /* ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1), untilDestroyed(this))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      }); 

    this.router.events
      .pipe(
        untilDestroyed(this),
        filter((e) => e instanceof NavigationEnd)
      )
      .subscribe(() => {
        if (this.sidenav.mode === 'over') {
          this.sidenav.close();
        }
      });
  } */

  logout() {
    this.username = '';
    this.username = this.apiService.logout();
  }



}
