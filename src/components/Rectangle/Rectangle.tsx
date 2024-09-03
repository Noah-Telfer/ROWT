import React from 'react';
import Draggable from 'react-draggable';

const Rectangle: React.FC = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>rectangle</h1>
            <Draggable>
                <div style={styles.rectangle}></div>
            </Draggable>
        </div>
    );
};

const styles = {
    container: {
        width: '100vw',
        height: '100vh', 
        backgroundColor: 'white', 
        display: 'flex', 
        flexDirection: 'column' as 'column', 
        alignItems: 'center', 
        justifyContent: 'center', },
    title: {
        marginBottom: '20px', 
    },
    rectangle: {
        width: '150px', 
        height: '100px', 
        backgroundColor: 'lightblue', 
        border: '1px solid #000', 
        cursor: 'move', 
    },

}

export default Rectangle;