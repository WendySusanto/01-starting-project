import React from 'react';
import User from './User.js';

const UserList = (props) => {
	const deleteUserHandler = (id) => {
		props.onDeleteUser(id);
	};

	return (
		<ul>
			{props.userList.map((user) => {
				return (
					<User
						key={user.id}
						id={user.id}
						onDeleteUser={deleteUserHandler}>{`${user.username} (${user.age} years old)`}</User>
				);
			})}
		</ul>
	);
};

export default UserList;
