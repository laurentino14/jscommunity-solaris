import {CreateUserUseCase} from "./CreateUserUseCase";
import {MongoUsersRepository} from "./../../repositories/increments/MongoUsersRepository";
import {CreateUserController} from "./CreateUserController";
const mongoUsersRepository = new MongoUsersRepository();

const createUserUseCase = new CreateUserUseCase(mongoUsersRepository);

const createUserController = new CreateUserController(createUserUseCase);

export {createUserController};
