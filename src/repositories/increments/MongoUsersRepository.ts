import {db} from "./../../providers/prisma/index";
import {User} from "../../entities/User";
import {IUsersRepository} from "../IUsersRepository";

export class MongoUsersRepository implements IUsersRepository {
  async findByEmail(email: string): Promise<User> {
    const user = await db.users.findUnique({where: {email}});

    return user;
  }

  async save(user: User): Promise<void> {
    await db.users.create({
      data: {
        id: user.id,
        email: user.email,
        name: user.name,
        username: user.username,
        password: user.password,
        bio: user.bio,
        token: user.token,
      },
    });
  }
}
