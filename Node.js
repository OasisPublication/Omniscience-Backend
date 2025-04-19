npm init -y
npm install express

const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: ''
});

connection.connect();
connection.query('CREATE DATABASE my_db', (error) => {
  if (error) throw error;
  console.log('Database created!');
});