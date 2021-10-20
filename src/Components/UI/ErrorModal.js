import React from 'react';
import Button from './Button';
import './ErrorModal.css';

const ErrorModal = (props) => {
	return (
		<div className="none">
			<div className="backdrop" onClick={props.closeError} />
			<div className="Error">
				<header>
					<h2>{props.title}</h2>
				</header>
				<main>
					<p>{props.message}</p>
				</main>
				<footer>
					<Button onClick={props.closeError} className="err-btn">
						Re-Try
					</Button>
				</footer>
			</div>
		</div>
	);
};

export default ErrorModal;
