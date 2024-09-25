import React, { ReactElement, useEffect } from 'react'; 
import './Header.css';
import jsonData from '../../content/data/header_json_data_simple.json'
import { GenericComponent, GenericComponentProps} from '../containers/GenericComponent'
import {GenerateComponentsFromJSON} from '../../functions/GenerateComponentsFromJSON'
import '../generic/button.css'
import fs from 'fs'
/*
export const Header: React.FC = () => {
    return <header className="header"> 
            {GenerateComponentsFromJSON(jsonData)}
        </header>
}
*/
export const Header: React.FC = () => {
    
    useEffect(() => {
        console.log(jsonData);
    },[]);
    const htmlElement= jsonData[0].as as React.ElementType;
    return (<header className="header"> 
        <GenericComponent as = {htmlElement} className={jsonData[0].className} style={jsonData[0].style as React.CSSProperties}>{jsonData[0].children}</GenericComponent>
        </header>
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
  

