const Tasklist = require('../models/taskList');

exports.saveTaskList = async ( req, res ) => {
    const { body } = req;

    const tasklist = new Tasklist(
        {...body
           
        });

    try {
        const tasklistDB = await tasklist.save();

        res.status(200).json({
            ok:true,
            data:tasklistDB
        })
        
    } catch (error) {
        if (error.name === "ValidationError") {
            //Building a validation msg obj
            let errors = {}
            
            Object.keys(error.errors).forEach((key) => {
                errors[key] = error.errors[key].message;

              });

            return res.status(500).json({
                error,
                errors
            })
        }
        
        res.status(500).json(error);
    }
}

exports.updateTaskList = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    console.log(body)
    console.log(id)
    
    try {
        const updatedTasklist = await Tasklist.findOneAndUpdate({ _id: id, userid:req.user.sub }, body, { new:true });
        res.json(updatedTasklist)
    } catch (error) {
        res.status(500).json({
            ok:false,
            error
        })

        console.log(error);
    }
}

exports.getTaskLists = async (req, res) => {
    
    try {
        const tasklistsDB = await Tasklist.find({
            userid:req.user.sub
        });

        res.json({
            tasklistsDB
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok:false,
            error
        });
    }
}

exports.getTaskListsForCheck = async (req, res) => {
    const { listname } = req.query;
    try {
        const tasklistsDB = await Tasklist.find({
            listname,
            userid:req.user.sub
        });

        res.json(
            tasklistsDB
        )

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok:false,
            error
        });
    }
}

exports.getTaskList = async (req, res) => {
    const { id } = req.params;
    try{

        const tasklistDB = await Tasklist.findOne({
            _id:id,
            userid:req.user.sub
        })

        res.json({
            tasklistDB
        })

    }catch (error) {
        console.log(error);
        res.json({
            error
        })
    }
}

