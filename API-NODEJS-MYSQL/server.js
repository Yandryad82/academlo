const express = require('express');
const mysql = require('mysql');
const myconn = require('express-myconnection');
const routes = require('./routes');

const { application } = require('express');

const app = express();

app.set('port', process.env.PORT || 9000);

const dbOptions = {
	host: '34.207.57.189',
	port: '3306',
	user: 'root',
	password: '123.Abc**',
	database: 'app-hotel-db'
};

// middelware
app.use(myconn(mysql, dbOptions, 'single'));
app.use(express.json())

app.get('/', (req, res) => {
	res.send('Welcome to my API')
});

app.use('/api', routes)

//server running ----------------------------------------
app.listen(app.get('port'), () => {
	console.log('Server running on port', app.get('port'));
})