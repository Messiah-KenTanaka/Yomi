import React, { useEffect, useState } from 'react';
import effectImage from '../assets/images/hand.png';  // エフェクト画像へのパスを指定

const ClickEffect = () => {
  const [showEffect, setShowEffect] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleWindowClick = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      
      setPosition({ x, y });
      setShowEffect(true);
      setTimeout(() => setShowEffect(false), 100);
    };

    window.addEventListener('click', handleWindowClick);
    
    return () => {
      window.removeEventListener('click', handleWindowClick);
    };
  }, []);

  return (
    <div style={{ position: 'absolute', top: position.y, left: position.x }}>
      {showEffect && <img src={effectImage} alt="Effect" />}
    </div>
  );
}

export default ClickEffect;
