import db from "./models/index.mjs";

import initGamesController from "./controllers/games.mjs";
import initUserController from "./controllers/userAuth.mjs";

export default function bindRoutes(app) {
  const GamesController = initGamesController(db);
  const UsersController = initUserController(db);
  // main page
  app.get("/", UsersController.registration);
  app.post("/register", UsersController.createUser);
  // app.get("/login", UsersController.loginPage);
  // create a new game
  app.post("/games", GamesController.create);
  // update a game with new cards
  app.put("/games/:id/deal", GamesController.deal);
}
