import React from 'react'; 
import './BackgroundContainer.css';

type BackgroundContainerProps = {
    children: React.ReactNode
}

export const BackgroundContainer: React.FC<BackgroundContainerProps> = ({children}) => {
    return <div className="background-container">{children}</div>
}