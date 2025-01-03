# GoranBackend

Goranbackend is an example of a simple application aimed at introducing users to the basics of CRUD operations,
such as FETCH, CREATE, UPDATE, and DELETE. The API requests have been tested using Thunder Client.
You need to install the My Sql database on your computer.

---

## 🔧⚙️🔧 Installation and settings
- **npm init -y**: Used to quickly create a package.json file for a Node.js project. Package.json is a file in a Node.js project that contains metadata and configuration information.
- **npm install express**: Installs the Express framework as a dependency for your Node.js project. Express popular web framework for building web applications and APIs in Node.js.
- **npm install nodemailer**:  Installs the Nodemailer package as a dependency for your Node.js project. Nodemailer is the name of the package, which sending emails. 
- **npm install dotenv**: dotenv is a popular package that helps manage environment variables in a Node.js application.
- **npm install --save mysql2**: Downloads and installs the mysql2 package and adds mysql2 to the dependencies section in the package.json file of your project. 
- **npm install --save sequelize**: Downloads and installs the sequelize package and adds sequelize to the dependencies section in the package.json file of your project.
- **npm install cors**: Cors to handle cross-origin requests, which is essential for handling requests from different domains securely in your Express-based web applications.

---

## 🛠️ Technologies Used
- **Node JS**:    Used as the runtime environment to build the backend server, handle requests, and interact with file systems.
- **Express**:    A lightweight framework for building web applications, managing routing, middleware, and creating RESTful APIs efficiently.
- **JavaScript**: Enables interactivity, dynamic content manipulation, and seamless communication between the frontend and backend.
- **MySQL**:      An open-source relational database management system (RDBMS) that uses Structured Query Language (SQL) to manage and interact with data.
- **Sequelize**:  Popular Node.js ORM (Object-Relational Mapper) designed to work with relational databases like MySQL, PostgreSQL, SQLite, and others. 
---

## 📂 Project Structure

Goranbackend/
├── routes/
│   ├── dataRoutes.js
│   ├── locationRoutes.js
│   └── tagsRoutes.js
├── controllers/
│   ├── data.js
│   ├── locations.js
│   └── tags.js
├── config/
│   └── database.js
├── node_modules/    
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
├── README.md
└── tags.txt

---

## 🌐 📄  Ways to display files from mySQL:

- **http://localhost:3000/db-test/data**
- **http://localhost:3000/db-test/locartion**
- **http://localhost:3000/db-test/tags**