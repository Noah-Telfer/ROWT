import React from 'react'; 
import { GenericComponent } from '../components/containers/GenericComponent'; 

type ComponentData<E extends React.ElementType> = { 
    id: string; 
    style?: React.CSSProperties|null; 
    children?: React.ReactNode;
    className?: string;
    as?: E;
}; 
    type ComponentSegment<E extends React.ElementType> = ComponentData<E> & Omit<React.ComponentProps<E>, keyof ComponentData<E>>  

    type JSONData = ComponentSegment<any>[];
    
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
                    <GenericComponent key={id} style={style || undefined } className={className} as={as} >
                        {children} 
                    </GenericComponent>
                ); 
            }); 
        };

