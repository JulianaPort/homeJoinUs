
import './toggleButton.scss'
import React, { useState } from 'react';

interface IToggleButtonProps {
    callBackOpen: any;
}
const ToggleButton: React.FC<IToggleButtonProps> = (props) => {

    const [openState, setOpenState] = useState(false);

    function handleOpenState() {
        setOpenState(!openState)
        props.callBackOpen(!openState);
    }

    return (
        <button className="button_icon toggle_button">
            <i className={openState ? 'fas fa-chevron-up' : 'fas fa-bars' }

        onClick={handleOpenState}
        >

        </i>
    </button >
    )
};

export default ToggleButton;