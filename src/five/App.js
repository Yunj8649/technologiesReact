import React, { Component } from 'react';
import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';

class App extends Component {

	render() {
		return (
			<>
				<ValidationSample />
				<ScrollBox ref={ ref => this.ScrollBox = ref } />
				<button onClick={ () => this.ScrollBox.scrollToBottom() }>맨 밑으로</button>
				<button onClick={ () => this.ScrollBox.scrollToTop() }>맨 위로</button>
			</>
		)
	}
}

export default App;
