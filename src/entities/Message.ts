import {uuid} from "uuidv4";
export class Message {
  public id: string;
  public to: string;
  public author: string;
  public message: string;
  constructor(props: Omit<Message, "id">, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }
}
