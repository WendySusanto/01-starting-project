import React, { useState } from 'react';
import Button from '../UI/Button';
import Modal from '../UI/Modal';

const AddUserForm = (props) => {
	const [username, setUsername] = useState('');
	const [age, setAge] = useState('');
	const [isError, setError] = useState('');

	const usernameChangeHandler = (event) => {
		setUsername(event.target.value);
	};

	const ageChangeHandler = (event) => {
		setAge(event.target.value);
	};

	const submitHandler = (event) => {
		event.preventDefault();

		if (username.trim().length === 0 || age.trim().length === 0) {
			setError('Please enter a valid name and age (non-empty values).');
		} else if (age <= 0) {
			setError('Please enter a valid age (> 0)');
		} else {
			const user = {
				id: Math.random().toString(),
				username: username,
				age: age
			};

			props.onAddUser(user);
		}
	};

	const dismissErrorHandler = () => {
		setError('');
	};

	if (isError.trim().length > 0) {
		return <Modal title="Error" onDismiss={dismissErrorHandler} message={isError} />;
	}

	return (
		<form onSubmit={submitHandler}>
			<div className="mb-3">
				<label htmlFor="username" className="form-label">
					Username
				</label>
				<input
					type="text"
					onChange={usernameChangeHandler}
					value={username}
					className="form-control"
					id="username"
				/>
			</div>
			<div className="mb-3">
				<label htmlFor="age" className="form-label">
					Age (Years)
				</label>
				<input
					type="number"
					onChange={ageChangeHandler}
					value={age}
					className="form-control"
					id="age"
				/>
			</div>
			<Button type="submit">Add User</Button>
		</form>
	);
};

export default AddUserForm;
