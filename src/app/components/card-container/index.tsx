import React from 'react';
import './card-container.scss'

const CardContainer:React.FC<any> = (props: any) => (
    <div className="container">
        <div>
        {props.children}
        </div>
    </div>
)

export default CardContainer;