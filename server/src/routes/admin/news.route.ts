import { Router } from "express";
import { Container } from "typedi";
import AdminController from "@src/controllers/admin.controller";
import { validateBody } from "@src/middlewares/validateDto";
import { PutNewsRequestDto } from "@src/dto/admin.dto";

const router = Router();
const adminController = Container.get(AdminController);

router.post(
  "/",
  validateBody(PutNewsRequestDto),
  adminController.putNewsController
);

router.get("/", adminController.getNewsController);

export default router;
