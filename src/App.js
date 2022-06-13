import React, { useState } from 'react';
import Card from './components/UI/Card';
import AddUserForm from './components/AddUser/AddUserForm';
import UserList from './components/UserList/UserList';

const DUMMY_DATA = [
	{
		id: 1,
		username: 'Wendy',
		age: '21'
	},
	{
		id: 2,
		username: 'Ronny',
		age: '25'
	},
	{
		id: 3,
		username: 'Beruang',
		age: '5'
	}
];

function App() {
	const [userList, setUserList] = useState(DUMMY_DATA);

	const addUserHandler = (user) => {
		setUserList((prevState) => [user, ...prevState]);
	};

	const deleteUserHandler = (id) => {
		const filteredList = userList.filter((user) => {
			return user.id !== id;
		});

		setUserList(filteredList);
	};

	return (
		<div className="p-5">
			<Card className="w-75 mx-auto">
				<AddUserForm onAddUser={addUserHandler} />
			</Card>
			<Card className="w-75 mx-auto m-5">
				<UserList userList={userList} onDeleteUser={deleteUserHandler} />
			</Card>
		</div>
	);
}

export default App;
