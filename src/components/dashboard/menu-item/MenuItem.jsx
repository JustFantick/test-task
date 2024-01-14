import React from 'react';
import './MenuItem.scss';
import { motion } from 'framer-motion';

const MenuItem = ({ iconClassName, title, isActive, onClickHandler }) => {
	return (
		<motion.a href='#' className='menu-item' onClick={(e) => {
			e.preventDefault();
			onClickHandler();
		}}
			whileHover={{ scale: 1.015 }}
			whileTap={{ scale: 0.95 }}

			data-isactive={isActive}
		>
			<div className={`${iconClassName} menu-item__icon`}></div>

			<p className='menu-item__title'>{title}</p>

			<div className="icon-arrow-right menu-item__arrow"></div>

		</motion.a>
	)
}

export default MenuItem