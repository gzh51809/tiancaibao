import React, { Component } from 'react';

import { Route, Switch } from "react-router-dom";

import Home from '../Home/Home.jsx';
import Lend from '../Lend/Lend.jsx';
import Service from '../Service/Service.jsx';
import Mine from '../Mine/Mine.jsx';

import Footer from '../../containers/Footer/Footer.jsx'

class Talent extends Component {
	render() {
		return (
			<div>
				<Switch>
					<Route path='/talent/home' component={Home} />
					<Route path="/talent/lend/"  component={Lend} />
					<Route path="/talent/service" component={Service} />
					<Route path="/talent/mine" component={Mine} />
				</Switch>
				<Footer />
			</div>
		);
	}
}

export default Talent;
