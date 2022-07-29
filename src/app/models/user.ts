export class User {
  id?: number;
  userName?: string;
  firstName?: string;
  lastName?: string;
  password?: string
  access?: UserAccess
}

export interface UserAccess {
  permissions: string[];
  abilities: string[]
}
