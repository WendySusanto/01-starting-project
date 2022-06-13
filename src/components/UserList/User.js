import React from 'react';

const User = (props) => {
	return (
		<li className="list-unstyled" id={props.id} onDoubleClick={() => props.onDeleteUser(props.id)}>
			{props.children}
		</li>
	);
};

export default User;
