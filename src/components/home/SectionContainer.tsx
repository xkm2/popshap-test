import React from "react";

import { Link } from 'react-router-dom';

interface Info {
    title: string;
    description: string;
    color: string;
    bColor: string;
    imgURL: string;
}
interface Props {
    info: Info;
    index: number;
}

export const SectionContainer: React.FC<Props> = ({ info, index }) => {
    let rowClass = info.color ? 'row ' + info.color : 'row';
    let infoClass = info.color ? 'info ' + info.color : 'info';
    let btnClass = info.bColor ? 'btn ' + info.bColor : 'btn';
    return (
        <div className={rowClass} key={index}>
            <div className={infoClass}>
                <h2>{info.title}</h2>
                <p>{info.description}</p>
                <Link to='/store' className={btnClass}> SEE THE MENU </Link>
            </div>
            <img src={info.imgURL} alt='' />
        </div>
    )
}