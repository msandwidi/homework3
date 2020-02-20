const express = require('express');
const chalk = require('chalk');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.set('trust proxy', 1);

const PORT = 5555;
const MONGO_URI = 'mongodb://127.0.0.1:27017/homework3';

mongoose.set('useCreateIndex', true);
mongoose.Promise = global.Promise;
mongoose
	.connect(MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(() => {
		console.log(chalk.green('✓-- ') + 'MongoDB ' + chalk.green('Connected'));
	})
	.catch((err) => {
		console.log(chalk.red('✗-- ') + 'Database Connection Error: ' + err.toString());
		process.exit(1);
	});

app.use(
	bodyParser.urlencoded({
		extended: false
	})
);
app.use(bodyParser.json());

//require('./controllers/home')(app);

app.listen(PORT, () => console.log(chalk.green('✓-- ') + `Server is running on port: ${PORT}`));

module.exports = app;
