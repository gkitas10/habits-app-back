const express = require( 'express' );
const router = express.Router();
const { jwtCheck } = require('../auth/check-jwt');
const dayController = require('../Controllers/dayController');

router.get('/get-day', jwtCheck, dayController.getDay);
router.get('/get-days', jwtCheck, dayController.getDaysOfTheMonth);
router.post('/save-day', jwtCheck, dayController.saveDay);
router.put('/update-day/:id', jwtCheck, dayController.updateDay);
router.put('/update-day-tasks/:id', jwtCheck, dayController.updateDayTasks);
router.delete('/delete-day/:id', jwtCheck, dayController.deleteDay);


module.exports = router;