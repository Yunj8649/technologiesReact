import React, { Component } from 'react';
import './App.css';

class App extends Component {

	render() {
		const name = '리액트'
		return (
			<>
				<h1>{ name } 안녕?</h1>
				<h2>잘 작동하니?</h2>
			</>
		)
	}
}

export default App;

function Dog(name) {
	this.name = name;
}

Dog.prototype.say = function () {
	console.log(this.name + ': 멍멍');
}
var dog = new Dog('검둥이');
dog.say();
