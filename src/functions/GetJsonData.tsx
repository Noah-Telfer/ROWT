import React from "react"; 
import headerv1 from '../content/data/header_json_data.json'
import bodyv1 from '../content/data/body_json_data.json'

export type GetJsonDataProps = 'Header' | 'Footer' | 'Body'

export function GetJsonData (component : GetJsonDataProps):any[] {
    let returnJsonVal= [{}]
    switch(component){
        case 'Header':
            returnJsonVal = headerv1
            break;
        case 'Body':
            returnJsonVal = bodyv1
            break;
        case 'Footer':
            returnJsonVal = headerv1
            break;
        default:
            returnJsonVal = headerv1
    }
    return returnJsonVal;
}