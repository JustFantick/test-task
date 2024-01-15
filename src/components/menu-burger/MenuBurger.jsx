import React from 'react'
import './menuBurger.scss'
import { motion } from 'framer-motion'

const MenuBurger = ({ isOpen, onClickHandler }) => {
	return (
		<motion.div className='menu-burger' onClick={onClickHandler}
			variants={{
				open: { rotate: '90deg' },
				closed: { rotate: '0deg' }
			}}
			animate={isOpen ? 'open' : 'closed'}
			transition={{ type: 'tween' }}
		>
			<motion.span className='top'></motion.span>
			<motion.span animate={isOpen ? { width: '66.666%' } : { width: '100%' }} className='middle'></motion.span>
			<motion.span animate={isOpen ? { width: '33.333%' } : { width: '100%' }} className='bottom'></motion.span>
		</motion.div>
	)
}

export default MenuBurger