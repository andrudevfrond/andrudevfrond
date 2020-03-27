"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gamesController_1 = require("../controllers/gamesController");
class GamesRouter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', gamesController_1.gamesController.list);
        this.router.get('/:id', gamesController_1.gamesController.getgame);
        this.router.post('/', gamesController_1.gamesController.create);
        this.router.delete('/:id', gamesController_1.gamesController.delete);
        this.router.put('/:id', gamesController_1.gamesController.update);
    }
}
const gamerRouter = new GamesRouter();
exports.default = gamerRouter.router;
