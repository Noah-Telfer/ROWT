import React from "react";

type GenericComponentOwnProps<E extends React.ElementType> = {
    style?: React.CSSProperties;
    children?: React.ReactNode;
    className?: string;
    as?: E
}

type GenericComponentProps<E extends React.ElementType> = GenericComponentOwnProps<E> & 
    Omit<React.ComponentProps<E>, keyof GenericComponentOwnProps<E>>

export const  GenericComponent = <E extends React.ElementType = 'div'> ({
    style,
    children,
    className,
    as,
}:GenericComponentProps<E>) => {
    const Component = as || 'div'
    return (
        <Component style={style} className={className}>{children}</Component>
    )
}