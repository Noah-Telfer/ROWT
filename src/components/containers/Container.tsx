import react from 'react';
import './Container.css';
import {SetDimensions} from '../../functions/SetDimensions'

type ContainerProps = {
    children: React.ReactNode
}

export const Container: React.FC<ContainerProps> = ({children}) => {
    window.addEventListener('resize',SetDimensions)
    SetDimensions();
    return <div className="container"> {children}</div>
}