import React from "react";


export const SetDimensions = () => {
    const root = document.documentElement;
    root.style.setProperty('--viewport-width', `${window.innerWidth}px`)
    root.style.setProperty('--viewport-height', `${window.innerHeight}px`)
}