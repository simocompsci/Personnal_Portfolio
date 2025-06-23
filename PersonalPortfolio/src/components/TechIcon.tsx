import React from 'react';
import { ElementType } from 'react';

type TechIconProps={
    Component: ElementType
}
const TechIcon = ({Component}:TechIconProps) => {
    return (
        <div>
            <Component className="size-10"/>
        </div>
    );
}

export default TechIcon;
