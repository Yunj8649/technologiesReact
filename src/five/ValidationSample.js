import React, { Component } from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {
	state = {
		password: '',
		clicked: false,
		vaildated: false
	}

	handleChange = e => {
		// input에서 변경되는 이벤트가 발생하면 호출되는 함수
		// password 값을 업데이트
		this.setState({
			password: e.target.value
		})
	}

	handleButtonClick = () => {
		this.setState({
			clicked: true,
			validated: this.state.password === '0000'
		})
		this.input.focus();
	}

	render() {
		return (
			<div>
				<input
					type="password"
					ref={ ref => this.input = ref }
					value={ this.state.password }
					onChange={ this.handleChange }
					className={ this.state.clicked ? (this.state.validated ? 'success' : 'failure') : '' }
				/>
				<button onClick={ this.handleButtonClick }>검증하기</button>
			</div>
		);
	}
}

export default ValidationSample;