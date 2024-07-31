import React from 'react';

const BurgerMenu = ({ onClick }) => {
  return (
    <div className="burger-menu" onClick={onClick}>
      &#9776; {/* Unicode for burger icon */}
    </div>
  );
};

export default BurgerMenu;