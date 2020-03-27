"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../routes/connection"));
class GamesController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield connection_1.default.query('SELECT * FROM games', (err, result, fields) => {
                if (err) {
                    console.log(err);
                }
                if (result.length > 0) {
                    res.json(result);
                }
                else {
                    res.status(404).json({ mensagge: "not do results" });
                }
            });
        });
    }
    getgame(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield connection_1.default.query(`select * from games where id = ${req.params.id}`, (err, result, fields) => {
                if (err) {
                    console.log(err);
                }
                else {
                    if (result.length > 0) {
                        res.json(result);
                    }
                    else {
                        res.status(404).json({ mensagge: "the games doesn't exists" });
                    }
                }
            });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (req.body.title && req.body.description && req.body.image) {
                yield connection_1.default.query('insert into games set ?', [req.body]);
                res.json({ test: "game saved" });
            }
            else {
                res.json({ error: "no es posible guardar" });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield connection_1.default.query("DELETE FROM games WHERE id = ?", [req.params.id], (err, result) => {
                if (err) {
                    console.log(err);
                }
                else {
                    res.json({ "menssage": `The games (${req.params.id}) deleted` });
                }
            });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield connection_1.default.query("UPDATE games SET ? WHERE id = ?", [req.body, req.params.id], (err, result) => {
                if (err) {
                    console.log(err);
                }
                else {
                    res.json({ "message": "the games was updated" });
                }
            });
        });
    }
}
exports.gamesController = new GamesController();
