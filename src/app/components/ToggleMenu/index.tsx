import React, { useState } from 'react';
import ToggleButton from './toggleButton'
import './toggleMenu.scss'
import { ReactComponent as Logo } from '../../../shared/assets/icons/logo.svg'
import NotificationButton from './notificationButton';
import Nav from './nav';


const ToggleMenu: React.FC<any> = () => {
    const [openMenuState, setOpenMenuState] = useState<boolean>(false);

    const handleOpenMenu = (open: boolean) => {
        setOpenMenuState(open)
    }

    return (<div className="toogle_menu">
        <div>
            <ToggleButton callBackOpen={handleOpenMenu} />
            <Logo />
            <NotificationButton />
        </div>
        <Nav openMenu={openMenuState} />
    </div>)
};

export default ToggleMenu;