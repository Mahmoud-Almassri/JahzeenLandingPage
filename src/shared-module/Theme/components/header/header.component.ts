import { Component, OnInit } from '@angular/core';
import { AuthorizeService } from 'src/app/shared/services/authorize.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class AppHeaderComponent implements OnInit {
  public isAuthorized: boolean;
  public isEmployee: boolean;
  public loggedInUserRoles: string[];
  constructor(private authService: AuthorizeService) { }

  ngOnInit(): void {
    this.isAuthorized = this.authService.isAuthenticated();
    if (this.isAuthorized) {
      this.loggedInUserRoles = this.authService.getLoggedInUsersRole()
      this.isEmployee = this.loggedInUserRoles.find(x => x == 'Employee') ? true : false;
    }
    console.log();

  }
  public logout() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "you want to log out from your account!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes !',
      cancelButtonText: 'No !',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
          this.authService.logout();
         this.isAuthorized = this.authService.isAuthenticated();
      }
    })
  }

}
