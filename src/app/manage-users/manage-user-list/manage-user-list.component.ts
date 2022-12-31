import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Actor } from 'src/app/core/models/actor';
import { ActorUpdateRequest } from 'src/app/core/requests/actor-update-request';

@Component({
  selector: 'app-manage-user-list',
  templateUrl: './manage-user-list.component.html',
  styleUrls: ['./manage-user-list.component.scss']
})
export class ManageUserListComponent {
  @Input() actors: Array<Actor> = [];
  @Output() editAttempt = new EventEmitter<ActorUpdateRequest>();

  constructor() { }

  onEditAttempt(updatedActor: ActorUpdateRequest) {
    this.editAttempt.emit(updatedActor);
  }

}
