import React, { ReactElement, useEffect } from 'react'; 
import './Footer.css';
import {GenerateComponentsFromJSON} from '../../functions/GenerateComponentsFromJSON'
import '../generic/button.css'
import './logo.css'
/*
export const Footer: React.FC = () => {
    return <Footer className="Footer"> 
            {GenerateComponentsFromJSON(jsonData)}
        </Footer>
}
*/
export const Footer: React.FC = () => {
    return(
        <header className='footer'>{GenerateComponentsFromJSON('Footer')}</header>
        
    )
}

/*
function FilterData <E extends React.ReactElement>(jsonData: any[]): GenericComponentProps<E>  {
    const mappedData : GenericComponentProps<E>= {
        as : jsonData[0].as as E,
        style : jsonData[0].style as React.CSSProperties,
        className: jsonData[0].className,
        children: jsonData[0].children as React.ReactNode
    }
    
    return mappedData as GenericComponentProps<E>;
    
} 
  
*/
  

