import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import Navigation from './Components/Navigation';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const Team = () => <h1>Our Team</h1>;
		return (
			<div className="App">
				<Navigation />
				<Route render={({location}) => (<TransitionGroup>
					<CSSTransition key={location.key} timeout={300} classNames="item">
						<Switch location={location}>
							<Route exact path="/" component={Home} />
							<Route exact path="/about" render={() => <About title="About" />} />
							<Route exact path="/about/team" component={Team} />
							<Route exact path="/contact" component={Contact} />
						</Switch>
					</CSSTransition>
				</TransitionGroup>)} />
				
			</div>
		);
	}
}

export default App;
