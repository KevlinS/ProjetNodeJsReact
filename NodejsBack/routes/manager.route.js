const express = require('express');
const router = express.Router();
const manager_controller = require('../controllers/manager.controller');
const verifyToken = require('../helpers/verifyToken');

//endpoints
router.post('/manager', manager_controller.create);
router.get('/managers', manager_controller.findAll);
router.get('/manager/:id', manager_controller.findOne);
router.put('/manager/:id',  manager_controller.updateOne);
router.delete('/manager/:id', manager_controller.deleteOne);
router.delete('/managers', manager_controller.deleteAll);

module.exports = router;