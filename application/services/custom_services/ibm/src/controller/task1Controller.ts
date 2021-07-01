import { Request, Response } from 'express';
import { task1Service } from '../service/task1Service';
import { CustomLogger } from '../config/Logger'
let task1 = new task1Service();

export class task1Controller {
    
    constructor() { }
    
    public GpCreate(req: Request, res: Response) {
task1.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into task1Controller.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from task1Controller.ts: GpCreate');
    })}


}