import React from 'react';
import './labelIcons.scss';
import { ILabelIcons } from 'src/shared/interfaces/LabelIconsProps';
import  Diamond  from "../../../shared/assets/icons/diamond.svg";
import  LinesDiagram  from "../../../shared/assets/icons/linesDiagram.svg";
import  Microphone  from "../../../shared/assets/icons/microphone.svg";
import  Watch  from "../../../shared/assets/icons/watch.svg";



interface LabelIconsProps {
    props: ILabelIcons
}

const LabelIcons: React.FC<LabelIconsProps> = ({props}) => {
    const icons: any  = {
        "diamond": Diamond, "linesDiagram": LinesDiagram,
        "microphone": Microphone, "watch": Watch
    }   

    return (
        <section className="label_icons">
           <img src={ icons[props.icon]} alt={props.icon}/> 
            <label>{props.label}</label>
            <p>{props.description}</p>
        </section>
    );
}

export default LabelIcons;