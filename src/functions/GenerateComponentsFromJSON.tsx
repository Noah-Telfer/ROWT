import React from 'react'; 
import { GenericComponent, GenericComponentProps } from '../components/containers/GenericComponent'; 
import {GetJsonData, GetJsonDataProps} from './GetJsonData'



    
    export const GenerateComponentsFromJSON = (component:GetJsonDataProps) => {
        const jsonDataVal=GetJsonData(component);

         return jsonDataVal.map((item) => (
                <GenericComponent
                    key={item.id}
                    as={item.as as React.ElementType}
                    className={item.className}
                    style={item.style as React.CSSProperties}
                >
                    {item.children}
                </GenericComponent>

            ))
        
    };

    
