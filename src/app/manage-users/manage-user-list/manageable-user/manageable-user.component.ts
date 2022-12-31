import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Actor } from 'src/app/core/models/actor';
import { ActorUpdateRequest } from 'src/app/core/requests/actor-update-request';

@Component({
  selector: 'app-manageable-user',
  templateUrl: './manageable-user.component.html',
  styleUrls: ['./manageable-user.component.scss']
})
export class ManageableUserComponent implements OnInit {
  @Input() actor!: Actor;
  isEditing: boolean = false;
  editForm!: FormGroup;
  @Output() editAttempt = new EventEmitter<ActorUpdateRequest>();

  constructor() { }

  ngOnInit(): void {
    this.editForm = new FormGroup({
      "username": new FormControl(this.actor.username, [
        Validators.required
      ]),
      "firstName": new FormControl(this.actor.firstName, [
        Validators.required
      ]),
      "lastName": new FormControl(this.actor.lastName, [
        Validators.required,
      ]),
      "role": new FormControl(this.actor.role?.roleId, [
        Validators.required
      ])
    });
  }

  onEditAttempt() {
    if (!this.isEditing) {
      this.isEditing = !this.isEditing;
      return
    }

    let updatedActor: ActorUpdateRequest = {
      userId: this.actor.actorId!,
      username: this.editForm.value['username'],
      firstName: this.editForm.value['firstName'],
      lastName: this.editForm.value['lastName'],
      roleId: this.editForm.value['role'],
    }

    this.editAttempt.emit(updatedActor);

    this.isEditing = !this.isEditing;
  }

}
