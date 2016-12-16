import React from 'react';
import './header.css';

const Header = (props) => {
    return(
      <div className="header">
        <button className="open-panel-btn" onClick={ props.openPanelClick }>Open Panel</button>
      </div>
    )
};

export default Header;
