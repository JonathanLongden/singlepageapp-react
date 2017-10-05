import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './components/routes/Routes.js';
import Header from './components/header/Header.js';
import Footer from './components/footer/Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css'; // styles bootstrap
import './index.css';
import './components/header/header.css';
import './components/footer/footer.css';

window.$ = window.jQuery = require('jquery');  // Required for Bootstrap 4
window.Popper = require('popper.js').default; // Required for Bootstrap 4
require('bootstrap');  // Needed only for Bootstrap JavaScript features

ReactDOM.render(
	<Router>
	<div>
	  <Header />
	  <Routes />
	  <Footer />
	</div>
	</Router>,
 document.getElementById('root'));
registerServiceWorker();