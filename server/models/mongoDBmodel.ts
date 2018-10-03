import * as mongoose from 'mongoose';

export const RegiInfo = mongoose.model('regiInfo', new mongoose.Schema({
  regiInfo: {type: String}
}));
