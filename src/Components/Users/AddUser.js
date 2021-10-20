import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import './AddUser.css';

const AddUser = (props) => {
	const [enteredUsername, setEnteredusername] = useState('');
	const [enteredAge, setEnteredAge] = useState('');
	const [error, setError] = useState();

	const addUserHandler = (event) => {
		event.preventDefault();
		if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
			setError({
				title: 'Invalid input!',
				message: 'Please enter a valid name and age(non empty values).',
			});
			return;
		}
		if (+enteredAge < 1) {
			setError({
				title: 'Invalid Age!',
				message: 'Please enter a valid age !(> 0).',
			});
			return;
		}
		props.onAddUser(enteredUsername, enteredAge);
		setEnteredusername('');
		setEnteredAge('');
	};

	const usernameChangehandler = (event) => {
		setEnteredusername(event.target.value);
	};

	const ageChangehandler = (event) => {
		setEnteredAge(event.target.value);
	};

	const errorHandler = () => {
		setError(null);
	};

	return (
		<div>
			{error && <ErrorModal closeError={errorHandler} title={error.title} message={error.message} />}
			<Card>
				<form onSubmit={addUserHandler}>
					<h3>Add New User</h3>
					<label htmlFor="username">Username</label>
					<input id="username" type="text" value={enteredUsername} onChange={usernameChangehandler} />
					<label htmlFor="age">Age (years)</label>
					<input id="age" type="number" value={enteredAge} onChange={ageChangehandler} />
					<Button type="submit">Add User</Button>
				</form>
			</Card>
		</div>
	);
};

export default AddUser;
