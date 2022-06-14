import {Request, Response} from "express";
import {CreateUserUseCase} from "./CreateUserUseCase";

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const {name, email, username, password} = request.body;

      await this.createUserUseCase.execute({
        name,
        email,
        username,
        password,
      });
      return response.status(201).send();
    } catch (err) {
      return response
        .status(400)
        .send({message: err.message || "Unexpected error"});
    }
  }
}
