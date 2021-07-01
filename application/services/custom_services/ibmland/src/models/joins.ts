
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const joinsSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   products: String
})

const joinsModel = mongoose.model('joins', joinsSchema, 'joins');
export default joinsModel;
