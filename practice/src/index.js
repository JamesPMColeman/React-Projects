'use strict'

import React from 'react';
import ReactDom from 'react-dom';


function Greeting() {
	return (
		<div>
			<h2>Hello World</h2> 
			<Person />
			<Message />
		</div>
	);
}

const Person = () => <h4>Hello user</h4>;
const Message = () => {
	return <p>Welcome to this component</p>;
};

ReactDom.render(<Greeting/>,document.getElementById('root'));
