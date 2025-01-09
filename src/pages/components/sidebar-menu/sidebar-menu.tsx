import React from 'react';
import './sidebar-menu.scss';

const SidebarMenu: React.FC = () => {
    return (
        <>
            <div className="sidebar">
                <div className="sidebar__logo">
                    <a href="/">
                        <img src="src/assets/logo/logo.png" alt="Logo Image" />
                    </a>
                </div>
                <div className="sidebar__title">
                    <a href="/">
                        <h2>Sobriété énergetique</h2>
                    </a>
                </div>
            </div>
        </>
    );
};

export default SidebarMenu;