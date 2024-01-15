import React from 'react'
import BulletPoint from './bullet-point/BulletPoint'
import './navBulletsList.scss'

const NavBulletsList = () => {
	return (
		<div className='bullet-points'>
			<BulletPoint text="<" isActive={false} />

			<BulletPoint text="1" isActive={true} />
			<BulletPoint text="2" isActive={false} />
			<BulletPoint text="3" isActive={false} />
			<BulletPoint text="4" isActive={false} />
			...
			<BulletPoint text="40" isActive={false} />

			<BulletPoint text=">" isActive={false} />

		</div>
	)
}

export default NavBulletsList