import { Request, Response } from 'express';
import {joinsDao} from '../dao/joinsDao';
import { CustomLogger } from '../config/Logger'
let joins = new joinsDao();

export class joinsService {
    
    constructor() { }
    
    public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into joinsService.ts: GpCreate')
     const  joinsData = req.body;
     joins.GpCreate(joinsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from joinsService.ts: GpCreate')
         callback(response);
         });
    }


}