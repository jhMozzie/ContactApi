import { Router } from "express";
import userRoutes from "@routes/user.routes";
const router = Router();

export default () =>{
    router.get("/health", (req, res) => {
        res.send("Api is healthy")
    })

    router.use("/users", userRoutes)

    return router
}