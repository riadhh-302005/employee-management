const express = require('express');

const router = express.Router();

const {
    addEmployee,
    getEmployees,
    updateEmployee,
    deleteEmployee
} = require('../controllers/employeeController');

router.post('/add', addEmployee);

router.get('/', getEmployees);

router.put('/update/:id', updateEmployee);

router.delete('/delete/:id', deleteEmployee);

module.exports = router;