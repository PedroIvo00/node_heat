import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { ensuredAuthenticated } from "./middleware/ensuredAuthenticated";
import { CreateMessageController } from "./controllers/CreateMessageController";
import { GetLast3MessagesController } from "./controllers/GetLast3MessagesController";
import { ProfileUserController } from "./controllers/ProfileUserController";

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle);

router.post("/messages", ensuredAuthenticated, new CreateMessageController().handle);

router.get("/messages/last3", new GetLast3MessagesController().handle);

router.get("/profile", ensuredAuthenticated, new ProfileUserController().handle);


export { router }