import grainImage from '@/assets/images/grain.jpg'
import { twMerge } from 'tailwind-merge';
import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';

type CardProps = ({
    className?: string;
});

const Card = ({className , children , ...other}:ComponentPropsWithoutRef<'div'>) => {
    return (
        
            <div className={twMerge("bg-black rounded-3xl relative overflow-hidden z-0 after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-1 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none " , className)}
            {...other}>
                
                {children}
            </div>
        
    );
}

export default Card;
