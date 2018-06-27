export class User {
  userName: string;
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  UserType: UserType;
  imageURL?: string;
}

export enum UserType {
  Admin, User, Unregister, Author
}
