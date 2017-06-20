const express         = require('express'); //Framework Express
const bodyParser      = require('body-parser'); //Parsea el post para obtener objetos json en el request
const levelup         = require('levelup'); // Base de datos
const morgan          = require('morgan'); // Sistema de logging (muestra en la cosa los request)
const morganjson      = require('morgan-json');
const apiUsers        = require('./api/users'); //Endpoints relacionados al User model

const app = express();
const db  = levelup('./data/users', {valueEncoding: 'json'});

const format = morganjson({
  short: ':method :url :status',
  length: ':res[content-length]',
  'response-time': ':response-time ms'
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(morgan(format));

let router = express.Router();

router.get('/', (req, res) => {
  res.json({ name: 'yape-api',version: "0.0.1"});
});

app.use('/api/users.js',apiUsers(router,db));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Server running on port '+port+'!');
});


//HTML-BROWSER

'use strict';

const render = (root) => {
	root.empty();
	const wrapper = $('<div class ="wrapper"></div>');
	wrapper.append(Header());
	wrapper.append(Usuario(data));
	root.append(wrapper);
}


$( _ => {
	getMovies((err,data) => {
		if(err) console.log(err);
		const root = $("#root");
		render(root);
	});
})