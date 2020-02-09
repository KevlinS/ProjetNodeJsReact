const express = require('express');
const router = express.Router();
const golf_controller = require('../controllers/golf.controller');


//endpoints
router.post('/golf', golf_controller.create);
router.get('/golfs', golf_controller.findAll);
router.get('/golf/:id', golf_controller.findOne);
router.put('/golf/:id',  golf_controller.updateOne);
router.delete('/golf/:id', golf_controller.deleteOne);
router.delete('/golfs', golf_controller.deleteAll);


module.exports = router;