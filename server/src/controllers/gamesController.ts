import { Request, Response, json}  from 'express';
import db from '../routes/connection';

class GamesController{
    
    public async list  (req:Request, res: Response) :Promise<void>
    {
        await db.query('SELECT * FROM games', ( err, result, fields)=>{
            if (err){
                console.log(err);
            }
            if (result.length > 0 ){
                res.json(result);
            }else{
                res.status(404).json({mensagge: "not do results"});
            } 
        });
    }
    public async getgame (req:Request, res: Response) : Promise<void>
    {
        await db.query(`select * from games where id = ${req.params.id}`, (err, result, fields)=>{
            if (err){
                console.log(err);
            }
            else{
                if (result.length > 0){
                    res.json(result);
                }
                else{
                    res.status(404).json({mensagge: "the games doesn't exists"});
                }
            }
        });
    }

    public async create (req: Request, res: Response) : Promise<void>{
        if (req.body.title && req.body.description && req.body.image){
            await db.query('insert into games set ?', [req.body]);
            res.json({test: "game saved"});
        }
        else{
            res.json({error: "no es posible guardar"});
        }
    }

    public async delete (req: Request, res: Response) : Promise<void>{
        await db.query("DELETE FROM games WHERE id = ?",[req.params.id],(err, result)=>{
            if (err){
                console.log(err);
            }else{
                res.json({"menssage": `The games (${req.params.id}) deleted`});
            }
        });
    }
    public async update (req: Request, res: Response): Promise<void>{
        await db.query("UPDATE games SET ? WHERE id = ?", [req.body, req.params.id], (err, result)=>{
            if (err){
                console.log(err);
            }else{
                res.json({"message": "the games was updated"});
            }
        });
    }
}

export const gamesController = new GamesController();