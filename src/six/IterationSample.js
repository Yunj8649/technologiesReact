import React, { useEffect, useMemo, useState } from 'react';
import _ from 'lodash';

/* const IterationSample = () => {
	return (
		<ul>
			<li>눈사람</li>
			<li>얼음</li>
			<li>눈</li>
			<li>바람</li>
		</ul>
	)
} */

/* const IterationSample = () => {
	const names = ['눈사람', '얼음', '눈', '바람'];
	const nameList = names.map((name, index) => <li key={ index }>{ name }</li>)
	return (<ul>{ nameList }</ul>)
} */

const IterationSample = () => {
	const [names, setNames] = useState([
		{ id: 1, text: '눈사람' },
		{ id: 2, text: '얼음' },
		{ id: 3, text: '눈' },
		{ id: 4, text: '바람' },
	]);
	const [inputText, setInputText] = useState('');
	const nextId = useMemo(() => {
		const len = (names.length + 1)
		const last = _.last(names).id
		console.log(len)
		console.log(last)
		return len > last ? len : last
	}, [names])
	const nameList = names.map((name, index) => <li key={ name.id } onDoubleClick={ () => onRemove(name.id) }>{ name.text }</li>)

	const onChange = e => setInputText(e.target.value);
	const onClick = () => {
		const nextNames = names.concat({ id: nextId, text: inputText })
		setNames(nextNames)
		// const nextNames = names.push({ id: nextId, text: inputText })
		setInputText('')
	}
	const onRemove = (id) => {
		const nextNames = names.filter((name) => name.id !== id)
		setNames(nextNames)
	}
	useEffect(() => {
		console.log(names)
	}, [names])
	return (
		<>
			<input value={ inputText } onChange={ onChange } />
			<button onClick={ onClick }>추가</button>
			<ul>{ nameList }</ul>
		</>
	)
}

export default IterationSample;