export class User {
  id?: number;
  userName?: string;
  firstName?: string;
  lastName?: string;
  password?: string // It is not good idea to save any password to locale storage, but in this application we save password just for test:)
  access?: UserAccess
}

export interface UserAccess {
  permissions: string[];
  abilities: string[]
}
