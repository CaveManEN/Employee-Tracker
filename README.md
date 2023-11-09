```markdown
# Employee Tracker

## Overview
Employee Tracker is a Node.js command-line application that interacts with a MySQL database to manage a company's employee records. This system allows for quick and efficient management of employee details, including departments, roles, and other related data.

## Features
- View all departments, roles, and employees in the company
- Add new departments, roles, and employees
- Update existing employee information, including their roles
- A user-friendly command-line interface for easy navigation and management

## Prerequisites
- Node.js (Download and install from [Node.js official website](https://nodejs.org/))
- MySQL (Download and install from [MySQL official website](https://www.mysql.com/downloads/))

## Installation
1. Clone the repository to your local machine using:
   ```sh
   git clone https://github.com/CaveManEN/employee-tracker.git
   ```
2. Navigate to the project directory:
   ```sh
   cd employee-tracker
   ```
3. Install the necessary npm packages:
   ```sh
   npm install
   ```
4. Create a `.env` file in the root directory and populate it with your MySQL user credentials and database information:
   ```env
   DB_HOST=localhost
   DB_USER=your_mysql_username
   DB_PASS=your_mysql_password
   DB_NAME=employee_tracker_db
   ```

## Usage
To start the application, run:
```sh
node index.js
```
Follow the on-screen prompts to manage the employee database.

## Database Setup
To set up your database schema and seed it with initial data, run the following commands from the MySQL command prompt:
```sql
source path/to/schema.sql
source path/to/seeds.sql
```
Make sure to replace `path/to/` with the actual path to the SQL files in the project directory.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


## Walkthrough Video
https://drive.google.com/file/d/1OupQR-IiV2F1rlCRCVBegJuOAk_-2MhH/view?usp=sharing
