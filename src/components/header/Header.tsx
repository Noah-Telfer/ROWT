import React from 'react'; 
import './Header.css';
import jsonData from '../../content/data/header_json_data.json'
import { GenericComponent } from '../containers/GenericComponent'
import {GenerateComponentsFromJSON} from '../../functions/GenerateComponentsFromJSON'
import '../generic/button.css'


export const Header: React.FC = () => {
    return <header className="header"> 
            {GenerateComponentsFromJSON(jsonData)}
        </header>
}