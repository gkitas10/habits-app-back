const mongoose=require('mongoose');

let Schema = mongoose.Schema;

let taskSchema = new Schema({
    taskname:{ type:String, required:'Taskname is required' },
    userid:{ type: String, required: [true, 'userid is required'] }
});

// module.exports = mongoose.model('Task', taskSchema);