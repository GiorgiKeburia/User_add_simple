import React from 'react';
import './UserList.css';

const UserList = (props) => {
	return (
		<ul>
			<li>Max: 24 Yeards Old!</li>
			<li>Elis: 22 Years Old!</li>
			<li>Bernard: 29 years Old!</li>
			{props.users.map((user) => {
				return (
					<li key={user.id}>
						{user.name}: {user.age} years old!
					</li>
				);
			})}
		</ul>
	);
};

export default UserList;
