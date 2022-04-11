const mongoose=require('mongoose');

let Schema=mongoose.Schema;

let daySchema = new Schema({
    date:{ type: String, required: [true, 'Date is required']},
    //tasklist:{ type:Schema.Types.ObjectId, ref:'Tasklist' },
    tasklist:{ type:{ _id: { type:Schema.Types.ObjectId, ref:'Tasklist' } , listname: { type:String } } },
    taskscompleted: { type: [ { taskname: { type: String }, completed: { type: String }, taskid:{ type: mongoose.ObjectId } } ] },
    performance:{ type: Number },
    userid:{ type: String, required: [true, 'userid is required'] }
});

module.exports = mongoose.model('Day', daySchema);