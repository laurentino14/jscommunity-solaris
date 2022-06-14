import {ICreateUserRequestDTO} from "./ICreateUserDTO";
import {IUsersRepository} from "./../../repositories/IUsersRepository";
import {User} from "../../entities/User";

export class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}
  async execute(data: ICreateUserRequestDTO) {
    const userAlreadyExist = await this.usersRepository.findByEmail(data.email);

    if (userAlreadyExist) {
      throw new Error("User already exist");
    }

    const user = new User(data);

    await this.usersRepository.save(user);
  }
}
