import {uuid} from "uuidv4";
export class User {
  public readonly id: string;
  public name: string;
  public email: string;
  public username: string;
  public bio: string;
  public token: string;
  public password: string;
  constructor(
    props: Omit<User, "id" | "token" | "bio">,
    id?: string,
    token?: string,
    bio?: string,
  ) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }
}
