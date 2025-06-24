import React from 'react';
import { ElementType } from 'react';

type TechIconProps = {
    Component: ElementType
}
const TechIcon = ({ Component }: TechIconProps) => {
    return (
        <div>
            <Component className="size-10 fill-[url(#tech-icon-gradient)]"/>
            <svg className='size-0 absolute'>
                <linearGradient id='tech-icon-gradient'>
                    <stop offset="0%" stopColor='rgb(110 231 183)'></stop>
                    <stop offset="100%" stopColor='rgb(56 189 248)'></stop>
                </linearGradient>
            </svg>
        </div>
    );
}

export default TechIcon;
