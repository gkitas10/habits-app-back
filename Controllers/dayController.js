const Day = require('../models/day');

exports.saveDay = async (req, res) => {
    const { body } = req;
    const userid = req.user.sub;
    const day = new Day({
        ...body,
        userid
    });

    try {
        const dayDB = await day.save();
        res.json(dayDB)

    } catch (error) {
        console.log(error)
        res.json({
            error
        })
    }
}
 
exports.getDay =  async (req, res) => {
    console.log(req.user.sub)
    try {
        const dayDB = await Day.findOne({
            date:req.query.date,
            userid:req.user.sub
        })

        res.status(200).json({
            dayDB
        })
    }
     catch (error) {
        console.log(error) 
        res.json({
            error:error
        })
    }
}  

exports.getDaysOfTheMonth = async (req, res) => {
    
    const reg = new RegExp('^' +  req.query.currmonthandyear)
    try {
        const daysDB = await Day.find({
            date:reg,
            userid:req.user.sub
        })

        res.status(200).json({
            daysDB
        })

    } catch (error) {
        console.log(error);
    }
}

exports.updateDay = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    const query = {
        tasklist:{
            _id:body._id,
            listname:body.listname
        },
        taskscompleted:[]
    }
    

    console.log(body);
    try {
        const updatedDay = await Day.findOneAndUpdate({ _id: id }, query, { new:true });

        res.json({
            updatedDay
        })
        
    } catch (error) {
        console.log(error)
        res.json({
            error
        })
    }
}

exports.updateDayTasks = async (req, res) => {
    const { id } = req.params;
    const { taskscompleted, performance } = req.body;
    console.log(performance);
    try {
        const updatedDay = await Day.findOneAndUpdate({ _id: id }, { taskscompleted, performance }, { new:true });  
        res.json({
            updatedDay
        })  
    } catch (error) {
        console.log(error);
        res.json({
            error
        })
    }
}

exports.deleteDay = async (req, res) => {
   
    const { id } = req.params;
    console.log('delete control', id);
    try {
        const deletedDayDB = await Day.findOneAndRemove({
            _id:id
        })

        res.json({
            msg:'Day information deleted',
            deletedDayDB
        })

    } catch (error) {
        console.log(error)
        res.json({
            error
        })
    }
}