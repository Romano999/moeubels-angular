import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/core/models/actor';
import { ActorService } from 'src/app/core/services/actor.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent implements OnInit {
  actor: Actor = {
    username: '',
    firstName: '',
    lastName: ''
  };

  constructor(
    private userService: UserService,
    private actorService: ActorService
  ) { }

  ngOnInit(): void {
    const userId = this.userService.getId().toString()
    this.actorService.get(userId)
    .subscribe(actor => this.actor = actor)
  }

}
