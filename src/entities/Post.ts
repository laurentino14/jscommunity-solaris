import {uuid} from "uuidv4";
export class Post {
  public id: string;
  public name: string;
  public stack: string;
  public author: string;
  public content: string;
  constructor(props: Omit<Post, "id">, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }
}
