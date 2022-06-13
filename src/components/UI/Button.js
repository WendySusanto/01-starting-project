import React from 'react';

const Button = (props) => {
	return (
		<button
			onClick={props.onClick}
			type={props.type}
			className={`btn btn-primary ${props.className}`}>
			{props.children}
		</button>
	);
};

export default Button;
