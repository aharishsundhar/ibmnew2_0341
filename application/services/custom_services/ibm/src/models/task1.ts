
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const task1Schema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name: String
})

const task1Model = mongoose.model('task1', task1Schema, 'task1');
export default task1Model;
