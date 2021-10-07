import React from 'react';

import './homepage.styles.scss';

 const Homepage = () => {
    return (
        <div className = 'homepage'>
            <div className = 'directory-menu'>
                <div className = 'menu-item'>
                    <div className = 'content'>
                        <h1 classname = 'title'>HATS</h1>
                        <span classname = 'subtitle'>SHOP NOW</span>
                    </div>
                </div>
                <div className = 'menu-item'>
                    <div className = 'content'>
                        <h1 classname = 'title'>JACKETS</h1>
                        <span classname = 'subtitle'>SHOP NOW</span>
                    </div>
                </div>
                <div className = 'menu-item'>
                    <div className = 'content'>
                        <h1 classname = 'title'>SNEAKERS</h1>
                        <span classname = 'subtitle'>SHOP NOW</span>
                    </div>
                </div>
                <div className = 'menu-item'>
                    <div className = 'content'>
                        <h1 classname = 'title'>WOMENES</h1>
                        <span classname = 'subtitle'>SHOP NOW</span>
                    </div>
                </div>
                <div className = 'menu-item'>
                    <div className = 'content'>
                        <h1 classname = 'title'>MENS</h1>
                        <span classname = 'subtitle'>SHOP NOW</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage;