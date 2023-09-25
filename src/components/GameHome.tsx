import React from 'react';
import './GameHome.scss';
import newButton from '../assets/images/atarasii.gif';

const GameHome = () => {
  return (
    <div className="AppHome">
			<h1 className="text-4xl font-bold leading-tight py-5">黄泉</h1>
			<p className="text-2xl">-Invitation from Hell-</p>
			<img src={newButton} alt="new game" />
		</div>
  )
}

export default GameHome