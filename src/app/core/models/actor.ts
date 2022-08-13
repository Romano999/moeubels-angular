import { Role } from "./role";

export interface Actor {
  actorId?: string,
  username: string,
  password?: string,
  firstName: string,
  lastName: string,
  roles?: Role,
  createdAt?: Date,
  modifiedAt?: Date
}
