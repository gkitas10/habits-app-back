const express = require( 'express' );
const router = express.Router();
const { jwtCheck } = require('../auth/check-jwt');
const taskListController = require('../Controllers/taskListController');

router.post('/create-task-list', taskListController.saveTaskList );
router.put('/update-tasklist/:id', jwtCheck, taskListController.updateTaskList);
router.get('/get-task-lists', jwtCheck, taskListController.getTaskLists);
router.get('/get-tasklists-for-check', jwtCheck, taskListController.getTaskListsForCheck);
router.get('/get-tasklist/:id', jwtCheck, taskListController.getTaskList);


module.exports = router;