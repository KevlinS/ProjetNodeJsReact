const express = require('express');
const router = express.Router();
const admin = require('../controllers/admin.controller');

//create  a new admin
router.post('/admin/register/', admin.create);

// login admin
router.post('/admin/login', admin.login);

module.exports = router;