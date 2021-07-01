import { Request, Response } from 'express';
import {task1Dao} from '../dao/task1Dao';
import { CustomLogger } from '../config/Logger'
let task1 = new task1Dao();

export class task1Service {
    
    constructor() { }
    
    public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into task1Service.ts: GpCreate')
     const  task1Data = req.body;
     task1.GpCreate(task1Data,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from task1Service.ts: GpCreate')
         callback(response);
         });
    }


}