import React from 'react';
import './statusButton.scss';

const StatusButton = ({ isActive }) => {
	return (
		<div className='status-button' data-isactive={isActive}>{isActive ? 'Active' : 'Inactive'}</div>
	)
}

export default StatusButton