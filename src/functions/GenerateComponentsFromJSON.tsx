import React from 'react'; 
import { GenericComponent } from '../components/containers/GenericComponent'; 
type ComponentData = { 
    id: string; 
    style?: React.CSSProperties; 
    children?: React.ReactNode;
    className?: string;
    as?: React.ElementType;
}; 
     
    type JSONData = ComponentData[];
    
    export const GenerateComponentsFromJSON = (data: JSONData) => {
         return Object.values(data).map((item) => {
             const {
                 id, 
                 style, 
                 children, 
                 className, 
                 as 
                } = item;
                 return (
                    <GenericComponent key={id} style={style} className={className} as={as} >
                        {children} 
                    </GenericComponent>
                ); 
            }); 
        };

