const Employee = require('../models/employee');


exports.getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching employees' });
  }
};


exports.addEmployee = async (req, res) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();
    res.status(201).json({ message: 'Employee added', employee });
  } catch (err) {
    res.status(400).json({ message: 'Error adding employee', error: err.message });
  }
};

exports.updateEmployee = async (req, res) => {
  try {
    const updated = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ message: 'Employee updated', employee: updated });
  } catch (err) {
    res.status(500).json({ message: 'Error updating employee' });
  }
};


exports.deleteEmployee = async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.params.id);
    res.json({ message: 'Employee deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting employee' });
  }
};
