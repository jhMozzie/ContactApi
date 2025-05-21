import { UserController } from "@controllers/UserController";
import { Router } from "express";

const router = Router();
const controller = new UserController()

// Base path: /api/v1/users
router.route("/")
    .post(controller.create)
    .get(controller.getAll)

router.route("/:id")
    .get(controller.getOne)
    .put(controller.update)
    .delete(controller.delete)

export default router;