import React from 'react';
import ReactDOM from 'react-dom';
import MyComponent from './../src/index';
import './style.scss';

ReactDOM.render((
	<div>
		<h1 className='header-container'>React Component Preview</h1>
		<MyComponent options={['Option 1','Option 2','Option 3']} defaultSelected='Option 2'/>
	</div>
), document.getElementById('root'))
