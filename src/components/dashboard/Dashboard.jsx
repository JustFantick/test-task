import React, { useState } from 'react';
import './dashboard.scss';
import MenuItem from './menu-item/MenuItem';
import userImage from '/user.jpg';

const Dashboard = () => {
	const [navItemsList, setNavItemsList] = useState([
		{ title: 'Dashboard', iconClassname: 'icon-key-square', isActive: true },
		{ title: 'Product', iconClassname: 'icon-3d-square', isActive: false },
		{ title: 'Customers', iconClassname: 'icon-customer', isActive: false },
		{ title: 'Income', iconClassname: 'icon-wallet', isActive: false },
		{ title: 'Promote', iconClassname: 'icon-promote', isActive: false },
		{ title: 'Help', iconClassname: 'icon-question', isActive: false },
	]);

	function changeActiveNavItem(id) {
		const updatedArray = navItemsList.map((item, n) => {
			if (n === id) {
				return { ...item, isActive: true };
			} else {
				return { ...item, isActive: false };
			}
		});

		setNavItemsList(updatedArray);
	}

	return (
		<aside className='dashboard'>
			<div className="dashboard__body">
				<div className="dashboard__head">
					<div className='icon-logo'></div>
					<h2>Dashboard <span>v.01</span></h2>
				</div>

				<ul className="dashboard__list">
					{
						navItemsList.map((navItem, id) => (
							<li key={id}>
								<MenuItem
									iconClassName={navItem.iconClassname}
									title={navItem.title}
									isActive={navItem.isActive}
									onClickHandler={() => changeActiveNavItem(id)}
								/>
							</li>
						))
					}

				</ul>

				<div className="dashboard__footer">
					<div className="user">
						<div className="user__image">
							<img src={userImage} alt="user-image" />
						</div>
						<div className="user__info">
							<h6>Evano</h6>
							<p>Project manager</p>
						</div>

					</div>
				</div>

			</div>

		</aside>
	)
}

export default Dashboard