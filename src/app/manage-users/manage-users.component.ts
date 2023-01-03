import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Actor } from '../core/models/actor';
import { Pageable } from '../core/models/pageable';
import { ActorUpdateRequest } from '../core/requests/actor-update-request';
import { ActorService } from '../core/services/actor.service';
import { CustomSnackbarService } from '../core/services/custom-snackbar.service';
import { UserService } from '../core/services/user.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss']
})
export class ManageUsersComponent implements OnInit {
  pageable: Pageable = {page: 0, amount:5};
  amountOfResults!: number;
  previousSearchterm: String = "";
  users: Actor[] = [];

  constructor(
    private actorService: ActorService,
    private customSnackbarService: CustomSnackbarService,
  ) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  searchUser(searchterm: any) {
    searchterm = searchterm.trim();
  }

  onPagingChange(pageSettings: any) {
    this.pageable = pageSettings;
    if (!this.previousSearchterm) {
      // this.getAllProducts();
    } else {
      // this.getAllProductsBySearchterm(this.previousSearchterm)
    }
  }

  getAllUsers() {
    this.actorService.getAll(this.pageable.page, this.pageable.amount)
    .subscribe({
      next: (response: HttpResponse<any>) => {
        let body = JSON.parse(JSON.stringify(response));
        this.users = body.content;
        this.amountOfResults = body.totalElements;
      },
      error: (e) => {}
    })
  }

  onEditAttempt(updatedActor: ActorUpdateRequest) {
    this.actorService.update(updatedActor)
    .subscribe({
      next: (response: HttpResponse<any>) => {
        let body = JSON.parse(JSON.stringify(response));
        this.customSnackbarService.open(
          `You edited ${updatedActor.username}`,
        )
      },
      error: (e) => {}
    })
  }
}
