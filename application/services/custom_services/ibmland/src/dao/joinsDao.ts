import * as mongoose from 'mongoose';
import joinsModel from '../models/joins';
import { CustomLogger } from '../config/Logger'


export class joinsDao {
    private joins = joinsModel;
    constructor() { }
public GpCreate(joinsData, callback){
new CustomLogger().showLogger('info', 'Enter into joinsDao.ts: GpCreate')
let temp = new joinsModel(joinsData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from joinsDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}


}