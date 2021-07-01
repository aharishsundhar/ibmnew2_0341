import { Request, Response } from 'express';
import { joinsService } from '../service/joinsService';
import { CustomLogger } from '../config/Logger'
let joins = new joinsService();

export class joinsController {
    
    constructor() { }
    
    public GpCreate(req: Request, res: Response) {
joins.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into joinsController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from joinsController.ts: GpCreate');
    })}


}