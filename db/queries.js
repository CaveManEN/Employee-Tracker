// Import the database connection at the top of your file
import db from './db.js';

async function getAllDepartments() {
  try {
    const [rows] = await db.query('SELECT * FROM departments');
    return rows;
  } catch (error) {
    console.error('Error fetching departments:', error);
    throw error;
  }
}

async function getAllRoles() {
  try {
    const [rows] = await db.query('SELECT * FROM roles');
    return rows;
  } catch (error) {
    console.error('Error fetching roles:', error);
    throw error;
  }
}

async function getAllEmployees() {
  try {
    const [rows] = await db.query('SELECT * FROM employees');
    return rows;
  } catch (error) {
    console.error('Error fetching employees:', error);
    throw error;
  }
}

async function addDepartment(departmentName) {
  try {
    const [results] = await db.execute('INSERT INTO departments (name) VALUES (?)', [departmentName]);
    return results;
  } catch (error) {
    console.error('Error adding department:', error);
    throw error;
  }
}

async function addRole(title, salary, departmentId) {
  try {
    const [results] = await db.execute('INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)', [title, salary, departmentId]);
    return results;
  } catch (error) {
    console.error('Error adding role:', error);
    throw error;
  }
}


async function addEmployee(firstName, lastName, roleId, manager_name) {
  try {
    const [results] = await db.execute('INSERT INTO employees (first_name, last_name, role_id, manager_name) VALUES (?, ?, ?, ?)', [firstName, lastName, roleId, manager_name]);
    return results;
  } catch (error) {
    console.error('Error adding employee:', error);
    throw error;
  }
}

export { getAllDepartments, getAllRoles, getAllEmployees, addDepartment, addRole, addEmployee };



