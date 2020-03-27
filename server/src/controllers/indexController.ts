import { Request, Response}  from 'express';
import db from '../routes/connection';

class IndexController{
    
    public async index (req: Request, res: Response)
    {
        db.query("DESCRIBE games");
        res.json({games: 'mortal combat'});
    }
}

export const indexController = new IndexController();