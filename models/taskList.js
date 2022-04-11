const mongoose=require('mongoose');


let Schema=mongoose.Schema;

let taskSchema=new Schema({
    name:{ type:String, required: [ true, 'Name is required' ]},
    valuepercentage:{ type:Number, min:[0, 'valuepercentage must be equal or greater than 0'], max:[100, 'valuepercentage must be smaller than 101'] , required:[ true, 'Value is required' ]},
    //userid:{ type: String, required: [true, 'Userid is required'] }
});

let tasklistSchema=new Schema({
    listname:{ type: String, required: [ true, 'listname is required']},
    //tasks:{ type:[ { name: { type:String, required:[ true, 'taskname is required' ] }, valuepercentage: {type:Number, required:[ true, 'valuepercentage is required' ]}} ] , required: [ true, 'Tasks are required' ]},
    tasks:{ type: [ taskSchema ], required: [ true, 'Tasks are required' ]},
    userid:{ type: String, required: [true, 'Userid is required'] },
    created:{ type:String, required:[ true, 'Date is required' ]}, 
});


module.exports = mongoose.model('Tasklist', tasklistSchema);