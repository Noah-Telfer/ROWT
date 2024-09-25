import React from 'react'; 
import { GenericComponent, GenericComponentProps } from '../components/containers/GenericComponent'; 

    
    type id = {
        id : string
    }  

    type ComponentData = GenericComponentProps<'div'> & id

    type JSONData = Array<ComponentData>

    
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




/*
type ComponentData<E extends React.ElementType> = { 
    id: string; 
    style?: React.CSSProperties; 
    children?: React.ReactNode;
    className?: string;
    as?: E;
}; 
    type ComponentSegment<E extends React.ElementType> = ComponentData<E> & Omit<React.ComponentProps<E>, keyof ComponentData<E>>  

    type JSONData = ComponentSegment<any>[];
     */