'use strict'

import React from 'react';
import ReactDom from 'react-dom';

// CSS
import './index.css'

function BookList() {
	return (
		<section className='booklist'>
			<Book />
			<Book />
			<Book />
			<Book />
			<Book />
			<Book />
			<Book />
		</section>
	);
}

const Book = () => {
	return (
		<article className='book'>
			<Title />
			<Author />
			<Image />
		</article>
	)
};

const Image = () => (
	<img 
		src="https://upload.wikimedia.org/wikipedia/en/thumb/d/de/House_of_leaves.jpg/220px-House_of_leaves.jpg"
     	alt=''
    />            
);

const Author = () => <article>Mark Danialaziskie</article>;
const Title = () => <h1>House of Leaves</h1>;



ReactDom.render(<BookList/>,document.getElementById('root'));
