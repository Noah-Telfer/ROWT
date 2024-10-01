import React, { ReactElement, useEffect } from 'react'; 
import {GenerateComponentsFromJSON} from '../../functions/GenerateComponentsFromJSON'
import '../generic/button.css'
import '../generic/herotext.css'

export const Body: React.FC = () => {
    return(
        <div className='hero-text'>{GenerateComponentsFromJSON('Body')}</div>
        
    )
}