import * as mongoose from 'mongoose';
import task1Model from '../models/task1';
import { CustomLogger } from '../config/Logger'


export class task1Dao {
    private task1 = task1Model;
    constructor() { }
public GpCreate(task1Data, callback){
new CustomLogger().showLogger('info', 'Enter into task1Dao.ts: GpCreate')
let temp = new task1Model(task1Data);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from task1Dao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}


}