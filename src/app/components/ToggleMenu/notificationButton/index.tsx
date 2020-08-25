import React from 'react';
import './notificationButton.scss'

const NotificationButton:React.FC<any> = () => (
    <button className="button_icon notification_button">
        <i className="fas fa-bell notification">
        <span className="badge"></span>

        </i>
    </button>
)

export default NotificationButton;