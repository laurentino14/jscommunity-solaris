import {Router} from "express";
import {createUserController} from "../useCases/CreateUser";

export const router = Router();

router.post("/newuser", (req, res) => {
  createUserController.handle(req, res);
});
