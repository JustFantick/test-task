import React from 'react';
import './bulletPoint.scss';

const BulletPoint = ({ text, isActive }) => {
  return (
    <div className='bullet' data-isactive={isActive}>{text}</div>
  )
}

export default BulletPoint